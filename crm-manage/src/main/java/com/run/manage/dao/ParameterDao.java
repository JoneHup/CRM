package com.run.manage.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.run.manage.comm.dao.BaseDAO;
import com.run.manage.model.Parameter;

/**
 * 
 * <p>Description: [参数字典表-持久层接口]</p>
 * Created on 2018年10月18日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@Mapper
public interface ParameterDao extends BaseDAO<Parameter>{

	Integer deleteClassify(@Param("entity") Parameter param);

}
