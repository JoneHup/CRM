package com.run.manage.model;

import java.io.Serializable;

public class TRegion implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Integer id;//区域ID
	private String regionName;//区域名称
	private String regionCode;//区域代码
	private String regionJc;//区域简称
	private String regionStatus;//区域状态，1启用，2停用
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
	 * @return the regionName
	 */
	public String getRegionName() {
		return regionName;
	}
	/**
	 * @param regionName the regionName to set
	 */
	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}
	/**
	 * @return the regionCode
	 */
	public String getRegionCode() {
		return regionCode;
	}
	/**
	 * @param regionCode the regionCode to set
	 */
	public void setRegionCode(String regionCode) {
		this.regionCode = regionCode;
	}
	/**
	 * @return the regionJc
	 */
	public String getRegionJc() {
		return regionJc;
	}
	/**
	 * @param regionJc the regionJc to set
	 */
	public void setRegionJc(String regionJc) {
		this.regionJc = regionJc;
	}
	/**
	 * @return the regionStatus
	 */
	public String getRegionStatus() {
		return regionStatus;
	}
	/**
	 * @param regionStatus the regionStatus to set
	 */
	public void setRegionStatus(String regionStatus) {
		this.regionStatus = regionStatus;
	}
	
	

}
