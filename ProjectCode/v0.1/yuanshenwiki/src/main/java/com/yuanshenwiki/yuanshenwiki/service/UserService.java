package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.util.UserType;

import java.util.List;

public interface UserService {

    User getUserByID(Integer id);

    User login(String username,String password,String sign);

    User checkCookie(String cookie);

    List<User> getUsers();

    User register(String username, String password, String nickname);
}
