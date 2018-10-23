package com.run.user.controller.net;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.alibaba.fastjson.JSONObject;
import com.run.user.common.entity.DataGrid;
import com.run.user.common.http.APIStatus;
import com.run.user.common.http.ApiResponse;
import com.run.user.model.YNotice;
import com.run.user.service.NoticeService;


/**
 * 
 * <p>Description: [网评员--消息中心--控制层]</p>
 * Created on 2018年10月8日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@RestController
@RequestMapping("/message")
public class NetNoticeController {

	@Autowired
	private NoticeService noticeService;
	
	
	/**
	 * 
	 * <p>Description:[跳转到消息中心页面]</p>
	 * Created on 2018年10月8日
	 * @return modelAndView
	 * @author:[tongrongbing]
	 */
	@GetMapping
	public ModelAndView messageCenter(){
		ModelAndView modelAndView = new ModelAndView("net/message/messageCenter");
		return modelAndView;
	}
	
	/**
	 * 
	 * <p>Description:[网评员--消息中心-分页查询（包括关键词查询 同一个方法）]</p>
	 * Created on 2018年10月10日
	 * @param param
	 * @return json格式数据
	 * @author:[tongrongbing]
	 */
	@PostMapping
	public Object queryList(@RequestParam Map<String,String> param){
		YNotice notice = new YNotice();
		Integer pageSize = Integer.valueOf(param.get("pageSize"));
		Integer currentPage = Integer.valueOf(param.get("currentPage"));
		String keyword = param.get("keyword");
		notice.setTitle(keyword);
		DataGrid<YNotice> dataGrid = noticeService.queryList(notice,currentPage,pageSize);
		return JSONObject.toJSONString(dataGrid);	
	}
	
	/**
	 * 
	 * <p>Description:[通过消息id 获取消息详情]</p>
	 * Created on 2018年10月10日
	 * @param id
	 * @return ModelAndView数据包装对象
	 * @author:[tongrongbing]
	 */
	@GetMapping("/{id}")
	public ModelAndView messageDetail(@PathVariable Integer id){
		YNotice notice = noticeService.queryNoticeById(id);		
		ModelAndView modelAndView = new ModelAndView("net/message/messageCenterDetail");
		modelAndView.addObject("message",notice);		
		return modelAndView;
	}
	
	
}
