package com.controller;

import com.entity.Role;
import com.entity.Status;
import com.entity.User;
import com.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * 注册及注册表单提交控制
 */
@Controller
public class RegisterController {

    final UserService userService;

    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 注册界面显示
     * @param model 与该界面绑定的对象集合
     * @return 如 cookie 不存在或失效则显示登录界面，否则返回主页面
     */
    @GetMapping("/register")
    public String register(@CookieValue(value = "uid", defaultValue = "-1") Long uid, Model model) {
        User user = userService.getUser(uid);
        if (user == null) {
            model.addAttribute("user", new User());
            return "register";
        } else {
            return "redirect:";
        }
    }

    /**
     * 注册表单提交
     * @param user 与该界面绑定的用户对象
     * @param role String 对象
     * @param response 返回客户端的 http 对象
     * @return 系统主界面
     */
    @PostMapping("/register")
    public String register(@ModelAttribute User user,
                           @RequestParam("user-uid") String uid,
                           @RequestParam("user-role") String role,
                           HttpServletResponse response) {
        /* 验证 uid 为数字并储存 */
        for (int i = 0; i < uid.length(); i++)
            if (!Character.isDigit(uid.charAt(i)))
                return "redirect:/register?result=UidNotNumeric";
            else
                user.setUid(Long.parseLong(uid));

        /* 验证 uid 不唯一 */
        if (userService.getUser(user.getUid()) != null)
            return "redirect:/register?result=UidTaken";

        /* 通过 role 字符串设置用户角色 */
        switch (role) {
            case "0": user.setRole(Role.ADMIN); break;
            case "1": user.setRole(Role.NORMAL); break;
        }

        /* 设置 mtime ctime 及默认值 */
        user.setStatus(Status.ACTIVATED);
//        user.setCtime(new Date());
//        user.setMtime(new Date());

        /* 储存 user 对象到数据库 */
        userService.saveUser(user);

        /* 储存 uid Cookie 到用户端 */
        Cookie cookie = new Cookie("uid", String.valueOf(user.getUid()));
        response.addCookie(cookie);
        return "redirect:";
    }
}
