package com.run.user.common.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.run.user.common.entity.Pager;

/**
 * 
 * <p>Description: [基础通用 dao接口]</p>
 * Created on 2018年9月30日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public interface BaseDAO<T> {
	
	public void add(T t);

	public T queryById(Object id);

	public Integer update(T t);

	public Integer updateBySelect(T t);

	public Integer delete(Object id);

	public Long queryCount(@Param("entity") T t, @Param("paramMap")Map<String, Object> paramMap);

	public List<T> queryList(@Param("entity") T t,@Param("page") Pager page, @Param("paramMap")Map<String, Object> paramMap);

}
