package com.controller;

import com.entity.User;
import com.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Slf4j
@Controller
public class LoginController {

    @Autowired
    private UserMapper userMapper;


    @GetMapping("/login")
    public String login(String name,String password){
        User user = userMapper.selectUser(name);
        if(user == null){
            return "index/login";
        }
        if(Objects.equals(password,user.getPassword())){
            return "index/mainpage";
        }
        return "redirect:";
    }



}
