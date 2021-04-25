package com.subpub;

public class Subscriber {

    Topic topic;

    public Subscriber(Topic topic){
        this.topic=topic;
    }

    public String read(){
        String readMessage=topic.readMessage();
        return readMessage;
    }
}
