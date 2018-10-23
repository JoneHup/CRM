package com.run.user.controller.read;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/8
 * @Description: 阅评员-任务中心-控制层
 */
@RestController
@RequestMapping("/read_task")
public class ReadTaskController {
    /**
     *
     * @Description: 阅评员-任务中心
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping
    public ModelAndView task(){
        ModelAndView modelAndView = new ModelAndView("read/task/read_commentatortask");
        return modelAndView;
    }

    /**
     *
     * @Description: 阅评员-进行任务评阅
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping("/detail1")
    public ModelAndView taskDetail1(){
        ModelAndView modelAndView = new ModelAndView("read/task/read_taskcenterdetail_1");
        return modelAndView;
    }

    /**
     *
     * @Description: 阅评员-查看已完成的任务评阅
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping("/detail2")
    public ModelAndView taskDetail2(){
        ModelAndView modelAndView = new ModelAndView("read/task/read_taskcenterdetail_2");
        return modelAndView;
    }
}
