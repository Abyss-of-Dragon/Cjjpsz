Subscribe.cs
namespace TJVictor.DesignPattern.SubscribePublish
{
public delegate void SubscribeHandle(string str);
  {
        event SubscribeHandle SubscribeEvent;
}
}


Publish
namespace TJVictor.DesignPattern.SubscribePublish
{

    public delegate void PublishHandle(string str);

    public interface Publish
    {
        event PublishHandle PublishEvent; 

        void Notify(string str);
    }
}


namespace TJVictor.DesignPattern.SubscribePublish
{
    public class SubPubComponet : Subscribe, Publish
    {
        private string _subName;
        public SubPubComponet(string subName)
        {
            this._subName = subName;
            PublishEvent += new PublishHandle(Notify);
        } 

        #region Subscribe Members
        event SubscribeHandle subscribeEvent;
        event SubscribeHandle Subscribe.SubscribeEvent
        {
            add { subscribeEvent += value; }
            remove { subscribeEvent -= value; }
        }
        #endregion 

        #region Publish Members
        public PublishHandle PublishEvent; 

        event PublishHandle Publish.PublishEvent
        {
            add { PublishEvent += value; }
            remove { PublishEvent -= value; }
        }
        #endregion 

        public void Notify(string str)
        {
            if (subscribeEvent != null)
                subscribeEvent.Invoke(string.Format("publish[0],message[1]", _subName, str));
        }
    }
}



namespace TJVictor.DesignPattern.SubscribePublish
{
    public class Subscriber
    {
        private string _subscriberName; 

        public Subscriber(string subscriberName)
        {
            this._subscriberName = subscriberName;
        } 

        public Subscribe AddSubscribe { set { value.SubscribeEvent += Show; } }
        public Subscribe RemoveSubscribe { set { value.SubscribeEvent -= Show; } } 

        private void Show(string str)
        {
            Console.WriteLine(string.Format("message[1]", _subscriberName, str));
        }
    }
}




namespace TJVictor.DesignPattern.SubscribePublish
{
    public class Publisher:Publish
    {
        private string _publisherName; 

        public Publisher(string publisherName)
        {
            this._publisherName = publisherName;
        } 

        private event PublishHandle PublishEvent;
        event PublishHandle Publish.PublishEvent
        {
            add { PublishEvent += value; }
            remove { PublishEvent -= value; }
        } 

        public void Notify(string str)
        {
            if (PublishEvent != null)
                PublishEvent.Invoke(string.Format("publish[1]", _publisherName, str));
        }
    }
}



#region TJVictor.DesignPattern.SubscribePublish

SubPubComponet subPubComponet1 = new SubPubComponet("subscriber_1");
SubPubComponet subPubComponet2 = new SubPubComponet("subscriber_2");

Publish publisher1 = new Publisher("TJVictor1");
Publish publisher2 = new Publisher("TJVictor2");

publisher1.PublishEvent += subPubComponet1.PublishEvent;
publisher1.PublishEvent += subPubComponet2.PublishEvent;
publisher2.PublishEvent += subPubComponet2.PublishEvent;

Subscriber s1 = new Subscriber("subscriber_1");
Subscriber s2 = new Subscriber("subscriber_2");

s1.AddSubscribe = subPubComponet1;
s1.AddSubscribe = subPubComponet2;
s2.AddSubscribe = subPubComponet2;

publisher1.Notify("page 1");
publisher2.Notify("page 2");

Console.WriteLine("".PadRight(50,'-'));

s1.RemoveSubscribe = subPubComponet2;

publisher1.Notify("page 1");
publisher2.Notify("page 2");

Console.WriteLine("".PadRight(50, '-'));
#endregion 

#region Console.ReadLine();
Console.ReadLine();
#endregion