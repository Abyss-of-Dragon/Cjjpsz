package main;

public abstract class Command {
    protected Receiver receiver1;
    protected Receiver receiver2;
    public abstract void execute();
    public void setReceiver(Receiver receiver1,Receiver receiver2) {
        this.receiver1 = receiver1;
        this.receiver2 = receiver2;
    }
}
