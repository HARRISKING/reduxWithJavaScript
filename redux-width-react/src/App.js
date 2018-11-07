import React, { Component } from 'react';

class App extends Component {
          // 其实就是发布订阅模式

          add1(type,number){
            // 第一步：派发一个动作，dispatch一个action
            store.dispatch({type:type,number:number}) 
        }

        // 更新状态的函数
        stateChanger(lastState,action){
            if(typeof lastState == 'undefined'){
                return 0
            }else{
                switch (action.type){
                    case 'add':
                    // 第二步：根据action触发新的state，出发新的事件
                    return lastState + action.number
                    case 'addOod':
                    if(lastState%2===1){
                        return lastState + action.number
                    }else{
                        return lastState
                    }
                    default:
                    lastState
                }
            }
     
        }
        const valueData = document.querySelector('#value');

        render(){
            valueData.innerHTML = store.getState()
        }


        render(store)
        store.subscribe(()=>{
            // 第三步：接受事件，重新渲染
            render(store)
        })
  render() {
    return (
      <div id='app'>
      <div>
          <p>您点击了 <span id="value"></span> </p>
          <button id='add' onclick='add1("add",1)'>+1</button>
          <button id='add' onclick='add1("add",2)'>+2</button>
          <button id='addOod' onclick='add1("addOod",1)'>如果单数就加一</button>
      </div>
  </div>
    );
  }
}

export default App;
