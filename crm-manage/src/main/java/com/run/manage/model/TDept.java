package com.run.manage.model;

import java.io.Serializable;

/**
 * 
 *<p>Description [部门/组织实体类]</p>
 *Created on 2018年10月17日
 * @author [fenghao]
 * Copyright (c) 2018 BJRUN
 */
public class TDept implements Serializable {

	private static final long serialVersionUID = 1L;

	
	private Integer id;//部门ID
	private Integer regionID;//地域ID
	private String deptName;//部门名称
	private String deptCode;//部门代码
	private String deptJc;//部门简称（首字母）
	private String deptStatus;//部门状态，1启用，2停用
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
	 * @return the regionID
	 */
	public Integer getRegionID() {
		return regionID;
	}
	/**
	 * @param regionID the regionID to set
	 */
	public void setRegionID(Integer regionID) {
		this.regionID = regionID;
	}
	/**
	 * @return the deptName
	 */
	public String getDeptName() {
		return deptName;
	}
	/**
	 * @param deptName the deptName to set
	 */
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	/**
	 * @return the deptCode
	 */
	public String getDeptCode() {
		return deptCode;
	}
	/**
	 * @param deptCode the deptCode to set
	 */
	public void setDeptCode(String deptCode) {
		this.deptCode = deptCode;
	}
	/**
	 * @return the deptJc
	 */
	public String getDeptJc() {
		return deptJc;
	}
	/**
	 * @param deptJc the deptJc to set
	 */
	public void setDeptJc(String deptJc) {
		this.deptJc = deptJc;
	}
	/**
	 * @return the deptStatus
	 */
	public String getDeptStatus() {
		return deptStatus;
	}
	/**
	 * @param deptStatus the deptStatus to set
	 */
	public void setDeptStatus(String deptStatus) {
		this.deptStatus = deptStatus;
	}
	
	
	
	
	
}
