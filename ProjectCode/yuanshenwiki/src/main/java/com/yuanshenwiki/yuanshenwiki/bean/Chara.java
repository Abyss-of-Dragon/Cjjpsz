package com.yuanshenwiki.yuanshenwiki.bean;

import java.util.List;

public class Chara {
    int id;
    String name;
    String rarity;
    String weaponclass;
    String element;
    String sex;
    String nation;
    Integer hp;
    Integer damage;
    Integer armor;
    String growth;
    String tags;
    String avatar;
    List<Commit> commits;
//立绘
    String tachie;

    public Chara(int id, String name, String rarity, String weaponclass, String element, String sex, String nation, Integer hp, Integer damage, Integer armor, String growth, String tags, String avatar,List<Commit> commits, String tachie) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.weaponclass = weaponclass;
        this.element = element;
        this.sex = sex;
        this.nation = nation;
        this.hp = hp;
        this.damage = damage;
        this.armor = armor;
        this.growth = growth;
        this.tags = tags;
        this.avatar = avatar;
        this.commits = commits;

        this.tachie = tachie;
    }

    public String getElement() {
        return element;
    }

    public int getId() {
        return id;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getName() {
        return name;
    }

    public List<Commit> getCommits() {
        return commits;
    }

    public String getRarity() {
        return rarity;
    }

    public String getWeaponclass() {
        return weaponclass;
    }

    public String getSex() {
        return sex;
    }

    public String getNation() {
        return nation;
    }

    public Integer getHP() {
        return hp;
    }

    public Integer getDamage() {
        return damage;
    }

    public Integer getArmor() {
        return armor;
    }

    public String getGrowth() {
        return growth;
    }

    public String getTags() {
        return tags;
    }
    public Chara(List<Commit> commits) {
        this.commits = commits;
    }


    public String getTachie(){ return tachie; }

}
