package com.run.manage.controller.feign;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Description TODO
 * @Author hp
 * @Date 2018/10/17 19:35
 * @Version 1.0
 **/
@RestController
@RequestMapping(value = "/feign")
public class FeignProviderTemplateController {

    private static final Logger logger = LoggerFactory.getLogger(FeignProviderTemplateController.class);

   /* @Autowired
    private DiscoveryClient discoveryClient;*/

    @GetMapping(value = "/add/{a}/{b}")
    public Integer add(@PathVariable("a") Integer a, @PathVariable("b") Integer b) {
        Integer r = a + b;
        return r;
    }

    @RequestMapping(value = "/getMap" , method = RequestMethod.POST)
    public Map<String , Object> getMap(@RequestBody String name) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Map<String, Object> map = new HashMap<>();
        map.put("name" , name);
        map.put("time" , sdf.format(new Date()));
        return map;
    }

}
