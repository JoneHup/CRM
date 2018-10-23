package com.run.manage.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.enums.ParameterEnum;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.dao.ParameterDao;
import com.run.manage.model.Parameter;
import com.run.manage.service.ParameterService;
/**
 * 
 * <p>Description: [参数字典表--服务层接口实现]</p>
 * Created on 2018年10月18日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@Service
public class ParameterServiceImpl implements ParameterService{

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ParameterDao parameterDao;
	
	/**
	 * 
	 * <p>Description:[删除指定分类]</p>
	 * Created on 2018年10月18日
	 * @param 参数分类实体
	 * @return ExecuteResult包装结果
	 * @author:[tongrongbing]
	 */
	@Override
	public ExecuteResult<APIStatus> deleteClassify(Parameter param) {
		ExecuteResult<APIStatus> result = new ExecuteResult<APIStatus>();
		try{
			Integer count = parameterDao.deleteClassify(param);
			if(count > 0){
				result.setResult(APIStatus.OK_200);
			}
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "NoticeServiceImpl-deleteClassify", "分类删除失败!");
			result.setResult(APIStatus.ERROR_500);
		}	
		return result;
	}

	/**
	 * 
	 * <p>Description:[查询参数分类]</p>
	 * Created on 2018年10月18日
	 * @return List包装参数分类实体结果
	 * @author:[tongrongbing]
	 */
	@Override
	public List<Parameter> queryClassifyInfo(Parameter param) {
		List<Parameter> listResult = new ArrayList<Parameter>();
		try{
			listResult = parameterDao.queryList(param, null, null);
			if(!listResult.isEmpty() && listResult != null){
				return listResult;
			}						
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "NoticeServiceImpl-deleteParam", "参数分类查询失败："+e.getMessage());
		}			
		return null;
	}

}
