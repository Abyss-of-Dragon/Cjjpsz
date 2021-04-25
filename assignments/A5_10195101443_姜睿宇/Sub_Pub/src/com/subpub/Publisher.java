package com.subpub;

public class Publisher {

    Topic topic;

    public Publisher(Topic topic){
        this.topic=topic;
    }

    public void send(String message){
        topic.addMessage(message);
    }
}
