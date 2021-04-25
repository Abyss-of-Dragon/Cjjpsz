package State;

public class Context {
    public final static State ONLINESTATE = new OnlineState();
    public final static State OFFLINESTATE = new OfflineState();

    private State currentState = OFFLINESTATE;
    public void online(){
        this.currentState.online();
        this.currentState = ONLINESTATE;
    }
    public void offline(){
        this.currentState.offline();
        this.currentState = OFFLINESTATE;
    }
}
