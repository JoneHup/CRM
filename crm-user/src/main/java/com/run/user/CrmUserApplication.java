package com.run.user;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

//@EnableDiscoveryClient
//@EnableFeignClients //用于启动Fegin功能
@SpringBootApplication(scanBasePackages = "com.run.user")
@ServletComponentScan
public class CrmUserApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrmUserApplication.class, args);
    }
}
