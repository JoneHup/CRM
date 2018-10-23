package com.run.manage.dao;

import org.apache.ibatis.annotations.Mapper;

import com.run.manage.comm.dao.BaseDAO;
import com.run.manage.model.YNotice;
/**
 * 
 * <p>Description: [消息中心--持久层接口]</p>
 * Created on 2018年10月15日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@Mapper
public interface NoticeDao extends BaseDAO<YNotice>{

}
