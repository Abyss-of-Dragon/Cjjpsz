    var events=new Map()
    events.set('20210606','折箭迷踪');
    events.set('20210531','迷城战线');
    events.set('20210518','原素烘炉');
    events.set('20210503','佳肴尚温');
    function showEvent(e) {
    console.log(e);
    var event=events.get(e.getAttribute('data'));
    console.log(event);
    document.getElementById('event').innerText=event;
    }
    function addEvent(t,e) {
    events.set(t,e);
    console.log(events);
    }
