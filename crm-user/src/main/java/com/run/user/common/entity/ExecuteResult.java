package com.run.user.common.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
/**
 * 
 * <p>Description: [执行的返回结果实体类]</p>
 * Created on 2018年10月4日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public class ExecuteResult <T> implements Serializable{
	private static final long serialVersionUID = 1L;

	private T result;
	private String resultMessage;
	private List<String> errorMessages = new ArrayList<String>();
	
	public boolean isSuccess() {
		return errorMessages.isEmpty()? true:false;
	}
	
	public T getResult() {
		return result;
	}
	
	public void setResult(T result) {
		this.result = result;
	}
	
	public String getResultMessage() {
		return resultMessage;
	}
	
	public void setResultMessage(String resultMessage) {
		this.resultMessage = resultMessage;
	}
	
	public List<String> getErrorMessages() {
		return errorMessages;
	}
	
	public void setErrorMessages(List<String> errorMessages) {
		this.errorMessages = errorMessages;
	}
	
	public void addErrorMessage(String errorMessage) {
		errorMessages.add(errorMessage);
	}
	
}
