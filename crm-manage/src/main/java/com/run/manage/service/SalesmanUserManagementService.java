package com.run.manage.service;

import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.run.manage.model.QueryUserVO;
import com.run.manage.model.TUser;

/**
 * <p>Description: [后台管理--业务人员用户管理Service接口]</p>
 * @author fenghao
 *Created on 2018年10月15日
 *Copyright (c) 2018 BJRUN
 */
public interface SalesmanUserManagementService {

	

	/**
	 * 修改用户状态
	 * @param tUser
	 */
	void updateUserStatus(TUser tUser);

	/**
	 * 获得用户状态列表
	 * @return
	 */
	JSONObject getAllStatusList();

	/**
	 * 获得角色列表
	 * @return
	 */
	JSONObject getAllRoleList();

	/**
	 * 获得部门列表
	 * @return
	 */
	JSONObject getAllDeptList();

	/**
	 * 获得所有用户信息
	 * @param queryUserVo
	 * @param currentPage
	 * @param pageSize
	 * @return
	 */
	JSONObject getAllUserList(QueryUserVO queryUserVo, int currentPage, int pageSize);

	/**
	 * 校验account/userCode是否唯一
	 * @param map
	 * @return
	 */
	JSONObject checkUnique(Map map);

	/**
	 * 获取所有地区数据列表
	 * @return
	 */
	JSONObject getAllRegionList();

	/**
	 * 添加用户
	 * @param tUser
	 * @return
	 */
	JSONObject addUser(TUser tUser);

}
