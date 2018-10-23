package com.run.manage.controller.task;

import com.alibaba.fastjson.JSONObject;
import com.run.manage.comm.entity.ComboBox;
import com.run.manage.comm.entity.DataGrid;
import com.run.manage.model.FatieScore;
import com.run.manage.model.YTask;
import com.run.manage.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/16
 * @Description: 网评员任务控制类
 */
@RestController
@RequestMapping("/wpytask")
public class WpyTaskController {

    @Value("classpath:static/json/taskCenterGrid.json")
    private Resource resource;

    @Autowired
    private TaskService taskService;

    /**
     * @Description: 网评管理系统 - 任务中心 - 网评员任务
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/16
     */
    @GetMapping
    public ModelAndView taskCenter() {
        ModelAndView modelAndView = new ModelAndView("taskCenter/wpyTask/taskcenter");
        return modelAndView;
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务编辑窗口
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/17
     */
    @PostMapping("/taskeditAlert")
    public ModelAndView taskeditAlert(@RequestParam String id) {
        Long taskId = Long.valueOf(id);
        YTask task = taskService.queryById(taskId);
        ModelAndView modelAndView = new ModelAndView("include/taskeditAlert");
        modelAndView.addObject("task",task);
        return modelAndView;
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务创建窗口
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/17
     */
    @PostMapping("/createtaskAlert")
    public ModelAndView createtaskAlert() {
        ModelAndView modelAndView = new ModelAndView("include/createtaskAlert");
        return modelAndView;
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务查看
     * @param: []
     * @return: org.springframework.web.servlet.ModelAndView
     * @auther: qiangyu
     * @date: 2018/10/17
     */
    @GetMapping("/taskcenterdetail_1")
    public ModelAndView taskcenterdetail1(@RequestParam String id) {
        ModelAndView modelAndView = new ModelAndView("taskCenter/wpyTask/taskcenterdetail_1");
        Long taskId = Long.valueOf(id);
        YTask task = taskService.queryById(taskId);
        modelAndView.addObject("task",task);
        return modelAndView;
    }


    /**
     * @Description: 网评管理系统 - 任务中心 - 分页查询
     * @param: [param]
     * @return: java.lang.Object
     * @auther: qiangyu
     * @date: 2018/10/17
     */
    @PostMapping("/tasklist")
    public Object queryList(@RequestParam Map<String, String> param) {
        YTask task = new YTask();
        Integer pageSize = Integer.valueOf(param.get("pageSize"));
        Integer currentPage = Integer.valueOf(param.get("currentPage"));
        DataGrid<YTask> dataGrid = taskService.queryList(task, currentPage, pageSize);
        return JSONObject.toJSONString(dataGrid);
    }


    /**
     * @Description: 网评管理系统 - 任务中心 - 任务类型查询
     * @param: []
     * @return: java.lang.Object
     * @auther: qiangyu
     * @date: 2018/10/18
     */
    @PostMapping("/tasktype")
    public Object queryTaskType() {
        List<ComboBox> comboBoxes = taskService.queryTypeList();
        Map<String, List<ComboBox>> comboBoxMap = new HashMap<>();
        comboBoxMap.put("result",comboBoxes);
        return JSONObject.toJSONString(comboBoxMap);
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务中网评员发帖标题内容得分查询
     * @param: [id]
     * @return: java.lang.Object
     * @auther: qiangyu
     * @date: 2018/10/22
     */
    @RequestMapping("/fatiescore")
    public Object queryFatieScroe(@RequestParam String id) {
        Long taskId = Long.valueOf(id);
        List<FatieScore> fatieScores = taskService.queryFatieScore(taskId);
        return JSONObject.toJSONString(fatieScores);
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务创建
     * @param: [param]
     * @return: void
     * @auther: qiangyu
     * @date: 2018/10/19
     */
    @PostMapping("/insert")
    public void insertTask(@RequestParam Map<String, String> param){
        YTask task = new YTask();
        task.setCreateTime(new Date());
        taskService.insertTask(task);
    }

    /**
     * @Description: 网评管理系统 - 任务中心 - 任务编辑
     * @param: [param]
     * @return: void
     * @auther: qiangyu
     * @date: 2018/10/19
     */
    @PostMapping("/update")
    public void updateTask(@RequestParam YTask task){
        taskService.updateTask(task);
    }
}

