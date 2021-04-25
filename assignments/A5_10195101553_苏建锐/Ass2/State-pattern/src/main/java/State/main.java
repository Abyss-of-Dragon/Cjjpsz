package State;

public class main {
    public static void main(String[] args){
        Context context = new Context();
        context.offline();
        context.online();
        context.offline();
        context.online();
        context.online();
    }
}
