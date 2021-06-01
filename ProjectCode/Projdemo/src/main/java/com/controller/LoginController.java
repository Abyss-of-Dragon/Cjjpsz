package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.entity.User;
import com.service.UserService;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 登录和登录表单控制
 */
@Controller
public class LoginController {

    final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 登陆界面显示
     * @param model 与该界面绑定的用户对象
     * @return 如 cookie 不存在或失效则显示登录界面，否则返回主页面
     */
    @GetMapping("/login")
    public String login(@CookieValue(value = "uid", defaultValue = "-1") Long uid, Model model) {
        User user = userService.getUser(uid);
        if (user == null) {
            model.addAttribute("user", new User());
            return "login";
        } else {
            return "redirect:";
        }
    }

    /**
     * 登录表单提交
     * @param user 与该界面绑定的用户对象
     * @param response 返回客户端的 http 对象
     * @return 系统主界面
     */
    @PostMapping("/login")
    public String login(@ModelAttribute User user, HttpServletRequest request, HttpServletResponse response) {
        User userFound = userService.getUser(user.getUid());

        /* 校验用户名 */
        if (userFound == null) {
            return "redirect:login?result=UserNotFound";
        }

        /* 校验密码 */
        if (!userFound.getPassword().equals(user.getPassword())) {
            return "redirect:login?result=WrongPassword";
        }

        /* 储存 uid Cookie 到用户端 */
        Cookie cookie = new Cookie("uid", String.valueOf(user.getUid()));
        response.addCookie(cookie);
        return "redirect:";
    }
}