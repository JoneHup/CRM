package com.run.user.service;

import com.run.user.common.entity.DataGrid;
import com.run.user.model.YNotice;

/**
 * 
 * <p>Description: [消息中心--业务服务层--接口]</p>
 * Created on 2018年10月9日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
public interface NoticeService {

	DataGrid<YNotice> queryList(YNotice message,Integer currentPage, Integer pageSize);

	YNotice queryNoticeById(Integer id);

}
