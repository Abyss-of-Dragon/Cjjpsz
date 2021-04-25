public class Proxy implements Request {
    private static Proxy proxy;
    private Request request;
    public static Proxy getInstance(){
        if(proxy==null){
            synchronized (Proxy.class){
                if(proxy==null){S
                    proxy = new Proxy();
                }
            }
        }
        return proxy;
    }
    public void init(Request request1){
        request = request1;
    }
    @Override
    public void get(String url) {
        request.get(url);
    }
}