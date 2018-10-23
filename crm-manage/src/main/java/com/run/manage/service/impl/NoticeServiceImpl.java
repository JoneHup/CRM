package com.run.manage.service.impl;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.entity.Pager;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.dao.NoticeDao;
import com.run.manage.model.YNotice;
import com.run.manage.service.NoticeService;
/**
 * 
 * <p>Description: [消息中心--业务服务层实现类]</p>
 * Created on 2018年10月15日
 * @author:[tongrongbing]
 * Copyright (c) 2018 BJRUN
 */
@Service
public class NoticeServiceImpl implements NoticeService{
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	private NoticeDao noticeDao;
	/**
	 * 
	 * <p>Description:[网评员-消息中心-分页查询]</p>
	 * Created on 2018年10月15日
	 * @param currentPage
	 * @param pageSize
	 * @return DataGrid 分页数据
	 * @author:[tongrongbing]
	 */
	@Override
	public DataGrid<YNotice> queryList(YNotice notice, Integer currentPage, Integer pageSize) {
		DataGrid<YNotice> dataGrid = new DataGrid<YNotice>();
		Pager<YNotice> pager = new Pager<YNotice>();
		if(pageSize != null && currentPage !=null){
			pager.setPage(currentPage);
			pager.setRows(pageSize);
		}
		//分页查询数据 
		List<YNotice> listResult = noticeDao.queryList(notice, pager, null);
		//数据总数量
		Long total = noticeDao.queryCount(notice, null);
		if(listResult != null && listResult.size() > 0){
			dataGrid.setData(listResult);	
			dataGrid.setTotal(total);
		}	
		return dataGrid;
	}
	
	/**
	 * 
	 * <p>Description:[根据消息id  查询消息详情]</p>
	 * Created on 2018年10月15日
	 * @param id
	 * @return 消息实体
	 * @author:[tongrongbing]
	 */
	@Override
	public YNotice queryNoticeById(Integer id) {
		try{
			YNotice notice = noticeDao.queryById(id);
			if(notice != null){
				//添加附件
				notice.addFileInfo(notice.getFilePath());
				return notice;
			}
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "YNoticeServiceImpl-queryNoticeById", e.getMessage());
		}		
		return null;
	}

	/**
	 * 
	 * <p>Description:[根据消息id 逻辑删除消息]</p>
	 * Created on 2018年10月16日
	 * @param id
	 * @return ExecuteResult包装结果
	 * @author:[tongrongbing]
	 */
	@Override
	public ExecuteResult<APIStatus> deleteNoticeById(Integer id) {
		ExecuteResult<APIStatus> result = new ExecuteResult<APIStatus>();
		YNotice notice = new YNotice();
		notice.setStatus(0);
		notice.setId(id);
		try{
			noticeDao.update(notice);
			result.setResult(APIStatus.OK_200);
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "NoticeServiceImpl-deleteNoticeById", "消息逻辑删除失败!");
			result.setResult(APIStatus.ERROR_500);
		}
		return result;
	}

	/**
	 * 
	 * <p>Description:[根据消息id 将消息置顶]</p>
	 * Created on 2018年10月17日
	 * @param id
	 * @return ExecuteResult包装结果
	 * @author:[tongrongbing]
	 */
	@Override
	public ExecuteResult<APIStatus> updateNoticeById(Integer id) {
		ExecuteResult<APIStatus> result = new ExecuteResult<APIStatus>();
		YNotice notice = new YNotice();
		notice.setId(id);
		notice.setModifyTime(new Timestamp(new Date().getTime()));
		try{
			noticeDao.update(notice);
			result.setResult(APIStatus.OK_200);
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "NoticeServiceImpl-updateNoticeById", "消息逻辑删除失败!");
			result.setResult(APIStatus.ERROR_500);
		}
		return result;
	}
}
