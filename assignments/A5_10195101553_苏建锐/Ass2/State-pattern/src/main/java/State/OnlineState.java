package State;

public class OnlineState extends State{
    @Override
    public void online(){
        System.out.println("您正处于在线状态");
    }
    @Override
    public void offline(){
        System.out.println("您下线了。");
    }
}
