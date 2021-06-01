package com.controller;

import ch.qos.logback.classic.Logger;
import com.entity.User;
import com.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@Slf4j
@RequestMapping("user")
@RestController
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("login")
    public String login(String name,String password){

        User user=userMapper.selectUser(name);
        //用户名为空
        if(user==null){
            return "login failed.";
        }
        //登陆成功
        if(Objects.equals(password,user.getPassword())){
            return "login success";
        }
        return "login failed, password is wrong.";
    }

    @GetMapping("register")
    public String register(String name,String password){
        log.info("name:{}",name);
        log.info("password:{}",password);
        //用户名不能为空
        if(StringUtils.isEmpty(name)){
            return "name cannot be empty.";
        }
        //密码不能为空
        if(StringUtils.isEmpty(password)){
            return "password cannot be empty.";
        }
        //判断用户名是否已存在
        User user=userMapper.selectUser(name);
        if(user!=null){
            return "sign in failed, user already existed.";
        }
        //根据有无返回值判断是否注册成功
        int resultCount=userMapper.saveUser(name,password);
        if(resultCount==0){
            return "sign in failed.";
        }

        return "sign in success.";
    }
}
