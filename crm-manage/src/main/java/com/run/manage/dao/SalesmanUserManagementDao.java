package com.run.manage.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.run.manage.comm.entity.Pager;
import com.run.manage.model.TDept;
import com.run.manage.model.TRegion;
import com.run.manage.model.TRole;
import com.run.manage.model.TUser;

/**
 * <p>Description: [后台管理--业务人员用户管理持久层接口]</p>
 * @author fenghao
 *Created on 2018年10月15日
 *Copyright (c) 2018 BJRUN
 */
@Mapper
public interface SalesmanUserManagementDao {

	/**
	 * 获取用户信息列表包含用户所属角色信息、所在部门信息
	 * @return
	 */
	public List<TUser> getAllUserList(Pager page);


	/**
	 *  查询所有业务人员总数
	 * @return
	 */
	public long getAllUserCount(Pager<TUser> page);

	/**
	 * 修改用户状态
	 * @param tUser
	 */
	public void updateUserStatus(TUser tUser);

	/**
	 * 获得角色列表
	 * @return
	 */
	public List<TRole> getAllRoleList();

	/**
	 * 获得部门列表
	 * @return
	 */
	public List<TDept> getAllDeptList();


	/**
	 * 校验account/userCode是否唯一
	 * @param map
	 * @return
	 */
	public long checkUnique(Map map);


	/**
	 * 获取所有地区数据列表
	 * @return
	 */
	public List<TRegion> getAllRegionList();


	/**
	 * 
	 * @param tUser
	 * @return 新增用户ID
	 */
	public void addUser(TUser tUser);


	/**
	 * 为新增用户分配 角色
	 * @param tUser
	 */
	public void addRoleForUser(TUser tUser);

	

}
