package com.run.manage.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.run.manage.comm.entity.Pager;
import com.run.manage.comm.utils.MD5Utils;
import com.run.manage.dao.SalesmanUserManagementDao;
import com.run.manage.model.EUserStatusEnum;
import com.run.manage.model.QueryUserVO;
import com.run.manage.model.TDept;
import com.run.manage.model.TRegion;
import com.run.manage.model.TRole;
import com.run.manage.model.TUser;
import com.run.manage.service.SalesmanUserManagementService;
/**
 * <p>Description: [后台管理--业务人员用户管理Service接口实现类]</p>
 * @author fenghao
 *Created on 2018年10月15日
 *Copyright (c) 2018 BJRUN
 */
@Service
public class SalesmanUserManagementServiceImpl implements SalesmanUserManagementService {

	@Autowired
	private SalesmanUserManagementDao salesmanUserManagementDao;

	/**
	 * 获得后台管理-业务人员管理-用户管理列表数据
	 */
	@Override
	public JSONObject getAllUserList(QueryUserVO queryUserVo,int currentPage,int pageSize) {
		TUser user = new TUser();
		if(StringUtils.isNotBlank(queryUserVo.getAccount())){
			user.setAccount(queryUserVo.getAccount());
		}
		
		if(StringUtils.isNotBlank(queryUserVo.getUserName())){
			user.setUserName(queryUserVo.getUserName());
		}
		
		if(StringUtils.isNotBlank(queryUserVo.getStatus())){
			user.setStatus(Integer.parseInt(queryUserVo.getStatus()));
		}
		
		if(StringUtils.isNotBlank(queryUserVo.getDeptID())){
			user.setDeptID(Integer.parseInt(queryUserVo.getDeptID()));
		}
		
		if(StringUtils.isNotBlank(queryUserVo.getRoleID())){
			user.setRoleID(Integer.parseInt(queryUserVo.getRoleID()));
		}
		
		
		//获取用户信息列表（包含用户所属角色、用户所在部门）
		Pager<TUser> page = new Pager<TUser>(currentPage,pageSize);
		page.setT(user);
		
		List<TUser> userList = salesmanUserManagementDao.getAllUserList(page);
		
		JSONArray array = new JSONArray();//存储JSON对象
		long total = 0;//用户总数量
		
		if(userList!=null && userList.size()>0){
			for(TUser tUser:userList){
				
				JSONObject obj = new JSONObject();
				obj.put("id", tUser.getId());
				obj.put("col1", tUser.getAccount());
				obj.put("col2", tUser.getUserName());
				obj.put("col3",tUser.getDept().getDeptName() );
				obj.put("col4", tUser.getRoleStr());
				obj.put("col5", tUser.getStatus());
				
				array.add(obj);
			}
			//查询业务人员总数
			total = salesmanUserManagementDao.getAllUserCount(page);
		}
		
		
		//将数据转换为前端需要的JSON格式，参照/json/admin_usermanageGrid.json
		
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("total", total);
		jsonObj.put("data", array);
		
		return jsonObj;
	}

	/**
	 * 修改用户状态
	 */
	@Transactional(transactionManager="transactionManager")
	@Override
	public void updateUserStatus(TUser tUser) {
		salesmanUserManagementDao.updateUserStatus(tUser);
		
	}

	/**
	 * 获得用户状态列表,
	 * @return json/admin_usermanage.json格式数据
	 */
	@Override
	public JSONObject getAllStatusList() {
		//从枚举中获取用户状态数据
		EUserStatusEnum[] values = EUserStatusEnum.values();
		JSONObject jsonObject = new JSONObject();
		JSONArray array = new JSONArray();
		
		/*JSONObject o = new JSONObject();
		o.put("chkVal",-1);
		o.put("chkDisplay", "全部");
		array.add(o);*/
		
		for(EUserStatusEnum eUserStatusEnum:values){
			JSONObject obj = new JSONObject();
			obj.put("chkVal", eUserStatusEnum.getId());
			obj.put("chkDisplay", eUserStatusEnum.getStatusName());
			
			array.add(obj);
		}
		
		jsonObject.put("result",array);
		
		return jsonObject;
	}

	/**
	 * 获得角色列表
	 * @return json/admin_usermanage.json格式数据
	 */
	@Override
	public JSONObject getAllRoleList() {
		List<TRole> rolesList = salesmanUserManagementDao.getAllRoleList();
		
		JSONObject jsonObject = new JSONObject();
		JSONArray array = new JSONArray();
		
		/*JSONObject o = new JSONObject();
		o.put("chkVal",-1);
		o.put("chkDisplay", "全部");
		array.add(o);*/
		
		if(rolesList!=null && rolesList.size()>0){
			for(TRole tRole:rolesList){
				JSONObject obj = new JSONObject();
				obj.put("chkVal", tRole.getId());
				obj.put("chkDisplay",tRole.getRoleName());
				
				array.add(obj);
			}
		}
		
		jsonObject.put("result",array);
		return jsonObject;
	}

	/**获得部门列表
	 * @return json/admin_usermanage.json格式数据
	 */
	@Override
	public JSONObject getAllDeptList() {
	List<TDept>deptsList = salesmanUserManagementDao.getAllDeptList();
		
		JSONObject jsonObject = new JSONObject();
		JSONArray array = new JSONArray();
		
		/*JSONObject o = new JSONObject();
		o.put("chkVal",-1);
		o.put("chkDisplay", "全部");
		array.add(o);*/
		
		if(deptsList!=null && deptsList.size()>0){
			for(TDept tDept:deptsList){
				JSONObject obj = new JSONObject();
				obj.put("chkVal", tDept.getId());
				obj.put("chkDisplay",tDept.getDeptName());
				
				array.add(obj);
			}
		}
		
		jsonObject.put("result",array);
		return jsonObject;
	}

	/**
	 * 校验account/userCode是否唯一
	 * @param key account/userCode
	 * @param value
	 * @return
	 */
	@Override
	public JSONObject checkUnique(Map map) {
		long count = salesmanUserManagementDao.checkUnique(map);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("count", count);
		return jsonObject;
	}

	/**
	 * 获取所有地区数据列表
	 */
	@Override
	public JSONObject getAllRegionList() {
		JSONObject jsonObject = new JSONObject();
		JSONArray array = new JSONArray();
		
		List<TRegion>regionsList = salesmanUserManagementDao.getAllRegionList();
		
		if(regionsList!=null && regionsList.size()>0){
			for(TRegion tregion:regionsList){
				JSONObject obj = new JSONObject();
				obj.put("chkVal", tregion.getId());
				obj.put("chkDisplay",tregion.getRegionName());
				
				array.add(obj);
			}
		}
		
		jsonObject.put("result",array);
		return jsonObject;
	}

	/**
	 * 添加用户
	 */
	@Override
	public JSONObject addUser(TUser tUser) {
		JSONObject jsonObject = new JSONObject();
		tUser.setPassword(MD5Utils.md5Password(tUser.getPassword()));
		//获取当前系统时间
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		tUser.setCreateTime(format.format(new Date()));
		try{
			salesmanUserManagementDao.addUser(tUser);
			//判断是否为用户分配了角色
			if(tUser.getRoleID()!=null){
				//为新增用户分配了角色
				salesmanUserManagementDao.addRoleForUser(tUser);
			}
			jsonObject.put("status",200);	
		}catch(Exception e){
			jsonObject.put("status",500);
			e.printStackTrace();
		}
		return jsonObject;
	}

	
	
}
