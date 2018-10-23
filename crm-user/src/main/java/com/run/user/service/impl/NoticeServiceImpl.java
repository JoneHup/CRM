package com.run.user.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.run.user.common.entity.DataGrid;
import com.run.user.common.entity.Pager;
import com.run.user.dao.NoticeDao;
import com.run.user.model.YNotice;
import com.run.user.service.NoticeService;

/**
 * 
 * <p>Description: [消息中心--业务服务层实现类]</p>
 * Created on 2018年10月9日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@Service
public class NoticeServiceImpl implements NoticeService{
	
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private NoticeDao YNoticeDao;
	
	/**
	 * 
	 * <p>Description:[网评员-消息中心-分页查询]</p>
	 * Created on 2018年10月9日
	 * @param currentPage
	 * @param pageSize
	 * @return DataGrid 分页数据
	 * @author:[tongrongbing]
	 */
	@Override
	public DataGrid<YNotice> queryList(YNotice YNotice,Integer currentPage, Integer pageSize) {
		DataGrid<YNotice> dataGrid = new DataGrid<YNotice>();
		Pager<YNotice> pager = new Pager<YNotice>();
		if(pageSize != null && currentPage !=null){
			pager.setPage(currentPage);
			pager.setRows(pageSize);
		}
		//分页查询数据 
		List<YNotice> listResult = YNoticeDao.queryList(YNotice, pager, null);
		if(listResult != null && listResult.size() > 0){
			dataGrid.setData(listResult);
		}
		//数据总数量
		Long total = YNoticeDao.queryCount(YNotice, null);
		dataGrid.setTotal(total);
		return dataGrid;
	}

	/**
	 * 
	 * <p>Description:[根据消息id  查询消息详情]</p>
	 * Created on 2018年10月10日
	 * @param id
	 * @return 消息实体
	 * @author:[tongrongbing]
	 */
	@Override
	public YNotice queryNoticeById(Integer id) {
		try{
			YNotice YNotice = YNoticeDao.queryById(id);
			if(YNotice != null){
				//添加附件
				YNotice.addFileInfo(YNotice.getFilePath());
				return YNotice;
			}
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "YNoticeServiceImpl-queryNoticeById", e.getMessage());
		}		
		return null;
	}

}










