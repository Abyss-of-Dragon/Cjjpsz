package com.yuanshenwiki.yuanshenwiki.controller;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.service.UserService;
import com.yuanshenwiki.yuanshenwiki.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mav = new ModelAndView();
        if(request.getMethod().equals("POST")) {
            String username = request.getParameter("username");
            String password = request.getParameter("password");
            Base64.Encoder encoder=Base64.getEncoder();
            Integer randInt=new Random().nextInt();
            String sign=encoder.encodeToString(String.valueOf(randInt).getBytes());
            User user = service.login(username, password,sign);
            if (user != null) {
                response.addCookie(new Cookie("logined",user.getId()+"#"+sign));
                mav.setViewName("profile.html");
                mav.addObject("user", user);
            }else{
                mav.setViewName("login.html");
                mav.addObject("login_failed", true);
            }
        }else{
            Cookie cookies[]=request.getCookies();
            for(Cookie cookie:cookies){
                if(cookie.getName().equals("logined")){
                    User logined=service.checkCookie(cookie.getValue());
                    if(logined!=null){
                        mav.setViewName("profile.html");
                        mav.addObject("user",logined);
                        return mav;
                    }
                }
            }
            mav.setViewName("login.html");
            mav.addObject("login_failed", false);
        }
        return mav;
    }
    @RequestMapping("")
    public ModelAndView index(){
        return  new ModelAndView("index.html");
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
                mav.setViewName("reg_success.html");
                mav.addObject("user",user);
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
    @GetMapping("/loginOut")
    public void loginOut(HttpServletResponse response) throws IOException {
        Cookie del=new Cookie("logined",null);
        del.setMaxAge(0);
        response.addCookie(del);
        response.sendRedirect("/login");
    }
    @GetMapping("/zhanzhangOnly")
    public String zhanzhang(HttpServletRequest request,HttpServletResponse response){
        Cookie cookies[]=request.getCookies();
        for(Cookie cookie:cookies){
            if(cookie.getName().equals("logined")){
                User logined=service.checkCookie(cookie.getValue());
                if(logined!=null&&logined.getType()== UserType.Leader)return "只有站长有权访问";
                else {
                    System.out.println(logined.getType().name());
                    return "权限不足";
                }
            }
        }
        return "权限不足";
    };
}
