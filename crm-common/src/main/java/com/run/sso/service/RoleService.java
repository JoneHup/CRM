package com.run.sso.service;

import com.run.sso.model.Role;

import java.util.List;

public interface RoleService {

    List<Role> queryRoleListByUserId(Integer id);
}
