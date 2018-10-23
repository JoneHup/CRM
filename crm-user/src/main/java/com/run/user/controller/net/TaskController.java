package com.run.user.controller.net;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <p>Description: [网评员 --任务中心--控制层]</p>
 * Created on 2018年10月8日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@RestController
@RequestMapping("/task")
public class TaskController {

	@GetMapping("/center")
	public ModelAndView taskCenter(){
		ModelAndView modelAndView = new ModelAndView("net/task/taskCenter");
		return modelAndView;
	}
	
	/**
	 * 
	 * <p>Description:[任务中心--任务执行页面]</p>
	 * Created on 2018年10月8日
	 * @return
	 * @author:[tongrongbing]
	 */
	@GetMapping("/execute")
	public ModelAndView taskExecute(){
		ModelAndView modelAndView = new ModelAndView("net/task/taskExecute");
		return modelAndView;
	}
	
	/**
	 * 
	 * <p>Description:[任务中心--任务跟踪]</p>
	 * Created on 2018年10月8日
	 * @return
	 * @author:[tongrongbing]
	 */
	@GetMapping("/trace")
	public ModelAndView taskTrace(){
		ModelAndView modelAndView = new ModelAndView("net/task/taskTrace");
		return modelAndView;
	}
}
