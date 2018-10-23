package com.run.sso.model;

import java.io.Serializable;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:36
 * @Version 1.0
 **/
public class RoleResource implements Serializable {
    private static final long serialVersionUID = -1822011501092763380L;

    private Integer roleId;

    private String resourceId;

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    @Override
    public String toString() {
        return "RoleResource{" +
                "roleId=" + roleId +
                ", resourceId='" + resourceId + '\'' +
                '}';
    }
}
