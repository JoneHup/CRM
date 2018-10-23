package com.run.manage.model;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;
import java.util.Date;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/17
 * @Description: 任务实体类
 */
public class YTask implements Serializable {
    //任务id
    private Long id;
    //任务编号
    private String taskCode;
    //任务标题
    private String taskTitle;
    //任务描述
    private String taskDesc;
    //任务类型
    private String taskType;
    //创建时间
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    //添加用户id
    private Long addUserId;
    //附件路径
    private String filePath;
    //发帖截止时间
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date fatieEndTime;
    //阅评截止时间
    @JSONField (format="yyyy-MM-dd HH:mm:ss")
    private Date pinglunEndTime;
    //网评人数
    private Integer wpyCount;
    //文章篇数
    private Integer pian;
    //文章份数
    private Integer fen;
    //阅评篇数
    private Integer ypyCount;
    //状态
    private String status;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskCode() {
        return taskCode;
    }

    public void setTaskCode(String taskCode) {
        this.taskCode = taskCode;
    }

    public String getTaskTitle() {
        return taskTitle;
    }

    public void setTaskTitle(String taskTitle) {
        this.taskTitle = taskTitle;
    }

    public String getTaskDesc() {
        return taskDesc;
    }

    public void setTaskDesc(String taskDesc) {
        this.taskDesc = taskDesc;
    }

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Long getAddUserId() {
        return addUserId;
    }

    public void setAddUserId(Long addUserId) {
        this.addUserId = addUserId;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public Date getFatieEndTime() {
        return fatieEndTime;
    }

    public void setFatieEndTime(Date fatieEndTime) {
        this.fatieEndTime = fatieEndTime;
    }

    public Date getPinglunEndTime() {
        return pinglunEndTime;
    }

    public void setPinglunEndTime(Date pinglunEndTime) {
        this.pinglunEndTime = pinglunEndTime;
    }

    public Integer getWpyCount() {
        return wpyCount;
    }

    public void setWpyCount(Integer wpyCount) {
        this.wpyCount = wpyCount;
    }

    public Integer getPian() {
        return pian;
    }

    public void setPian(Integer pian) {
        this.pian = pian;
    }

    public Integer getFen() {
        return fen;
    }

    public void setFen(Integer fen) {
        this.fen = fen;
    }

    public Integer getYpyCount() {
        return ypyCount;
    }

    public void setYpyCount(Integer ypyCount) {
        this.ypyCount = ypyCount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
