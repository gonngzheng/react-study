import React from 'react';
import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{
    constructor(props,context){
        super(props,context)
        console.log(context)
    }
    static contextTypes={
        /**
         * 3.子组件中设置使用传递进来的上下文类型:设置哪个类型，子组件上下文中才有哪个属性，不设置的是不予许使用的
         * this.context.xxx
         */
        n:PropTypes.number,
        m:PropTypes.number,
    }

    render(){
        let {n,m} = this.context,
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

