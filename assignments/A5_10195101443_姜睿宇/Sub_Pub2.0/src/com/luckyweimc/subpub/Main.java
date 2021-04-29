package com.luckyweimc.subpub;

import java.util.Scanner;

public class Main {
    private static final Topic message_topic=new Topic();
    private static final Subscriber subscriber=new Subscriber(message_topic);
    private static final Publisher publisher=new Publisher(message_topic);
    private static boolean lock=false;

    public static void main(String[] args) {
        Thread sub_thread=new Thread(new Runnable() {
            @Override
            public void run() {
                int index=0;
                String msg;
                while (true){
                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    if(lock) {
                        msg = subscriber.read();
                        if (msg != null) {
                            System.out.printf("Subscriber:Read Message[%d]:%s\n", index++, msg);
                            lock = false;
                        }
                    }
                }
            }
        });
        Thread pub_thread=new Thread(new Runnable() {
            @Override
            public void run() {
                int index=0;
                String msg=null;
                Scanner sc=new Scanner(System.in);
                while (true){
                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    if(!lock){
                        msg=sc.nextLine();
                        if(msg!=null) {
                            publisher.send(msg);
                            System.out.printf("Publisher:Send Message[%d]:%s\n", index++, msg);
                            lock=true;
                        }
                    }
                }
            }
        });
        pub_thread.start();
        sub_thread.start();
    }
}
