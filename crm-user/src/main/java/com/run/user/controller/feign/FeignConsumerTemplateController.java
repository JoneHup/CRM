package com.run.user.controller.feign;

import com.alibaba.fastjson.JSONObject;
import com.run.user.depend.FeignTemplateClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

/**
 * @Description feign调用测试模板
 * @Author hp
 * @Date 2018/10/18 9:40
 * @Version 1.0
 **/
@RestController
@RequestMapping(value = "/feign")
public class FeignConsumerTemplateController {

    private  static final Logger logger = LoggerFactory.getLogger(FeignConsumerTemplateController.class);

    @Autowired
    private FeignTemplateClient feignTemplateClient;

    @GetMapping(value = "/add")
    public Integer add() {
        return feignTemplateClient.add(10 , 20);
    }

    @RequestMapping(value = "/getMap" , method = {RequestMethod.GET , RequestMethod.POST})
    public Map<String , Object> getMap() {
        return feignTemplateClient.getMap("hello");
    }

    @GetMapping("/edit")
    public String messageEdit(){
        return feignTemplateClient.messageEdit();
    }

    @GetMapping("/getAllStatusList")
    public JSONObject getAllStatusList() {
        return feignTemplateClient.getRoleDeptList();
    }

    @GetMapping("/getAllUserList")
    public JSONObject getAllUserList() {
        return feignTemplateClient.getAllUserList(1 , 10);
    }
}
