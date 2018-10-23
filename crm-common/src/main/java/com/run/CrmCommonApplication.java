package com.run;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(scanBasePackages = "com.run")
@ServletComponentScan
public class CrmCommonApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(CrmCommonApplication.class, args);
    }
}
