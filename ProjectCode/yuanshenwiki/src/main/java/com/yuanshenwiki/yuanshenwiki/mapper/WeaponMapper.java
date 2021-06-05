package com.yuanshenwiki.yuanshenwiki.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface WeaponMapper {
    @Select("SELECT Name FROM weapons WHERE id=#{id}")
    String getNameByID(Integer id);
    @Select("SELECT Type FROM weapons WHERE id=#{id}")
    String getTypeByID(Integer id);
    @Select("SELECT Rarity FROM weapons WHERE id=#{id}")
    String getRarityByID(Integer id);
    @Select("SELECT Access FROM weapons WHERE id=#{id}")
    String getAccessByID(Integer id);
    @Select("SELECT Basic_attribute1 FROM weapons WHERE id=#{id}")
    String getBasic_attribute1ByID(Integer id);
    @Select("SELECT Basic_attribute2 FROM weapons WHERE id=#{id}")
    String getBasic_attribute2ByID(Integer id);
    @Select("SELECT Atk FROM weapons WHERE id=#{id}")
    Integer getAtkByID(Integer id);
    @Select("SELECT Sec_attribute FROM weapons WHERE id=#{id}")
    String getSec_attributeByID(Integer id);
    @Select("SELECT Skill FROM weapons WHERE id=#{id}")
    String getSkillByID(Integer id);
    @Select("SELECT id FROM weapons WHERE Name=#{name}")
    List<Integer> search(String name);
    @Update("UPDATE weapons SET commits=#{commits} WHERE id=#{id}")
    void setCommits(String commits,Integer id);
    @Select("SELECT id FROM weapons WHERE Rarity=#{rarity}")
    List<Integer> getIdsByRarity(String rarity);
    @Select("SELECT Commits FROM weapons WHERE id=#{id}")
    String getCommitsByID(Integer id);
    @Select("SELECT Avatar FROM weapons WHERE id=#{id}")
    String getAvatarByID(Integer id);
}