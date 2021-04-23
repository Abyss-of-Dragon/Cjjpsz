package com.yuanshenwiki.yuanshenwiki.service;

import com.yuanshenwiki.yuanshenwiki.bean.User;
import com.yuanshenwiki.yuanshenwiki.mapper.UserMapper;
import com.yuanshenwiki.yuanshenwiki.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Random;

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
        UserType type=UserType.valueOf(mapper.getTypeByID(id));
        return new User(id,username,password,nickname,type,sign);
    }
    private User getUserByUsername(String username){
        Integer id=mapper.getIdByUsername(username);
        if(id!=null)return getUserByID(id);
        else return null;
    }


    public User checkCookie(String cookie){
        String split[]=cookie.split("#");
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

}
