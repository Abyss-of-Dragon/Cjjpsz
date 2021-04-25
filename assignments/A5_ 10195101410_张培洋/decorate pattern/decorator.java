public abstract class Decorator implements Request {
    protected Request request;
    public Decorator(Request request){
        this.request = request;
    }
    public void get(){
        request.get();
    }
}








