package main;

public class StartCommand extends Command{
    @Override
    public void execute(){
        super.receiver1.start();
        super.receiver2.start();
    }
}
