package com.run.user.model;
import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.alibaba.fastjson.annotation.JSONField;
/**
 * 
 * <p>Description: [消息实体类]</p>
 * Created on 2018年10月9日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public class YNotice implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String title; //消息标题
	
	private String content; //消息内容
	
	@JSONField (format="yyyy-MM-dd") //json转成时候的格式化
	private Date createTime;  // 消息发布时间
	
	private Integer noticeType; //消息类型
	
	private Integer addUserId; // 添加用户ID
	
	private String filePath; //附件地址
	
	private String userAccount; //添加人账号
	
	@JSONField (format="yyyy-MM-dd")
	private Date recomTime; //推荐日期
	
	@JSONField (format="yyyy-MM-dd")
	private Date endTime;  //结束日期
	
	private Map<String,String> fileInfo = new HashMap<String,String>();
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Integer getNoticeType() {
		return noticeType;
	}

	public void setNoticeType(Integer noticeType) {
		this.noticeType = noticeType;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public Date getRecomTime() {
		return recomTime;
	}

	public void setRecomTime(Date recomTime) {
		this.recomTime = recomTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public Map<String, String> getFileInfo() {
		return fileInfo;
	}

	public void setFileInfo(Map<String, String> fileInfo) {
		this.addFileInfo(filePath);
	}

	
	public Integer getAddUserId() {
		return addUserId;
	}

	public void setAddUserId(Integer addUserId) {
		this.addUserId = addUserId;
	}

	public String getUserAccount() {
		return userAccount;
	}

	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
	}

	public void addFileInfo(String filePath){	
		if(StringUtils.isNotBlank(filePath)){
			String[] array = filePath.split(",");
			for (String url : array) {	
				fileInfo.put(url,url.substring(url.lastIndexOf("/")+1));
			}
		}
	}
}
