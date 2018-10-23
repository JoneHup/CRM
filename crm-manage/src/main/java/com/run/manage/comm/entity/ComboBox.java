package com.run.manage.comm.entity;

import java.io.Serializable;

/**
 * @Auther: qiangyu
 * @Date: 2018/10/18
 * @Description: 下拉框实体类
 */
public class ComboBox implements Serializable {
    private String chkVal;
    private String chkDisplay;

    public String getChkVal() {
        return chkVal;
    }

    public void setChkVal(String chkVal) {
        this.chkVal = chkVal;
    }

    public String getChkDisplay() {
        return chkDisplay;
    }

    public void setChkDisplay(String chkDisplay) {
        this.chkDisplay = chkDisplay;
    }
}
