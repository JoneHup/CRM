package com.run.manage.comm.interceptor;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/21 18:51
 * @Version 1.0
 **/
public class LoginInterceptor implements HandlerInterceptor {
	public static final String STATIC_URL="/static";
    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws
            Exception {
    	// 设置全局变量
    	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
    					+ request.getContextPath();
    	request.setAttribute("staticPath", basePath + STATIC_URL);
        request.setAttribute("basePath", basePath);
      /* Subject currentUser = SecurityUtils.getSubject();
        Session session = currentUser.getSession();

        if (session != null) {
            return true;
        }*/

       return true;
    	
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView
            modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
