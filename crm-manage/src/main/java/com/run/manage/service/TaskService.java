package com.run.manage.service;

import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.model.FatieScore;
import com.run.manage.model.YTask;

import java.util.List;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/16
 * @Description: 任务中心服务层接口
 */
public interface TaskService {
     DataGrid<YTask> queryList(YTask task,Integer currentPage, Integer pageSize);

    List<ComboBox> queryTypeList();

    void insertTask(YTask task);

    YTask queryById(Long taskId);

    void updateTask(YTask task);

    List<FatieScore> queryFatieScore(Long taskId);
}
