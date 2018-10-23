
package com.run.manage.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 *<p>Description [**实体类]</p>
 *Created on 2018年10月17日
 * @author [fenghao]
 * Copyright (c) 2018 BJRUN
 */
public class TUser implements Serializable{

	
	private static final long serialVersionUID = 1L;
	private Integer id;//用户ID
	private String account;//账号
	private String password;//密码
	private String mobileN;//座机号码
	private String telephone;//手机号
	private String extenNumber;//分机号
	private String identityCode;//身份证号
	private String userType;//用户类型，0系统管理员，1业务管理员，2网评员，3阅评员',
	private String userCode;//类型编码
	private String userName;//真实姓名
	private String job;//职务
	private String email;//电子邮箱
	private int gender;//性别，1男，2女
	private int status =0;//用户状态，1启用，2停用
	private int isDelete;//用户是否被删除，1未删除，2已删除
	private Long regionID;//区域ID
	
	

	private String createTime;//创建时间,格式yyyy-MM-dd HH:mm:ss
	private String modifyTime;//修改时间,格式yyyy-MM-dd HH:mm:ss
	
	private String roleStr;//用户列表转换之后得到的字符串


	private String statusStr;//用户状态status转换之后得到的字符串
	//每个用户属于的角色列表
	private List<TRole> roles ;
	
	//每个用户所属部门
	private TDept dept;
	
	
	private Integer roleID;//角色ID，为了接收查询条件
	private Integer deptID;//部门ID，为了接收查询条件
	

	
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the job
	 */
	public String getJob() {
		return job;
	}

	/**
	 * @param job the job to set
	 */
	public void setJob(String job) {
		this.job = job;
	}

	/**
	 * @return the roleID
	 */
	public Integer getRoleID() {
		return roleID;
	}

	/**
	 * @param roleID the roleID to set
	 */
	public void setRoleID(Integer roleID) {
		this.roleID = roleID;
	}

	/**
	 * @return the deptID
	 */
	public Integer getDeptID() {
		return deptID;
	}

	/**
	 * @param deptID the deptID to set
	 */
	public void setDeptID(Integer deptID) {
		this.deptID = deptID;
	}

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
	 * @return the account
	 */
	public String getAccount() {
		return account;
	}

	/**
	 * @param account the account to set
	 */
	public void setAccount(String account) {
		this.account = account;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the mobileN
	 */
	public String getMobileN() {
		return mobileN;
	}

	/**
	 * @param mobileN the mobileN to set
	 */
	public void setMobileN(String mobileN) {
		this.mobileN = mobileN;
	}

	/**
	 * @return the userType
	 */
	public String getUserType() {
		return userType;
	}

	/**
	 * @param userType the userType to set
	 */
	public void setUserType(String userType) {
		this.userType = userType;
	}

	/**
	 * @return the userCode
	 */
	public String getUserCode() {
		return userCode;
	}

	/**
	 * @param userCode the userCode to set
	 */
	public void setUserCode(String userCode) {
		this.userCode = userCode;
	}

	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the gender
	 */
	public int getGender() {
		return gender;
	}

	/**
	 * @param gender the gender to set
	 */
	public void setGender(int gender) {
		this.gender = gender;
	}

	/**
	 * @return the status
	 */
	public int getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(int status) {
		this.status = status;
	}

	/**
	 * @return the regionID
	 */
	public Long getRegionID() {
		return regionID;
	}

	/**
	 * @param regionID the regionID to set
	 */
	public void setRegionID(Long regionID) {
		this.regionID = regionID;
	}

	/**
	 * @return the createTime
	 */
	public String getCreateTime() {
		return createTime;
	}

	/**
	 * @param createTime the createTime to set
	 */
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	/**
	 * @return the modifyTime
	 */
	public String getModifyTime() {
		return modifyTime;
	}

	/**
	 * @param modifyTime the modifyTime to set
	 */
	public void setModifyTime(String modifyTime) {
		this.modifyTime = modifyTime;
	}

	/**
	 * @return the roleStr
	 */
	public String getRoleStr() {
		StringBuilder builder = new StringBuilder();
		if(this.roles!=null && this.roles.size()>0){
			for(int i=0;i<roles.size();i++){
				builder.append(roles.get(i).getRoleName());
				if(i<roles.size()-1){
					builder.append(",");
				}
			}
		}
		return builder.toString();
	}

	/**
	 * @param roleStr the roleStr to set
	 */
	public void setRoleStr(String roleStr) {
	
		this.roleStr = roleStr;
	}

	/**
	 * @return the statusStr
	 */
	public String getStatusStr() {
		String statusStr = "";
		switch(this.status){
		case 1:
			statusStr = "正常";
			break;
		case 2:
			statusStr = "停用";
			break;
		}
		return statusStr;
	}

	/**
	 * @param statusStr the statusStr to set
	 */
	public void setStatusStr(String statusStr) {
		
		this.statusStr = statusStr;
			
	}

	/**
	 * @return the roles
	 */
	public List<TRole> getRoles() {
		return roles;
	}

	/**
	 * @param roles the roles to set
	 */
	public void setRoles(List<TRole> roles) {
		this.roles = roles;
	}

	/**
	 * @return the dept
	 */
	public TDept getDept() {
		return dept;
	}

	/**
	 * @param dept the dept to set
	 */
	public void setDept(TDept dept) {
		this.dept = dept;
	}
	
	/**
	 * @return the isDelete
	 */
	public int getIsDelete() {
		return isDelete;
	}

	/**
	 * @param isDelete the isDelete to set
	 */
	public void setIsDelete(int isDelete) {
		this.isDelete = isDelete;
	}

	/**
	 * @return the telephone
	 */
	public String getTelephone() {
		return telephone;
	}

	/**
	 * @param telephone the telephone to set
	 */
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	/**
	 * @return the extenNumber
	 */
	public String getExtenNumber() {
		return extenNumber;
	}

	/**
	 * @param extenNumber the extenNumber to set
	 */
	public void setExtenNumber(String extenNumber) {
		this.extenNumber = extenNumber;
	}

	/**
	 * @return the identityCode
	 */
	public String getIdentityCode() {
		return identityCode;
	}

	/**
	 * @param identityCode the identityCode to set
	 */
	public void setIdentityCode(String identityCode) {
		this.identityCode = identityCode;
	}
	
	
	
	
}
