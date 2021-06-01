package com.mapper;

import com.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    @Insert("insert into tab_user(name,password) VALUES(#{name},#{password})")
    int saveUser(@Param("name") String name, @Param("password") String password);


    @Select("select id,name,password from tab_user where name=#{name}")
    User selectUser(String name);
}
