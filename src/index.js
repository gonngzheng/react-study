import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

// HEAD
class Head extends React.Component{
    constructor(){
        super();
    }
    componentWillReceiveProps(nextProps,nextState){
        console.log('组件属性改变',this.props,nextProps)
        //=>属性改变也会触发子组件重新渲染，继续完成修改这套流程
    }
    render(){
        return <div className='panel-heading'>
            <h3 className='panel-title'>
                点击次数：{this.props.count}
            </h3>
        </div>
    }
}

class Body extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log(this.props)
        return <div className='panel-body'>
            <button className='btn btn-success' onClick={this.props.callBack}>
                点我啊！
            </button>
        </div>
    }
}

class Panel extends React.Component{
    constructor(){
        super();
        this.state={
            n:1
        }
    }
    fn=()=>{
        //修改panel的状态信息
        this.setState({
            n:this.state.n+1
        });
    }
    render(){
        return <section className="panel panel-default" style={{width:'50%',margin:'0 auto'}}>
            {/* 父组件在调取子组件的时候，把信息通过属性传递给子组件 */}
            <Head count={this.state.n} />
            {/* 父组件把自己的一个方法基于属性传递给子组件，目的是在子组件中执行这个方法 */}
            <Body callBack={this.fn}/>
        </section>
    }
}

ReactDOM.render(<Panel/>,
    document.getElementById('root'))
