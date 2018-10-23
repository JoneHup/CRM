package com.run.manage.service;

import java.util.List;
import java.util.Map;

import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.model.Parameter;

/**
 * 
 * <p>Description: [参数字典表-服务层接口]</p>
 * Created on 2018年10月18日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public interface ParameterService {

	ExecuteResult<APIStatus> deleteClassify(Parameter param);

	List<Parameter> queryClassifyInfo(Parameter param);

}
