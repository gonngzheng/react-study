import React from 'react';
import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{
    constructor(props,context){
        super(props)
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
        return <section className={'panel-body'}>
            支持人数：<span>{this.context.n}</span>
            <br/>
            反对人数：<span>{this.context.m}</span>
            <br/>
            支持比率：<span>0.00%</span>
        </section>
    }
}

