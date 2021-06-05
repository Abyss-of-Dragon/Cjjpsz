package com.yuanshenwiki.yuanshenwiki.controller;

import com.yuanshenwiki.yuanshenwiki.service.CommitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class wCommitController {
    @Autowired
    CommitService commitService;
    @PostMapping("/commitWeapon")
    public void commit(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Integer userId=Integer.valueOf(request.getParameter("userId"));
        String context=request.getParameter("context");
        Integer weaponId=Integer.valueOf(request.getParameter("weaponId"));
        commitService.commitWeapon(weaponId,userId,context);
        response.sendRedirect("/weapon?id="+weaponId);
    }
}
