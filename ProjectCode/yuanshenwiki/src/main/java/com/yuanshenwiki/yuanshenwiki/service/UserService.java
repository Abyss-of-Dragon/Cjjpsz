package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.util.UserType;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface UserService {

    User getUserByID(Integer id);

    User login(String username,String password,String sign);

    User checkCookie(Cookie[] cookie);

    List<User> getUsers();

    User register(String username, String password, String nickname);

    String setAvatar(MultipartFile avatar,Integer id) throws IOException;
}
