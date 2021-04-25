public class LogDecorator extends Decorator {
    public LogDecorator(Request request) {
        super(request);
    }
    @Override
    public void get() {
        super.get();
        log();
    }
    private void log(){
        System.out.print("用户使用次数记录");
    }
}












