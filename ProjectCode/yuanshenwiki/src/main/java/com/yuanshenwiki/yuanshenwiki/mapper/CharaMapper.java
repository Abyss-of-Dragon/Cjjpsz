package com.yuanshenwiki.yuanshenwiki.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CharaMapper {
    @Select("SELECT Name FROM charas WHERE id=#{id}")
    String getNameByID(Integer id);
    @Select("SELECT Rarity FROM charas WHERE id=#{id}")
    String getRarityByID(Integer id);
    @Select("SELECT Weaponclass FROM charas WHERE id=#{id}")
    String getWeaponclassByID(Integer id);
    @Select("SELECT Element FROM charas WHERE id=#{id}")
    String getElementByID(Integer id);
    @Select("SELECT Sex FROM charas WHERE id=#{id}")
    String getSexByID(Integer id);
    @Select("SELECT Nation FROM charas WHERE id=#{id}")
    String getNationByID(Integer id);
    @Select("SELECT HP FROM charas WHERE id=#{id}")
    Integer getHPByID(Integer id);
    @Select("SELECT Damage FROM charas WHERE id=#{id}")
    Integer getDamageByID(Integer id);
    @Select("SELECT Armor FROM charas WHERE id=#{id}")
    Integer getArmorByID(Integer id);
    @Select("SELECT Growth FROM charas WHERE id=#{id}")
    String getGrowthByID(Integer id);
    @Select("SELECT Tags FROM charas WHERE id=#{id}")
    String getTagsByID(Integer id);
    @Select("SELECT Avatar FROM charas WHERE id=#{id}")
    String getAvatarByID(Integer id);
    @Select("SELECT id FROM charas WHERE Name=#{name}")
    List<Integer> search(String name);
    @Update("UPDATE charas SET commits=#{commits} WHERE id=#{id}")
    void setCommits(String commits,Integer id);
    @Select("SELECT id FROM charas WHERE Rarity=#{rarity}")
    List<Integer> getIdsByRarity(String rarity);
    @Select("SELECT Commits FROM charas WHERE id=#{id}")
    String getCommitsByID(Integer id);

    @Select("SELECT Tachie FROM charas WHERE id=#{id}")
    String getTachieByID(Integer id);
}
