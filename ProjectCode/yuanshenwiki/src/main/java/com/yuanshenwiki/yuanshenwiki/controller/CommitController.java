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
public class CommitController {
    @Autowired
    CommitService commitService;
    @PostMapping("/commitChara")
    public void commit(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Integer userId=Integer.valueOf(request.getParameter("userId"));
        String context=request.getParameter("context");
        Integer charaId=Integer.valueOf(request.getParameter("charaId"));
        commitService.commitChara(charaId,userId,context);
        response.sendRedirect("/chara?id="+charaId);
    }
}
