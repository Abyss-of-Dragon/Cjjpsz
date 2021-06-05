package com.yuanshenwiki.yuanshenwiki.controller;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.service.UserService;
import com.yuanshenwiki.yuanshenwiki.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Base64;
import java.util.Random;

@RestController
public class UserController {
    @Autowired
    UserService service;
    @RequestMapping("/login")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ModelAndView mav = new ModelAndView();
        if(request.getMethod().equals("POST")) {
            String username = request.getParameter("username");
            String password = request.getParameter("password");
            Base64.Encoder encoder=Base64.getEncoder();
            Integer randInt=new Random().nextInt();
            String sign=encoder.encodeToString(String.valueOf(randInt).getBytes());
            System.out.println("Try to login with username "+username+" password "+password);
            User user = service.login(username, password,sign);
            if (user != null) {
                response.addCookie(new Cookie("logined",user.getId()+"#"+sign));
                response.sendRedirect("/mainpage");
            }else{
                mav.setViewName("login");
                mav.addObject("login_failed", true);
            }
        }else{
            User logined=service.checkCookie(request.getCookies());
            mav.setViewName("login");
            mav.addObject("login_failed", false);
        }
        return mav;
    }
    @RequestMapping("/register")
    public ModelAndView register(HttpServletRequest request,HttpServletResponse response) throws IOException {
        ModelAndView mav=new ModelAndView();
        if(request.getMethod().equals("POST")) {
            String username=request.getParameter("username");
            String password=request.getParameter("password");
            String nickname=request.getParameter("nickname");
            User user=service.register(username,password,nickname);
            if(user!=null){
                mav.setViewName("login.html");
            }else{
                mav.setViewName("register.html");
                mav.addObject("reg_failed",true);
            }
        }else{
            mav.setViewName("register.html");
            mav.addObject("reg_failed",false);
        }
        return mav;
    }
    @GetMapping("/logout")
    public void loginOut(HttpServletResponse response) throws IOException {
        Cookie del=new Cookie("logined",null);
        del.setMaxAge(0);
        response.addCookie(del);
        response.sendRedirect("/login");
    }

    @GetMapping("/profile")
    public ModelAndView profile(HttpServletRequest request,HttpServletResponse response){
        User loginUser=service.checkCookie(request.getCookies());
        ModelAndView mav=new ModelAndView();
        if(loginUser==null)mav.setViewName("login.html");
        else{
            mav.setViewName("profile");
            mav.addObject("loginUser",loginUser);
        }
        return mav;
    }

    @PostMapping("/uploadAvatar")
    public ModelAndView uploadAvatar(@RequestParam("avatar")MultipartFile file,HttpServletRequest request, HttpServletResponse response) throws IOException {
        User loginUser=service.checkCookie(request.getCookies());
        ModelAndView mav=new ModelAndView();
        if(loginUser==null)mav.setViewName("login.html");
        else{
            mav.setViewName("profile");
            String avatar=service.setAvatar(file,loginUser.getId());
            loginUser.setAvatar(avatar);
            mav.addObject("loginUser",loginUser);
        }
        return mav;
    }

    @GetMapping("/zhanzhangOnly")
    public String zhanzhang(HttpServletRequest request,HttpServletResponse response){
        User logined=service.checkCookie(request.getCookies());
        if(logined.getType()==UserType.Administrator)return "Welcome Administrator";
        return "权限不足";
    };
}
