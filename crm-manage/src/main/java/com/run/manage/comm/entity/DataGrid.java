package com.run.manage.comm.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
/**
 * 
 * <p>Description: [数据分页组装类]</p>
 * Created on 2018年9月30日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public class DataGrid<T> implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Long total = 0L;
	private List<T> data = new ArrayList<T>();

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

}
