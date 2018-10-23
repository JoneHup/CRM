package com.run.manage.dao;

import com.run.manage.comm.dao.BaseDAO;
import com.run.manage.comm.entity.ComboBox;
import com.run.manage.model.FatieScore;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/16
 * @Description: 任务中心Dao层
 */
@Mapper
public interface TaskDao extends BaseDAO {
    List<ComboBox> queryTypeList();
    List<FatieScore> queryFatieScore(Long taskId);
}
