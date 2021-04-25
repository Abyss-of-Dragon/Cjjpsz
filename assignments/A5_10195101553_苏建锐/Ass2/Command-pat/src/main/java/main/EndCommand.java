package main;

public class EndCommand extends Command{
    @Override
    public void execute(){
        super.receiver1.end();
        super.receiver2.end();
    }
}
