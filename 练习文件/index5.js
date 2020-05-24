import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import PropTypes from 'prop-types'
class Vote extends React.Component{
    //组件传递的属性是只读的，我们为其设置默认值和相关规则
    static defaultProps={
        title:'2131'
    }
    static propTypes={
        title:PropTypes.string.isRequired
    }
    constructor(props){
        super(props);
        this.state={
            input:'2020/5/24'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                input:'2020/5/24/16:00'
            })
        },1000)
    }
    render(){
        let {input} = this.state
        return <section className='panel panel-default' style={{width:'60%',margin:'20px auto'}}>
            <div className='panel-heading'>
            <h3 className='panel-title'>{this.props.title}</h3>
            </div>
            <div className='panel-body'>
                {/* 
                    ref='spanLeft' 是在当前实例上挂载一个属性refs（对象），存储所有ref元素
                    x=>this.spanLeft=x；  x代表当前元素，它的意思是，把当前元素直接挂载到实例上，后期需要用到元素，直接this.spanLeft获取即可 
                
                
                */}
                支持人数：<span ref={x=>this.spanLeft=x}>0</span>
                <br/>
                <br/>
                反对人数：<span ref="spanRight">0</span>
                <br/>
                <br/>
                支持率：<span ref="spanRate"></span>
                <br/>
                <input className="form-control" value={input} onChange={ev=>{
                    this.setState({input:ev.target.value})
                }} />
                {input}
            </div>
            <div className="panel-footer">
                <button className="btn btn-success" onClick={this.support}>支持</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={this.against}>反对</button>
            </div>
        </section>
    }

    // support(ev){
    //     console.log(this)  //undefined
    //     console.log(ev.target)
    // }
    support=ev=>{
        //this:继承上下文中的this(实例)
        this.spanLeft.innerHTML++;
        this.computer();
    }
    against=ev=>{
        this.refs.spanRight.innerHTML++;
        this.computer();
    }
    computer=ev=>{
        let {spanRight,spanRate} = this.refs,
        n=parseFloat(this. spanLeft.innerHTML),
        m=parseFloat(spanRight.innerHTML),
        rate=(n+m==0)?'0%':((n/(n+m)*100).toFixed(2)+'%')
        spanRate.innerHTML=rate
    }

}

ReactDOM.render(<main>
    <Vote title="金黄的落叶堆满心间，我已不再是青春少年！" />
    <Vote title="你还有好多东西要学呢！" />
    </main>
    ,document.getElementById('root'))