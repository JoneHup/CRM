package com.run.sso.model;

import java.io.Serializable;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:21
 * @Version 1.0
 **/
public class Resource implements Serializable {

    private static final long serialVersionUID = 2712674127456978726L;

    private Integer id;

    /**
     * 资源名称
     */
    private String name;

    /**
     * 资源url
     */
    private String resUrl;

    /**
     * 资源类型   1:菜单    2：按钮
     */
    private Integer type;

    /**
     * 父资源
     */
    private Integer parentId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getResUrl() {
        return resUrl;
    }

    public void setResUrl(String resUrl) {
        this.resUrl = resUrl;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Resource{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", resUrl='" + resUrl + '\'' +
                ", type=" + type +
                ", parentId=" + parentId +
                '}';
    }
}
