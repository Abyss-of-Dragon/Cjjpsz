package com.yuanshenwiki.yuanshenwiki.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface CommitMapper {
    @Select("SELECT IFNULL(MAX(id),-1) FROM commits")
    Integer getMaxId();
    @Select("SELECT user FROM commits WHERE id=#{id}")
    Integer getUserIdByID(Integer id);
    @Select("SELECT context FROM commits WHERE id=#{id}")
    String getContextByID(Integer id);
    @Insert("INSERT INTO commits VALUES(#{id},#{user},#{context})")
    void commit(Integer id,Integer user,String context);
}
