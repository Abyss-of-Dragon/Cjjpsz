package com.yuanshenwiki.yuanshenwiki.bean;

import com.yuanshenwiki.yuanshenwiki.util.UserType;

import java.util.Objects;

public class User {

    private Integer id;
    private String username;
    private String password;
    private String nickname;
    private UserType type;
    private String sign;
    private String avatar;

    public User(Integer id, String username, String password, String nickname, UserType type, String sign, String avatar) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.type = type;
        this.sign = sign;
        this.avatar = avatar;
    }

    public User(Integer id, String username, String password, String nickname, UserType type) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.type = type;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public UserType getType() {
        return type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(username, user.username);
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Override
    public int hashCode() {
        return Objects.hash(username);
    }
}
