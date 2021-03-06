package com.run.sso.controller;

import com.run.sso.model.User;
import net.sf.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/21 11:46
 * @Version 1.0
 **/
@Controller
@RequestMapping("/sso")
public class LoginController {

    /**
     * @Description //TODO
     *      登录首页
     * @Date 12:11 2018/9/21
     * @Param []
     * @return java.lang.String
     **/
    @RequestMapping(value="/login",method= RequestMethod.GET)
    public String login(){
        return "login";
    }

    /**
     * @Description //TODO
     *      登录校验
     * @Date 12:10 2018/9/21
     * @Param [user, model]
     * @return java.lang.String
     **/
    @RequestMapping(value="/login",method=RequestMethod.POST)
    public String login(User user, Model model){
        if (StringUtils.isEmpty(user.getUsername()) || StringUtils.isEmpty(user.getPassword())) {
            model.addAttribute("msg", "用户名或密码不能为空！");
            return "login";
        }
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token= new UsernamePasswordToken(user.getUsername(),user.getPassword());
        try {
            subject.login(token);
            model.addAttribute("msg", "登录成功！");
            return "redirect:success";
        }catch (LockedAccountException lae) {
            token.clear();
            model.addAttribute("msg", "用户已经被锁定不能登录，请与管理员联系！");
            return "success";
        } catch (AuthenticationException e) {
            token.clear();
            model.addAttribute("msg", "用户或密码不正确！");
            return "success";
        }
    }

    /**
     * @Description //TODO
     *      登陆异常处理
     * @Date 17:26 2018/9/25
     * @Param [request]
     * @return net.sf.json.JSONObject
     **/
    /*@ResponseBody
    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public JSONObject errorPage(HttpServletRequest request) {
        String exceptionName = (String) request.getAttribute(FormAuthenticationFilter.DEFAULT_ERROR_KEY_ATTRIBUTE_NAME);
        String msg = "";

        if (StringUtils.isNotBlank(exceptionName)){
            if (exceptionName.equals(IncorrectCredentialsException.class.getName())) {
                msg = "登录密码错误";
            } else if(exceptionName.equals(ExcessiveAttemptsException.class.getName())) {
                msg = "登录失败次数过多";
            } else if(exceptionName.equals(LockedAccountException.class.getName())) {
                msg = "账号已被锁定";
            } else if(exceptionName.equals(DisabledAccountException.class.getName())) {
                msg = "账号已被禁用";
            }
        } else {
            msg = "该账户已经登录，不能重复登录！";
        }

        return JSONObject.fromObject(msg);
    }*/
}
