package com.run.user.controller.read;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/8
 * @Description: 阅评员-消息中心-控制层
 */
@RestController
@RequestMapping("/read_message")
public class ReadMessageController {

    /**
     *
     * @Description: 阅评员-消息中心
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping
    public ModelAndView messageCenter(){
        ModelAndView modelAndView = new ModelAndView("read/message/read_messagecenter");
        return modelAndView;
    }

    /**
     *
     * @Description: 阅评员-消息中心-详情页
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping("/detail")
    public ModelAndView messageCenterDetail(){
        ModelAndView modelAndView = new ModelAndView("read/message/read_messagecenterdetail");
        return modelAndView;
    }
}
