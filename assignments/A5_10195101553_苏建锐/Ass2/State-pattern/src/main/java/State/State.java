package State;

import javax.naming.Context;

public abstract class State {
    protected Context context;
    public void setContext(Context context){
        this.context = context;
    }
    public abstract void online();
    public abstract void offline();
}
