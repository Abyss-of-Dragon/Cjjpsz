package com.luckyweimc.subpub;

public class Subscriber {

    private Topic topic;

    public Subscriber(){}

    public Subscriber(Topic topic){
        this.topic=topic;
    }

    public void setTopic(Topic topic){
        this.topic=topic;
    }

    public String read(){
        return topic.readMessage();
    }

}
