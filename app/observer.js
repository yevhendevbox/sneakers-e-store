export default class Observer{

  static instance = null;
  subscribers = {};

  constructor(){
    if(!Observer.instance){
      Observer.instance = this;
    }
    return Observer.instance;
  }

  subscribe(event, fun){
    this.initEvent(event);
    this.subscribers[event].push(fun);
  }

  unsubscribe(event, fun){
    this.initEvent(event);
    this.subscribers[event] = this.subscribers[event].filter(listener => listener !== fun);
  }

  notify(event, data){
    this.initEvent(event);
    this.subscribers[event].forEach(listener => listener(data));
  }

  initEvent(event){
    if (!this.subscribers[event]){
      this.subscribers[event] = [];
    }
  }
}