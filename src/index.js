import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import PropTypes from 'prop-types'


function queryData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(2)  
        },3000)
    })
}
class A extends React.Component{
    static defaultProps={}; //=>这个是第一个执行的，执行完成后(给属性设置默认值后)才向下执行
    //static defaultProps={};
    constructor(){
        super();
        console.log('1=constructor')
        this.state={n:1};
    }
    async componentWillMount(){
        console.log('2=will-Mounted:第一次渲染之前',this.refs.HH); //undefined
        //  setTimeout(() => {
        //         this.setState({n:2})
        // }, 2000);
        let result = await queryData();
        this.setState({
            n:result
        })
    }
    componentDidMount(){
        console.log('4=DID-MOUNTED:第一次渲染之后',this.refs.HH) //<div></div>
        /**
         * 项目中一般在该阶段做如下处理;
         *      1.控制状态信息更改的操作
         *      2.从服务器获取数据，然后修改状态信息，完成数据绑定
         *      ...
         */
        // setInterval(() => {
        //         this.setState({n:this.state.n+1})
        // }, 2000);
    }

    shouldComponentUpdate(nextProps,nextState){
        //在这个钩子函数中，我们获取的state不是最新修改的，而是上一次的state的值
        //例如：第一次加载完成，2000ms后，基于setState把n修改为2，但是此处获取的还是1

        //方法有两个参数：
            //nextProps:最新修改的属性信息
            //nextState:最新修改的状态信息
            // console.log(nextProps,nextState)
            console.log('SHOULD')
        console.log('5=是否允许更新，函数返回true就是允许，返回false就是不予许',this.state.n)
        if(nextState.n>3){
            return false;
        }
        return true;
    }

    componentWillUpdate(){
        console.log('6=组件更新之前',this.state.n)
    }
    componentDidUpdate(){
        console.log('8=组件更新之后',this.state.n)
    }
    componentWillReceiveProps(nextProps,nextState){
        console.log('组件属性改变',this.props.n,nextProps.n)
        //=>属性改变也会触发子组件重新渲染，继续完成修改这套流程
    }

    render(){
        console.log('render')
        return <div ref='HH'>{this.props.n}</div>
    }
}

class B extends React.Component{
    constructor(){
        super();
        this.state={
            n:4
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                n:5
            })
        },1000)

    }
    render(){
        //复合组件：组件嵌套（大组件嵌套小组件）
        return <div>
            {/* 把父组件的状态信息作为属性传递给子组件 */}
            <A n={this.state.n} />
        </div>
    }
}

ReactDOM.render(<B/>,
    document.getElementById('root'))