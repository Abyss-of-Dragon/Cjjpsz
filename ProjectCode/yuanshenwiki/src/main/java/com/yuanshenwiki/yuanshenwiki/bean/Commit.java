package com.yuanshenwiki.yuanshenwiki.bean;

public class Commit {
    Integer id;
    User user;
    String context;

    public Commit(Integer id, User user, String context) {
        this.id = id;
        this.user = user;
        this.context = context;
    }

    public Integer getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public String getContext() {
        return context;
    }
}
