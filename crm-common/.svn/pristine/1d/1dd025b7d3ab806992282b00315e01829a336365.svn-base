package com.run.sso.service.impl;

import com.run.sso.dao.UserDao;
import com.run.sso.model.User;
import com.run.sso.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:42
 * @Version 1.0
 **/
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;

    @Override
    public User findByUserName(String username) {
        return userDao.findByUserName(username);
    }
}
