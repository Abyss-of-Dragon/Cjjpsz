package com.subpub;

import java.util.ArrayDeque;
import java.util.Queue;

public class Topic {
    Queue<String> messages;

    public Topic(){
        this.messages=new ArrayDeque<>();
    }

    public void addMessage(String message){
        messages.add(message);
    }

    public String readMessage(){
        if (!messages.isEmpty())return messages.poll();
        return null;
    }

    public boolean hasMessage(){
        return !this.messages.isEmpty();
    }
}
