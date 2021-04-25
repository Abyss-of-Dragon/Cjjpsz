package State;

public class OfflineState extends State{
    @Override
    public void online(){
        System.out.println("您上线了。");
    }

    @Override
    public void offline(){
        System.out.println("您正处于离线状态");
    }
}
