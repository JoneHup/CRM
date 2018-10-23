package com.run.sso.model;

import java.io.Serializable;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:14
 * @Version 1.0
 **/
public class Role implements Serializable {

    private static final long serialVersionUID = -7293127433509734820L;

    private Integer id;

    private String roleName;

    private Integer cityCode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Integer getCityCode() {
        return cityCode;
    }

    public void setCityCode(Integer cityCode) {
        this.cityCode = cityCode;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", cityCode=" + cityCode +
                '}';
    }
}
