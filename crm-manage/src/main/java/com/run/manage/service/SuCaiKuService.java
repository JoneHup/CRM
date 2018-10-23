package com.run.manage.service;

import java.util.List;

import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.model.YNotice;
import com.run.manage.model.YSuCai;

public interface SuCaiKuService {
	/**
	 * 查询素材
	 * @param sucai
	 * @param currentPage
	 * @param pageSize
	 * @return
	 */
	DataGrid<YSuCai> queryList(YSuCai sucai, Integer currentPage, Integer pageSize);
   /**
    * 删除素材
    * @param id
    * @return
    */
	ExecuteResult<APIStatus> deleteSuCaiById(Integer id);
	/**
	 * 查询下拉框
	 * @return
	 */
	 List<ComboBox> queryTypeList();
	 /**
	  * 根据id查询数据
	  * @param id
	  * @return
	  */
    YSuCai querySuCaiKuById(Integer id);
} 
