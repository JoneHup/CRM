package com.run.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;

/**
 * mybatis配置类
 * @author hupeng
 * @date 2017年12月15日上午10:49:40
 * @comment
 */
@Configuration
@EnableTransactionManagement
@MapperScan(value = "com.run.sso.dao")
public class SessionFactoryConfig {
    private static final String MAPPER_LOCATION = "classpath:/mapper/*.xml";
    private static final String MYBATIS_TYPEALIASESPACKAGE = "com.run.sso.model";

    @Resource
    private DataSource dataSource;

    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        sqlSessionFactoryBean.setMapperLocations(resolver.getResources(MAPPER_LOCATION));
        sqlSessionFactoryBean.setTypeAliasesPackage(MYBATIS_TYPEALIASESPACKAGE);
        return sqlSessionFactoryBean.getObject();
    }
    @Bean public PlatformTransactionManager transactionManager() throws SQLException {
        return new DataSourceTransactionManager(dataSource);
    }
}
