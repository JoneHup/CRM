package com.run.manage.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.run.manage.comm.dao.BaseDAO;
import com.run.manage.model.YSuCai;

/**
 * 
 * <p>Description: [素材--持久层接口]</p>
 * Created on 2018年10月17日
 * @author:[wuweiguang]
 * Copyright (c) 2018 BJRUN
 */

@Mapper
public interface SuCaiDao  extends  BaseDAO<YSuCai>{
	 String[] queryTypeList();
}
