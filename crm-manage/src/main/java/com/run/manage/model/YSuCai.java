package com.run.manage.model;

import java.util.Date;

/**
 * 素材表
 * @author wuweiguang
 * @date 2018年10月16日 下午14:23
 */
public class YSuCai {
	/**
	 * 素材id
	 */
   private Integer Id;
   /**
    * 素材标题
    * 
    */
	 private String Title;
	 /**
	  * 素材内容
	  */
	 private String  Content;
	 /**
	  * 素材分类
	  */
	 private  String Type; 
	 /**
	  * 创建日期
	  */
	 private  Date CreateTime;
	 /**
	  * 修改时间
	  */
	 private  Date ModifyTime;
	 
	 /**
	  * 添加用户ID
	  */
	 private Integer AddUserID;
	 /**
	  * 添加用户账号
	  */
	 private  String UserAccount;
	 /**
	  * 标志（1：个人，2：公共；3：共享
	  */
	 private String BZ;
	 
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	
	public String getContent() {
		return Content;
	}
	public void setContent(String content) {
		Content = content;
	}
	public String getType() {
		return Type;
	}
	public void setType(String type) {
		Type = type;
	}
	public Date getCreateTime() {
		return CreateTime;
	}
	public void setCreateTime(Date createTime) {
		CreateTime = createTime;
	}
	public Date getModifyTime() {
		return ModifyTime;
	}
	public void setModifyTime(Date modifyTime) {
		ModifyTime = modifyTime;
	}
	public Integer getAddUserID() {
		return AddUserID;
	}
	public void setAddUserID(Integer addUserID) {
		AddUserID = addUserID;
	}
	public String getUserAccount() {
		return UserAccount;
	}
	public void setUserAccount(String userAccount) {
		UserAccount = userAccount;
	}
	public String getBZ() {
		return BZ;
	}
	public void setBZ(String bZ) {
		BZ = bZ;
	}
	 
}