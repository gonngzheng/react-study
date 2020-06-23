import React from 'react';
import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{
    constructor(props,context){
        super(props,context)
        console.log(context)
        // init state
        let {store:{getState}} =this.props;
        let {n,m}=getState();
        this.state={n,m}
    }
    static contextTypes={
        /**
         * 3.子组件中设置使用传递进来的上下文类型:设置哪个类型，子组件上下文中才有哪个属性，不设置的是不予许使用的
         * this.context.xxx
         */
        n:PropTypes.number,
        m:PropTypes.number,
    }

    componentDidMount(){
        let {store:{getState,subscribe}}=this.props;
       let unsubscribe= subscribe(()=>{
           let {n,m}=getState();
           this.setState({
               n,m
           })
        })
        //unsubscribe();把当前追加的方法移除，解除绑定的方式
    }
    render(){
        // let {n,m} = this.context,
        // rate = (n/(n+m))*100;
        // isNaN(rate) ?rate=0:console.log('')
        
        //reducer
        let {n=0,m=0}=this.state,
            rate = (n/(n+m))*100;
        isNaN(rate) ?rate=0:console.log('')
        return <section className={'panel-body'}>
            支持人数：<span>{n}</span>
            <br/>
            反对人数：<span>{m}</span>
            <br/>
            支持比率：<span>{rate.toFixed(2)+'%'}</span>
        </section>
    }
}

