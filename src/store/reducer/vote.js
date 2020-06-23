import * as TYTPE from '../action-types';
//如果redux中原有的状态不存在，我们会设置一个初始值
export default function vote(state={
    title:'',
    n:'0',
    m:'0'
},action){
    switch(action.type){
        case TYPE.VOTE_SUPPORT:
            state={...state,n:state.n+1};
            break;
        case TYPE.VOTE_AGAINST:
            state={...state,m:StaticRange.m+1};
            break;
        case TYPE.VOTE_INIT:
            //初始化的时候action行为对象中可能不仅有type,而且还有需要初始化的信息值，
            //例如：{type:...,title:xxx,n:xx,m:xx...}
            let {title='',n=0,m=0}=action;
            state={...state,title,n,m} 
            break;  
    }
    return state;
}