//Pub/Sub pattern
class EventBus{
    constructor() {
        this._eventList = {}//调度中心列表
    }

    static Instance(){
        if (!EventBus._instance){
            Object.defineProperty(EventBus,"_instance",{
                value: new EventBus()
            });
        }
        return EventBus._instance;
    }

    /**
     * 注册事件至调度中心
     * @param type 事件类型，具体事件名
     * @param fn   时间注册的回调
     */
    onEvent(type,fn){ //Subscriber
        if (!this.isKeyInObj(this._eventList,type)){
            Object.defineProperty(this._eventList,type,{
                value:[],
                writable:true,
                enumerable:true,
                configurable:true
            })
        }
        this._eventList[type].push(fn)
    }

    /**
     * 触发调度中心的某个或者某些该事件类型下注册的函数
     * @param type 事件类型
     * @param data 发布者传递的参数
     */
    emitEvent(type,data){//publisher
        if (this.isKeyInObj(this._eventList)){
            for(let i = 0;i < this._eventList[type].length;i++){
                this._eventList[type][i] && this._eventList[type][i](data)
            }
        }
    }
    offEvent(type,fn){
        for (let i = 0;i < this._eventList[type].length;i++){
            if(this._eventList[type][i] && this._eventList[type][i] === fn) {
                this._eventList[type][i] = null
            }
        }
    }
    /**
     * 检查对象是否包含该属性
     * @param obj 被检查对象
     * @param key 被检查对象的属性
     */
    isKeyInObj(obj,key){
        if (Object.hasOwnProperty.call(obj,key)){
            return true
        }
        return false
    }
}


let module;
module.exports = EventBus.Instance()