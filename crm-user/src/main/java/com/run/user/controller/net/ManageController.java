package com.run.user.controller.net;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <p>Description: [网评员--后台管理--控制层]</p>
 * Created on 2018年10月9日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@RestController
@RequestMapping("/manage")
public class ManageController {
	
	@GetMapping
	public ModelAndView managePage(){
		ModelAndView modelAndView = new ModelAndView("net/manage/backStage");
		return modelAndView;
	}
	
	@GetMapping("/createAccount")
	public ModelAndView createAccount(){
		ModelAndView modelAndView = new ModelAndView("net/manage/accountCreate");
		return modelAndView;
	}
	
	@GetMapping("/updateAccount")
	public ModelAndView updateAccount(){
		ModelAndView modelAndView = new ModelAndView("net/manage/accountEdit");
		return modelAndView;
	}
	
	@GetMapping("/createMaJia")
	public ModelAndView createMaJia(){
		ModelAndView modelAndView = new ModelAndView("net/manage/maJiaCreate");
		return modelAndView;
	}
	
	@GetMapping("/updateMaJia")
	public ModelAndView createVir(){
		ModelAndView modelAndView = new ModelAndView("net/manage/maJiaEdit");
		return modelAndView;
	}
	
	
	
	
}
