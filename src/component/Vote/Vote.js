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
        m:PropTypes.number
    }
    getChildContext(){
        //return的是啥，相当于给子组件上下文设置成啥
        let {count:{n=0,m=0}}=this.props;
        return {
            n,m
        }
    } 
    constructor(){
        super()

    }
    render(){
        // console.log(this)
        let {title}=this.props;

        return <section className='panel panel-default'>
            <VoteHead title={title}/>
            <VoteBody />
            <VoteFooter/>
        </section>
    }
}

