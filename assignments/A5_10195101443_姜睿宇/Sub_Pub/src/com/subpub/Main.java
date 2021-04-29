package com.subpub;

import java.util.Scanner;

public class Main {
    /**
     * 话题message_topic
     * 订阅者subscriber
     * 发布者publisher
     */
    private static final Topic message_topic=new Topic();
    private static final Publisher publisher=new Publisher(message_topic);
    private static final Subscriber subscriber=new Subscriber(message_topic);
    public static void main(String[] args) {
        //订阅者线程
        Thread subscribe_thread=new Thread(new Runnable() {
            @Override
            public void run() {
                int index=0;
                //轮询读取话题信息
                while(true){
                    String message=subscriber.read();
                    if(message!=null){
                        //输出话题信息
                        System.out.printf("Subscriber:Receive Message[%d]:%s\n", index++, message);
                    }
                }
            }
        });

        //开始订阅者线程
        subscribe_thread.start();
        int index=0;
        //发布者发布信息hello和Topic Test
        String message="hello";
        publisher.send(message);
        System.out.printf("Publisher:Send Message[%d]:%s\n", index++, message);
        message="Topic Test";
        publisher.send(message);
        System.out.printf("Publisher:Send Message[%d]:%s\n", index++, message);
    }
}
