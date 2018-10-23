package com.run.sso.dao;

import com.run.sso.model.Role;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleDao {

    List<Role> queryRoleListByUserId(Integer id);
}
