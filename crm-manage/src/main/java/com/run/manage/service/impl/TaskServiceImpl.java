package com.run.manage.service.impl;

import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.comm.entity.Pager;
import com.run.manage.dao.TaskDao;
import com.run.manage.model.FatieScore;
import com.run.manage.model.YTask;
import com.run.manage.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/16
 * @Description: 任务中心服务层接口实现类
 */
@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskDao taskDao;


    /**
     * @Description: 任务中心-分页查询
     * @param: [task, currentPage, pageSize]
     * @return: com.run.manage.comm.entity.DataGrid<com.run.manage.model.YTask>
     * @auther: qiangyu
     * @date: 2018/10/17
     */
    @Override
    public DataGrid<YTask> queryList(YTask task, Integer currentPage, Integer pageSize) {
        DataGrid<YTask> dataGrid = new DataGrid<YTask>();
        Pager<YTask> pager = new Pager<YTask>();
        if(pageSize != null && currentPage !=null){
            pager.setPage(currentPage);
            pager.setRows(pageSize);
        }
        //分页查询数据
        List<YTask> listResult = taskDao.queryList(task, pager, null);
        if(listResult != null && listResult.size() > 0){
            for (YTask taskResult:listResult) {

            }
            dataGrid.setData(listResult);
        }
        //数据总数量
        Long total = taskDao.queryCount(task, null);
        dataGrid.setTotal(total);
        return dataGrid;
    }


    /**
     * @Description: 任务中心-任务类型查询
     * @param: []
     * @return: java.util.List<com.run.manage.comm.entity.ComboBox>
     * @auther: qiangyu
     * @date: 2018/10/18
     */
    @Override
    public List<ComboBox> queryTypeList() {
        return taskDao.queryTypeList();
    }

    /**
     * @Description:  任务中心-任务创建
     * @param: [task]
     * @return: void
     * @auther: qiangyu
     * @date: 2018/10/20
     */
    @Override
    public void insertTask(YTask task) {
        taskDao.add(task);
    }

    @Override
    /**
     * @Description:  任务中心-通过id查询任务
     * @param: [taskId]
     * @return: com.run.manage.model.YTask
     * @auther: qiangyu
     * @date: 2018/10/20
     */
    public YTask queryById(Long taskId) {
        return (YTask) taskDao.queryById(taskId);
    }

    @Override
    /**
     * @Description: 任务中心-编辑任务
     * @param: [task]
     * @return: void
     * @auther: qiangyu
     * @date: 2018/10/20
     */
    public void updateTask(YTask task) {
        taskDao.update(task);
    }

    @Override
    public List<FatieScore> queryFatieScore(Long taskId) {
        return taskDao.queryFatieScore(taskId);
    }
}
