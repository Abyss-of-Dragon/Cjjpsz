package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.mapper.UserMapper;
import com.yuanshenwiki.yuanshenwiki.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    UserMapper mapper;

    List<User> usersList;

    private void refreshUsers(){
        List<Integer> ids=mapper.getIds();
        if(usersList==null)usersList=new ArrayList<>();
        else{
            usersList.clear();
            for(Integer id:ids){
                usersList.add(getUserByID(id));
            }
        }
    }

    @Override
    public User getUserByID(Integer id) {
        String username=mapper.getUsernameByID(id);
        String password=mapper.getPasswordByID(id);
        String nickname=mapper.getNicknameByID(id);
        String sign=mapper.getSignByID(id);
        String avatar=mapper.getAvatarByID(id);
        UserType type=UserType.valueOf(mapper.getTypeByID(id));
        return new User(id,username,password,nickname,type,sign,avatar);
    }
    private User getUserByUsername(String username){
        Integer id=mapper.getIdByUsername(username);
        if(id!=null)return getUserByID(id);
        else return null;
    }


    public User checkCookie(Cookie[] cookies){
        String cok=null;
        for(Cookie cookie:cookies){
            if(cookie.getName().equals("logined")){
                cok=cookie.getValue();
            }
        }
        if(cok==null)return null;
        String split[]=cok.split("#");
        if(split.length==2){
            try{
                Integer id=Integer.valueOf(split[0]);
                String sign=split[1];
                if(sign.equals(mapper.getSignByID(id))){
                    return getUserByID(id);
                }
            }catch (Exception e){
                return null;
            }
        }
        return null;
    }

    @Override
    public User login(String username, String password,String sign) {
        User u=getUserByUsername(username);
        Base64.Encoder encoder = Base64.getEncoder();
        if(u!=null&&password.equals(u.getPassword())){
            mapper.setSignById(u.getId(),sign);
            return u;
        }
        else return null;
    }

    @Override
    public List<User> getUsers() {
        refreshUsers();
        return usersList;
    }

    @Override
    public User register(String username, String password, String nickname) {
        Integer id=mapper.getMaxId();
        User user=new User(id,username,password,nickname,UserType.User);
        if(!getUsers().contains(user)){
            usersList.add(user);
            mapper.register(id,UserType.User.name(),username,password,nickname,"");
            return user;
        }else{
            return null;
        }
    }

    @Override
    public String setAvatar(MultipartFile avatar, Integer id) throws IOException {
        String path = ResourceUtils.getURL("classpath:").getPath() + "static/img/avatar";
        String realPath = path.replace('/', '\\').substring(1, path.length());
        System.out.println(realPath);
        final String fileName = new Date().hashCode()+".jpg";
        String contentType = avatar.getContentType();
        if ("image/jpeg".equals(contentType) || "image/jpg".equals(contentType)) {
            File file = new File(realPath, fileName);
            System.out.println(file.getPath());
            if(!file.exists())file.createNewFile();
            avatar.transferTo(file);
            String av_path = "/img/avatar/" + fileName;
            System.out.println(av_path);
            mapper.setAvatar(av_path, id);
            return av_path;
        }
        return null;
    }
}
