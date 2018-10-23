package com.run.manage.model;

import java.io.Serializable;
import java.util.List;
/**
 * 
 *<p>Description [角色实体类]</p>
 *Created on 2018年10月17日
 * @author [fenghao]
 * Copyright (c) 2018 BJRUN
 */
public class TRole implements Serializable {

	
	private static final long serialVersionUID = 1L;

	private Integer id;//角色ID
	private String roleName;//角色名称
	private String roleDesc;//角色描述
	
//	private List<TUser> users;
	/**
	 * @return the users
	 */
//	public List<TUser> getUsers() {
//		return users;
//	}
	/**
	 * @param users the users to set
	 */
//	public void setUsers(List<TUser> users) {
//		this.users = users;
//	}
	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * @return the roleName
	 */
	public String getRoleName() {
		return roleName;
	}
	/**
	 * @param roleName the roleName to set
	 */
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	/**
	 * @return the roleDesc
	 */
	public String getRoleDesc() {
		return roleDesc;
	}
	/**
	 * @param roleDesc the roleDesc to set
	 */
	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}
	
	
}
