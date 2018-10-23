package com.run.manage.controller.usermanage.salesmanmanagement;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.run.manage.model.QueryUserVO;
import com.run.manage.model.TUser;
import com.run.manage.service.SalesmanUserManagementService;
/**
 * <p>Description: [后台管理--业务人员用户管理Controller]</p>
 * @author fenghao
 *Created on 2018年10月15日
 *Copyright (c) 2018 BJRUN
 */

@RestController
@RequestMapping("/salesmanUsermanagement")
public class SalesmanUserManagementController {

	@Autowired
	private SalesmanUserManagementService salesmanUserManagementService;
	
	/**
	 * 展示业务人员管理页面
	 * @return
	 */
	@RequestMapping("/showSalesmanPage")
	public ModelAndView showSalesmanPage(){
		ModelAndView modelAndView = new ModelAndView("usermanage/salesmanmanagement/usermanagement/admin_usermanage");
		return modelAndView;
	}
	
	/**
	 * 展示业务人员-用户管理页面
	 * @param model
	 * @return
	 */
	@RequestMapping("/getPage")
	public ModelAndView getPage(Model model){
		ModelAndView modelAndView = new ModelAndView("/include/admin_usermanage_1");
		return modelAndView;
	}
	
	/**
	 * 获得后台管理-业务人员管理-用户管理列表数据
	 * @return
	 */
	@RequestMapping(value="/getAllUserList",produces="application/json;charset=UTF-8")
	@ResponseBody
	public String getAllUserList( QueryUserVO queryUserVO,@RequestParam("currentPage") int currentPage,@RequestParam("pageSize") int pageSize){
		
		JSONObject jsonObject = salesmanUserManagementService.getAllUserList(queryUserVO,currentPage,pageSize);
		
		return jsonObject.toJSONString();
	}
	
	
	/**
	 * 修改用户状态
	 * @param tUser
	 */
	@RequestMapping("/updateUserStatus")
	public ModelAndView  updateUserStatus(TUser tUser){
		ModelAndView modelAndView = new ModelAndView("redirect:/salesmanUsermanagement/showSalesmanPage");
		try{
			salesmanUserManagementService.updateUserStatus(tUser);
			return modelAndView;
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 获得部门列表
	 * @return
	 */
	@RequestMapping(value="/getAllDeptList",produces="application/json;charset=utf-8")
	@ResponseBody
	public String getAllDeptList(){
		JSONObject jsonObject = salesmanUserManagementService.getAllDeptList();
		return jsonObject.toJSONString();		
	}
	
	/**
	 * 获得角色列表
	 * @return
	 */
	@RequestMapping(value="/getAllRoleList",produces="application/json;charset=utf-8")
	@ResponseBody
	public String getAllRoleList(){
		JSONObject jsonObject = salesmanUserManagementService.getAllRoleList();
		return jsonObject.toJSONString();		
	}
	
	@RequestMapping(value="/getAllRegionList",produces = "application/json;charset=utf-8" )
	@ResponseBody
	public String getAllRegionList(){
		JSONObject jsonObject = salesmanUserManagementService.getAllRegionList();
		return jsonObject.toJSONString();
	}
	
	/**
	 * 获得用户状态列表
	 * @return
	 */
	@RequestMapping(value="/getAllStatusList",produces="application/json;charset=utf-8")
	@ResponseBody
	public String getAllStatusList(){
		JSONObject jsonObject = salesmanUserManagementService.getAllStatusList();
		return jsonObject.toJSONString();		
	}
	
	@RequestMapping("/showAccountAddPage")
	public ModelAndView showAccountAddPage(){
		
		ModelAndView modelAndView = new ModelAndView("usermanage/salesmanmanagement/usermanagement/accountadd");
		return modelAndView;
	}
	
	/**
	 * 校验account/userCode是否唯一
	 * @param key account/userCode
	 * @param value
	 * @return
	 */
	@RequestMapping(value="/checkUnique",produces = "application/json;charset=utf-8")
	@ResponseBody
	public String checkUnique(@RequestParam("name") String name,@RequestParam("value") String value){
		Map<String,String> map = new HashMap<String,String>();
		map.put("key",name);
		map.put("value", value);
		JSONObject jsonObject = salesmanUserManagementService.checkUnique(map);
		return jsonObject.toJSONString();
	}
	
	/**
	 *  添加用户
	 * @param tUser
	 * @return
	 */
	@RequestMapping(value="/addUser",produces="application/json;charset=utf-8")
	@ResponseBody
	public String addUser(@RequestBody TUser tUser){
		JSONObject jsonObject = salesmanUserManagementService.addUser(tUser);
		return jsonObject.toJSONString();
	}
	
}
