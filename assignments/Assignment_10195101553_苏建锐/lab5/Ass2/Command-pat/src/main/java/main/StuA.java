package main;

public class StuA extends Receiver {
    @Override
    public void start(){
        System.out.println("A拿起了笔");
    }
    @Override
    public void end(){
        System.out.println("A放下了笔");
    }
}
