package com.run.sso.service.impl;

import com.run.sso.dao.ResourceDao;
import com.run.sso.model.Resource;
import com.run.sso.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/9/18 17:45
 * @Version 1.0
 **/
@Service
public class ResourceServiceImpl implements ResourceService {
    @Autowired
    private ResourceDao resourceDao;

    @Override
    public List<Resource> loadUserResources(Integer id) {
        return resourceDao.loadUserResources(id);
    }
}
