import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
class Dialog extends React.Component{
    // this.props是只读的，我们无法在方法中修改它的值，但是可以给其设置默认值或者设置一些规则（例如：设置是否是必须传递的以及传递值的类型等）
    static defaultProps={
        lx:'系统提示'
    };
    //prop-types插件可以给组件传递的属性设置规则(设置的规则不会影响页面的渲染，但是会在控制台跑出警告信息)
    static propTypes={
        // con:PropTypes.string //传递的内容需要是字符串
        con:PropTypes.string.isRequired //不仅是字符串，并且还必须传递
    }
    constructor(){ //=>props ,context,updater
        super();  //=>es6中的extends继承，一旦使用了constructor,第一行位置必须设置super执行：相当于React.Component.call(this),也就是call继承，把父类私有的属性继承过来
       //如果只写super()：虽然创建实例的时候把属性传递进来了，但是并没有传递父组件，也就是没有把属性挂载到实例上，使用this.props获取的结果是undefined
        //=>如果super(props):在继承父类私有的时候，就把传递的属性挂载到了子类的实例上，constructor中就可以使用this.props

        //=》props:当render渲染并且把当前类执行创建实例的时候，会把之前jsx解析出来的props对象中的信息(可能有children)传递给参数props => “调取组件传递的属性”
        // console.log(props)
        // let {con,ls,children} = props;
         /**
         * this.props: 属性集合
         * this.refs:ref集合（非受控组件中用到）
         * this.context；上下文
         * 
         */
        // console.log(this.props)
        
    }

    componentWillMount(){
        //=>第一次渲染之前
        console.log(this.props)
    }

    render(){
        // this.props.con='sd'//=>组件中的属性是调取组件的时候（创建类实例的时候）传递给组件的信息，而这部分信息是“只读的,不能修改）”
        let {lx,con}=this.props

        return <section>
            <h3>{lx || '系统提示'}</h3>
            <div>{con}</div>
        </section>
    }
    componentDidMount(){
        console.log(this.props.lx)
    }
}

ReactDOM.render(<div>
    写于2020/05/20
    <Dialog lx='系统提示' con='1' >
        <span>我是子元素</span>
    </Dialog>
</div>,document.getElementById('root'))

let obj={
    type:'div',
    props:{
        children:[
            '写于2020/05/20',
            {
                type:Dialog,
                props:{
                    lx:2
                }
            }
    
        ]

    }
}