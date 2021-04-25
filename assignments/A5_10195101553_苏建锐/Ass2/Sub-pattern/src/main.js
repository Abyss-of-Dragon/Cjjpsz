const Eventbus = require('./js/eventBus')
let list = [],//记录异步操作
    count = 0,
    timeTick = setInterval(function (){
        if (count++ > 3){//当执行到一定时间时，自动销毁事件、定时器
            Eventbus.offEvent('finish',eventHandler)
            clearInterval(timeTick)
        }
        List.push(count)
        Eventbus.emitEvent('finish',{
            list
        })
    },1000)

Eventbus.onEvent('finish',eventHandler)

function eventHandler(e){
    console.log(e)
}
