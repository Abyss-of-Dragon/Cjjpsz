package main;

public class main {
    public static void main(String[] args){
        Invoker invoker = new Invoker();
        Receiver stua = new StuA();
        Receiver stub = new StuB();
        //Command
        System.out.println("考试开始————————");
        Command startCommand = new StartCommand();
        startCommand.setReceiver(stua,stub);
        invoker.setCommand(startCommand);
        invoker.action();

        System.out.println("考试结束————————");
        Command endCommand = new EndCommand();
        endCommand.setReceiver(stua,stub);
        invoker.setCommand(endCommand);
        invoker.action();
    }
}
