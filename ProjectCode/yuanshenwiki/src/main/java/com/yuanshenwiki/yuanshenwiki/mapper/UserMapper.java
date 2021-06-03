package com.yuanshenwiki.yuanshenwiki.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserMapper {

    @Select("SELECT IFNULL(MAX(id),-1)+1 FROM users")
    Integer getMaxId();
    @Select("SELECT id FROM users WHERE username=#{username}")
    Integer getIdByUsername(String username);
    @Select("SELECT username FROM users WHERE id=#{id}")
    String getUsernameByID(Integer id);
    @Select("SELECT password FROM users WHERE id=#{id}")
    String getPasswordByID(Integer id);
    @Select("SELECT nickname FROM users WHERE id=#{id}")
    String getNicknameByID(Integer id);
    @Select("SELECT type FROM users WHERE id=#{id}")
    String getTypeByID(Integer id);
    @Select("SELECT sign FROM users WHERE id=#{id}")
    String getSignByID(Integer id);
    @Select("SELECT id FROM users")
    List<Integer> getIds();
    @Select("SELECT avatar FROM users WHERE id=#{id}")
    String getAvatarByID(Integer id);
    @Update("UPDATE users SET avatar=#{avatar} WHERE id=#{id}")
    void setAvatar(String avatar,Integer id);

    @Update("UPDATE users SET sign=#{sign} WHERE id=#{id}")
    void setSignById(Integer id,String sign);

    @Insert("INSERT INTO users VALUES(#{id},#{type},#{username},#{password},#{nickname},#{sign},DEFAULT)")
    void register(Integer id,String type,String username,String password,String nickname,String sign);

}
