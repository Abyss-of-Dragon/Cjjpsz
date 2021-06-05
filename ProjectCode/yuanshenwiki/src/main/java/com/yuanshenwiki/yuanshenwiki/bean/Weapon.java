package com.yuanshenwiki.yuanshenwiki.bean;

import java.util.List;

public class Weapon {
    int id;
    String name;
    String type;
    String rarity;
    String access;
    String basic_attribute1;
    String basic_attribute2;
    Integer atk;
    String sec_attribute;
    String skill;
    String Avatar;
    List<Commit> commits;

    public Weapon(int id, String name, String type, String rarity, String access, String basic_attribute1, String basic_attribute2, Integer atk, String sec_attribute, String skill, String avatar, List<Commit> commits) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rarity = rarity;
        this.access = access;
        this.basic_attribute1 = basic_attribute1;
        this.basic_attribute2 = basic_attribute2;
        this.atk = atk;
        this.sec_attribute = sec_attribute;
        this.skill = skill;
        Avatar = avatar;
        this.commits = commits;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getRarity() {
        return rarity;
    }

    public String getAccess() {
        return access;
    }

    public String getBasic_attribute1() {
        return basic_attribute1;
    }

    public String getBasic_attribute2() {
        return basic_attribute2;
    }

    public Integer getAtk() {
        return atk;
    }

    public String getSec_attribute() {
        return sec_attribute;
    }

    public String getSkill() {
        return skill;
    }

    public List<Commit> getCommits() {
        return commits;
    }

    public void setCommits(List<Commit> commits) {
        this.commits = commits;
    }

    public String getAvatar() {
        return Avatar;
    }

}
