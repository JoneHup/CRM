package com.run.user.controller.net;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <p>Description: [网评员--素材--控制层]</p>
 * Created on 2018年10月8日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@RestController
@RequestMapping("/material")
public class MaterialController {

	@GetMapping("/public")
	public ModelAndView publicMaterial(){
		ModelAndView modelAndView = new ModelAndView("net/material/materialStore");
		return modelAndView;
	}
	
	@GetMapping("/share")
	public ModelAndView shareMaterial(){
		ModelAndView modelAndView = new ModelAndView("net/material/shareStore");
		return modelAndView;
	}
	
	@GetMapping("/personal")
	public ModelAndView personalMaterial(){
		ModelAndView modelAndView = new ModelAndView("net/material/personalStore");
		return modelAndView;
	}
}












