package com.controller;

import com.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

/**
 * 登出控制
 */
@Controller
public class LogoutController {

    final UserService userService;

    public LogoutController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 登出功能
     * @param uid 用户 uid
     * @param response Http 回复
     * @return 登录界面
     */
    @GetMapping("/logout")
    public String logout(@CookieValue(value = "uid", defaultValue = "-1") Long uid, HttpServletResponse response){
        Cookie cookie = new Cookie("uid", "-1");
        response.addCookie(cookie);
        return "redirect:/login";
    }
}
