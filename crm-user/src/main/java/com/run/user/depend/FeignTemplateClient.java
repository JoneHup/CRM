package com.run.user.depend;

import com.alibaba.fastjson.JSONObject;
import com.run.user.common.Const;
import feign.*;
import feign.codec.Decoder;
import feign.codec.ErrorDecoder;
import feign.jackson.JacksonDecoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.Map;

/**
 * @Description feign调用接口实现模板
 * @Author hp
 * @Date 2018/10/22 20:16
 * @Version 1.0
 **/
@Component
public class FeignTemplateClient {

    private static final String apiBaseUrl = Const.MANAGE_BASE_PATH;
    public static FeignClientInterface client = null;

    public FeignTemplateClient() {
        client = FeignClientInterface.jsonConnect();
    }

    interface FeignClientInterface {

        static FeignClientInterface stringConnect() {
            return Feign.builder()
                    .logger(new Logger.ErrorLogger())
                    .logLevel(Logger.Level.BASIC)
                    .target(FeignClientInterface.class, apiBaseUrl);
        }
        static FeignClientInterface jsonConnect() {
            Decoder decoder = new JacksonDecoder();
            return Feign.builder()
                    .decoder(decoder)
                    .errorDecoder(new FeignClientErrorDecoder(decoder))
                    .logger(new Logger.ErrorLogger())
                    .logLevel(Logger.Level.FULL)
                    .target(FeignClientInterface.class, apiBaseUrl);
        }

        @RequestLine("GET /feign/add/{a}/{b}")
        Integer add(@Param("a") Integer a, @Param("b") Integer b);

        @Headers({"Accept: application/json", "Content-Type: application/json"})
        @RequestLine("POST /feign/getMap")
        Map<String , Object> getMap(String name);

        @Headers("content-type: text/html")
        @RequestLine("GET /notice/edit")
        String messageEdit();

        @Headers("Content-Type: application/json")
        @RequestLine("GET /salesmanUsermanagement/getRoleDeptList")
        JSONObject getRoleDeptList();

        @Headers("Content-Type: application/json")
        @RequestLine("GET /salesmanUsermanagement/getAllUserList?currentPage={currentPage}&pageSize={pageSize}")
        JSONObject getAllUserList(@Param("currentPage") int currentPage, @Param("pageSize") int pageSize);
    }

    static class FeignClientInterfaceError extends RuntimeException {
        private String message; // parsed from json

        @Override
        public String getMessage() {
            return message;
        }
    }

    static class FeignClientErrorDecoder implements ErrorDecoder {

        final Decoder decoder;
        final ErrorDecoder defaultDecoder = new ErrorDecoder.Default();

        FeignClientErrorDecoder(Decoder decoder) {
            this.decoder = decoder;
        }

        @Override
        public Exception decode(String methodKey, Response response) {
            try {
                return (Exception) decoder.decode(response, FeignClientErrorDecoder.class);
            } catch (IOException fallbackToDefault) {
                return defaultDecoder.decode(methodKey, response);
            }
        }
    }

    public static Integer add(Integer a , Integer b) {
        Integer add = client.add(a, b);
        return add;
    }

    public static Map<String , Object> getMap(String name) {
        return client.getMap("hello feign");
    }

    public static String messageEdit() {
        return FeignClientInterface.stringConnect().messageEdit();
    }

    public static JSONObject getRoleDeptList() {
        return client.getRoleDeptList();
    }

    public static JSONObject getAllUserList(int currentPage , int pageSize) {
        return client.getAllUserList(currentPage , pageSize);
    }
}
