package com.run.manage.controller.message;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.alibaba.fastjson.JSONObject;
import com.run.manage.comm.constant.NoticeOperation;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.comm.http.ApiResponse;
import com.run.manage.model.YNotice;
import com.run.manage.service.NoticeService;


/**
 * 
 * <p>Description: [消息中心--控制器]</p>
 * Created on 2018年10月15日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@RestController
@RequestMapping("/notice")
public class NoticeManageController {
	
	@Autowired
	private NoticeService noticeService;
	
	/**
	 * 
	 * <p>Description:[跳转到消息中心页面]</p>
	 * Created on 2018年10月16日
	 * @return ModelAndView
	 * @author:[tongrongbing]
	 */
	@GetMapping
	public ModelAndView messageCenter(){
		ModelAndView modelAndView = new ModelAndView("messageCenter/messagecenter");
		return modelAndView;
	}
	
	/**
	 * 
	 * <p>Description:[跳转到消息编辑页面]</p>
	 * Created on 2018年10月16日
	 * @return ModelAndView
	 * @author:[tongrongbing]
	 */
	@GetMapping("/edit")
	public ModelAndView messageEdit(){
		ModelAndView modelAndView = new ModelAndView("messageCenter/messagecenteredit");
		return modelAndView;
	}
	/**
	 * 
	 * <p>Description:[管理员--消息中心-分页查询（包括关键词查询 同一个方法）]</p>
	 * Created on 2018年10月15日
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
	 * Created on 2018年10月15日
	 * @param id
	 * @return ModelAndView
	 * @author:[tongrongbing]
	 */
	@GetMapping("/{id}")
	public ModelAndView queryNoticeById(@PathVariable Integer id){
		YNotice notice = noticeService.queryNoticeById(id);		
		ModelAndView modelAndView = new ModelAndView("messageCenter/messagecenterdetail");
		modelAndView.addObject("message",notice);		
		return modelAndView;
	}
	
	/**
	 * 
	 * <p>Description:[根据消息id 删除消息/置顶消息]</p>
	 * Created on 2018年10月16日
	 * @param id
	 * @return JSONObject
	 * @author:[tongrongbing]
	 */
	@PutMapping("/{id}/{operation}")
	public JSONObject deleteNoticeById(@PathVariable(value = "id") Integer id,
			@PathVariable(value="operation") Integer operation){
		ExecuteResult<APIStatus> result = new ExecuteResult<APIStatus>();
		switch(operation){
			case NoticeOperation.DELETE :
				 result = noticeService.deleteNoticeById(id);	
				 break;
			default:
				result = noticeService.updateNoticeById(id);
		}	
		return ApiResponse.jsonData(result.getResult());	
	}
	
	
	
}








