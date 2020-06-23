import React from 'react';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import PropTypes from 'prop-types'

export default class Vote extends React.Component{
    static defaultProps={
        title:'标题不传会使用该默认值',
        count:{
            n:0,
            m:0
        }
    }
    /**
     * 在父组件中
     *      1.设置子组件上下文属性值类型
     *      2.获取子组件的上下文（设置子组件的上下文属性信息）
     */
    static childContextTypes={
        n:PropTypes.number,
        m:PropTypes.number,
        callBack:PropTypes.func
    }
    getChildContext(){
        console.log(3)
        //return的是啥，相当于给子组件上下文设置成啥
        //只要render重新渲染，就会执行这个方法，重新更新组件中的上下文信息，如果父组件上下文信息更改了，子组件在重新调取的时候，会使用最新的上下文信息；（render->context->子组件调取渲染）
        let {n,m}=this.state;
        return {
            n,m,
            callBack:this.updateContext
        }
    } 
    updateContext=type=>{
        if(type==='support'){
            this.setState({n:this.state.n+1});
            return;
        }
        this.setState({m:this.state.m+1});
    }
    constructor(props){
        super(props)
        console.log(1)
        let {count:{n=0,m=0}}=this.props;
        this.state={n,m}
    }
    render(){
        let {store} =this.props
        console.log(2)
        let {title}=this.props;

        return <section className='panel panel-default'>
            <VoteHead title={this.props.title}/>
            <VoteBody store={store}/>
            <VoteFooter store={store}/>
        </section>
    }
}

