package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan("com.service")
@SpringBootApplication

public class ProjdemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjdemoApplication.class, args);
    }

}
