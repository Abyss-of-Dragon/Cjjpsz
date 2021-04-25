package com.luckyweimc.subpub;

public class Publisher {

    private Topic topic;

    public Publisher(){}

    public Publisher(Topic topic){
        this.topic=topic;
    }

    public void setTopic(Topic topic){
        this.topic=topic;
    }

    public void send(String message){
        topic.addMessage(message);
    }

}
