package com.run.manage.service;

import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.model.YNotice;

/**
 * 
 * <p>Description: [消息中心--业务服务层接口]</p>
 * Created on 2018年10月15日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public interface NoticeService {

	DataGrid<YNotice> queryList(YNotice notice, Integer currentPage, Integer pageSize);

	YNotice queryNoticeById(Integer id);

	ExecuteResult<APIStatus> deleteNoticeById(Integer id);
	
	ExecuteResult<APIStatus> updateNoticeById(Integer id);

}
