package com.luckyweimc.subpub;

import java.util.ArrayDeque;
import java.util.LinkedList;
import java.util.Queue;

public class Topic {
    Queue<String> messages;

    public Topic(){
        this.messages=new LinkedList<>();
    }

    public void addMessage(String e){
        messages.offer(e);
    }

    public String readMessage(){
        if(!messages.isEmpty())return messages.poll();
        return null;
    }
}
