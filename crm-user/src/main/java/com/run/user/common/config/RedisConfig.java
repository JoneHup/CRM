package com.run.user.common.config;

import java.time.Duration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.CacheErrorHandler;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisClientConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;

import redis.clients.jedis.JedisPoolConfig;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
/**
 * redis配置类 springboot 2.0以上版本配置redis类 
 * @author tongr
 *
 */
@Configuration
@EnableCaching //必须加上支持缓存
public class RedisConfig extends CachingConfigurerSupport{
	@Value("${spring.redis.host}")
    private String redisHost;

    @Value("${spring.redis.port}")
    private int redisPort;

    @Value("${spring.redis.timeout}")
    private int redisTimeout;

    @Value("${spring.redis.password}")
    private String redisAuth;

    @Value("${spring.redis.database}")
    private int redisDb;

    @Value("${spring.redis.pool.max-active}")
    private int maxActive = 20;

    @Value("${spring.redis.pool.max-wait}")
    private int maxWait = -1;

    @Value("${spring.redis.pool.max-idle}")
    private int maxIdle = 10;

    @Value("${spring.redis.pool.min-idle}")
    private int minIdle = 10;

	private static final Logger lg = LoggerFactory.getLogger(RedisConfig.class);

	  @Bean
	  @Override
	  public KeyGenerator keyGenerator() {
	      //  设置自动key的生成规则，配置spring boot的注解，进行方法级别的缓存
	      // 使用：进行分割，可以很多显示出层级关系
	      // 这里其实就是new了一个KeyGenerator对象，只是这是lambda表达式的写法，我感觉很好用，大家感兴趣可以去了解下
	      return (target, method, params) -> {
	          StringBuilder sb = new StringBuilder();
	          sb.append(target.getClass().getName());
	          sb.append(":");
	          sb.append(method.getName());
	          for (Object obj : params) {
	              sb.append(":" + String.valueOf(obj));
	          }
	          String rsToUse = String.valueOf(sb);
	          lg.info("自动生成Redis Key -> [{}]", rsToUse);
	          return rsToUse;
	      };
	  }

	   /**
	     * ehcache默认过期时间
	     * @param redisConnectionFactory
	     * @return
	     */
	    @Bean
	    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
	        // 设置缓存有效期一小时
	        RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
	                .entryTtl(Duration.ofHours(1));
	        // 开启使用缓存名称最为key前缀
	        return RedisCacheManager
	                .builder(RedisCacheWriter.nonLockingRedisCacheWriter(redisConnectionFactory))
	                .cacheDefaults(redisCacheConfiguration).build();
	    }

	  @Bean
	  public RedisTemplate<String, Object> redisTemplate(JedisConnectionFactory jedisConnectionFactory ) {
	      //设置序列化
	      Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
	      ObjectMapper om = new ObjectMapper();
	      om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
	      om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
	      jackson2JsonRedisSerializer.setObjectMapper(om);
	      // 配置redisTemplate
	      RedisTemplate<String, Object> redisTemplate = new RedisTemplate<String, Object>();
	      redisTemplate.setConnectionFactory(jedisConnectionFactory);
	      RedisSerializer<?> stringSerializer = new StringRedisSerializer();
	      redisTemplate.setKeySerializer(stringSerializer); // key序列化
	      redisTemplate.setValueSerializer(jackson2JsonRedisSerializer); // value序列化
	      redisTemplate.setHashKeySerializer(stringSerializer); // Hash key序列化
	      redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer); // Hash value序列化
	      redisTemplate.afterPropertiesSet();
	      return redisTemplate;
	  }

	  @Override
	  @Bean
	  public CacheErrorHandler errorHandler() {
	      // 异常处理，当Redis发生异常时，打印日志，但是程序正常走
	      lg.info("初始化 -> [{}]", "Redis CacheErrorHandler");
	      CacheErrorHandler cacheErrorHandler = new CacheErrorHandler() {
	          @Override
	          public void handleCacheGetError(RuntimeException e, Cache cache, Object key) {
	              lg.error("Redis occur handleCacheGetError：key -> [{}]", key, e);
	          }

	          @Override
	          public void handleCachePutError(RuntimeException e, Cache cache, Object key, Object value) {
	              lg.error("Redis occur handleCachePutError：key -> [{}]；value -> [{}]", key, value, e);
	          }

	          @Override
	          public void handleCacheEvictError(RuntimeException e, Cache cache, Object key)    {
	              lg.error("Redis occur handleCacheEvictError：key -> [{}]", key, e);
	          }

	          @Override
	          public void handleCacheClearError(RuntimeException e, Cache cache) {
	              lg.error("Redis occur handleCacheClearError：", e);
	          }			
	      };
	      return cacheErrorHandler;
	  }

	  public RedisConnectionFactory connectionFactory(int redisDb) {
		    JedisPoolConfig poolConfig = new JedisPoolConfig();
		    poolConfig.setMaxTotal(maxActive);
		    poolConfig.setMaxIdle(maxIdle);
		    poolConfig.setMaxWaitMillis(maxWait);
		    poolConfig.setMinIdle(minIdle);
		    poolConfig.setTestOnBorrow(true);
		    poolConfig.setTestOnReturn(false);
		    poolConfig.setTestWhileIdle(true);
		    JedisClientConfiguration jedisClientConfiguration = JedisClientConfiguration.builder().usePooling().poolConfig(poolConfig).and().readTimeout(Duration.ofMillis(redisTimeout)).build();
		    RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration();
		    redisStandaloneConfiguration.setDatabase(redisDb);
		    redisStandaloneConfiguration.setPort(redisPort);
		    redisStandaloneConfiguration.setPassword(RedisPassword.of(redisAuth));
		    redisStandaloneConfiguration.setHostName(redisHost);
		    return new JedisConnectionFactory(redisStandaloneConfiguration, jedisClientConfiguration);
		}
}
