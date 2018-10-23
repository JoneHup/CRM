package com.run.manage.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.ExecuteResult;
import com.run.manage.comm.entity.Pager;
import com.run.manage.comm.http.APIStatus;
import com.run.manage.dao.SuCaiDao;
import com.run.manage.model.YNotice;
import com.run.manage.model.YSuCai;
import com.run.manage.service.SuCaiKuService;


@Service
public class YSuCaiServiceImpl implements SuCaiKuService {
 
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	private SuCaiDao sucaiDao;
	
	@Override
	public DataGrid<YSuCai> queryList(YSuCai sucai, Integer currentPage, Integer pageSize) {
		DataGrid<YSuCai> dataGrid = new DataGrid<YSuCai>();
		Pager<YSuCai> pager = new Pager<YSuCai>();
		if(pageSize != null && currentPage !=null){
			pager.setPage(currentPage);
			pager.setRows(pageSize);
		}
		//分页查询数据 
		List<YSuCai> listResult = sucaiDao.queryList(sucai, pager, null);
		if(listResult != null && listResult.size() > 0){
			dataGrid.setData(listResult);
		}
		//数据总数量
		Long total = sucaiDao.queryCount(sucai, null);
		dataGrid.setTotal(total);
		return dataGrid;
	}

	
	/**
	 * 根据素材id 删除素材
	 */
	@Override
	public ExecuteResult<APIStatus> deleteSuCaiById(Integer id) {
      
		ExecuteResult<APIStatus> result = new ExecuteResult<APIStatus>();

		try{
			sucaiDao.delete(id);
			result.setResult(APIStatus.OK_200);
		}catch(Exception e){
			logger.error("\n 方法[{}]，错误：[{}]", "YSucaiServiceImpl-deleteSucaiById", "素材逻辑删除失败!");
			result.setResult(APIStatus.ERROR_500);
		}
		return result;
		
		
	}


	@Override
	public List<ComboBox> queryTypeList() {
		 
		List<ComboBox> comboBoxes = new ArrayList<>();
        String[] types = sucaiDao.queryTypeList();
        for(int i=0;i<types.length;i++){
            ComboBox comboBox = new ComboBox();
            comboBox.setChkVal(i+"");
            comboBox.setChkDisplay(types[i]);
            comboBoxes.add(comboBox);
    	}
		return comboBoxes;

	}


	@Override
	public YSuCai querySuCaiKuById(Integer id) {
	
		return sucaiDao.queryById(id);
	}
}
