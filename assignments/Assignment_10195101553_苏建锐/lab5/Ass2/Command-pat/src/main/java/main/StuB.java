package main;

public class StuB extends Receiver {
    @Override
    public void start(){
        System.out.println("B拿起了笔");
    }
    @Override
    public void end(){
        System.out.println("B放下了笔");
    }
}