package com.run.sso.service.impl;

import com.run.sso.dao.RoleDao;
import com.run.sso.model.Role;
import com.run.sso.service.RoleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:44
 * @Version 1.0
 **/
@Service
public class RoleServiceImpl implements RoleService {
    @Resource
    private RoleDao roleDao;

    @Override
    public List<Role> queryRoleListByUserId(Integer id) {
        return roleDao.queryRoleListByUserId(id);
    }
}
