package com.controller;


import com.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("login")
@RestController
public class LoginController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/login")
    public String
}
