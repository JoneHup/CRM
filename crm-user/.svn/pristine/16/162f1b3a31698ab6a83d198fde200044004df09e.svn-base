package com.run.user.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import com.run.user.common.interceptor.InterceptorHandler;
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Bean
    public HandlerInterceptor getLoginInterceptor(){
        return new InterceptorHandler();
    }
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// addPathPatterns 用于添加拦截规则
		// excludePathPatterns 用户排除拦截
		registry.addInterceptor(getLoginInterceptor())
        .addPathPatterns("/**")
        .excludePathPatterns("/error")
        .excludePathPatterns("/static/*");
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		 registry.addResourceHandler("/static/**")
         		 .addResourceLocations("classpath:/static/");
		 
		 registry.addResourceHandler("swagger-ui.html")
         .addResourceLocations("classpath:/META-INF/resources/");
		 registry.addResourceHandler("/webjars/**")
         .addResourceLocations("classpath:/META-INF/resources/webjars/");
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")//设置允许跨域的路径
        .allowedOrigins("*")//设置允许跨域请求的域名
        .allowCredentials(true)//是否允许证书 不再默认开启
        .allowedMethods("GET", "POST", "PUT", "DELETE")//设置允许的方法
        .maxAge(3600);//跨域允许时间
	}
	

}
