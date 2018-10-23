package com.run.sso.model;

import java.io.Serializable;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:33
 * @Version 1.0
 **/
public class UserRole implements Serializable {
    private static final long serialVersionUID = 2052328569527968633L;

    private Integer userId;

    private String roleId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "userId=" + userId +
                ", roleId='" + roleId + '\'' +
                '}';
    }
}
