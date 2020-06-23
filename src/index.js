import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Vote from './component/Vote/Vote.js'
import {createStore} from 'redux'

//创建容器：需要把reducer传递进来
//作用：1.记录了所有状态修改的信息（根据行为标识走不同的修改任务）
//     2. 修改容器中的状态信息

//参数：state:容器中原有的状态信息（如果第一次使用，没有原有状态，给一个初始默认值）
//action ： dispath任务派发的时候传递的行为对象（这个对象中必有一个type属性，是操作的行为标识，
// reducer就是根据这个行为标识来识别该如何修改状态信息）
let reducer = (state={n:0,m:0},action)=>{
    switch(action.type){
        case 'VOTE_SUPPORT':
            state ={...state,n:state.n+1};
            break;
        case 'VOTE_AGAINST':
            state={...state,m:state.m+1}
            break;
    } 
    return state;//只有把最新的state返回，原有的状态才会被修改
}
let store =createStore(reducer)
/**
 * 创建的store中提供了三个方法
 * dispath:派发行为（传递一个对象，对象中有一个type属性），通知reducer修改状态信息
 * subscribe:事件池追加方法
 * getState:获取最新管理的状态信息
 */
ReactDOM.render(<div>
        <Vote title={'此时已是2002/6/23，物是人非了'} 
            count={{
                n:100,
                m:78
                }} 
                store={store} />
    </div>, document.getElementById('root'));