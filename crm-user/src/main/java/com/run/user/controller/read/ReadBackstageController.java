package com.run.user.controller.read;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/8
 * @Description: 阅评员-后台管理-控制层
 */
@RestController
@RequestMapping("/read_backstage")
public class ReadBackstageController {
    /**
     *
     * @Description: 阅评员-后台管理
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/8
     */
    @GetMapping
    public ModelAndView backStage(){
        ModelAndView modelAndView = new ModelAndView("read/backstage/read_backstage");
        return modelAndView;
    }
}
