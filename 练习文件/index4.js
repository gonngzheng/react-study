import React from 'react'
import ReactDOM from 'react-dom'
/**
 * React中的组件有两个非常重要的概念
 *  1.组件的属性；[只读]调取组件的时候传递进来的信息
 *  2.组件的状态：[读写]自己在组件中设定和规划的（只有类声明式组件才有状态的管控，函数式组件声明不存在状态的管理）  组件状态类似于vue中的数据驱动，数据绑定的时候是基于状态值绑定，当修改组件状态后，对应的jsx元素也会跟着重新渲染（差异渲染：只把数据改变的部分重新渲染，基于DOM-DIFF算法完成）
 */

//函数式组件是静态组件：和执行普通函数一样，调取一次组件，就把组价中的内容获取到，插入到页面中，如果不重新调取组件，显示的内容是不会发生任何改变的

//真实项目中只有调取组件，组件中的内容不会再次改变的情况下，我们才可能使用函数式组件
    // function Clock(){
    //     return <section>
    //         <h3>当前北京时间为:</h3>
    //         <div style={{color:"red"}}>{new Date().toLocaleString()}</div>
    //     </section>
    // }
    // setInterval(()=>{
    //     ReactDOM.render(<Clock/>,document.getElementById('root'))
    // },1000)


    class Clock extends React.Component{
        constructor(){
            super()
            //=> 初始化组件的状态（都是对象类型的）：要求在constructor中，需要把后期使用的状态信息全部初始化一下
            this.state = {
                time:new Date().toLocaleString()
            }
        }

        componentDidMount(){
            //react生命周期函数之一：第一次组件渲染完成后触发（我们在这里只需要间隔1000ms把state状态中的time数据改变，这样react会自动把组件中的部分内容进行重新的渲染）
            setInterval(()=>{
                //react中虽然下面方式可以修改状态，但是并不会通知react重新渲染页面，所以不要这样去操作和修改状态
                // this.state.time=new Date().toLocaleString()
                // console.log(this.state.time);

                //修改组件的状态
                    // 1.修改部分状态：会用我们传递的对象和初始化的state进行匹配，只把我们传递的属性进行修改，没有传递的仍然保留原始的状态信息（部分状态修改）
                    // 2.当状态修改完成，会通知react把组件jsx中的部分元素重新进行渲染
                this.setState({
                    time:new Date().toLocaleString(),
                },()=>{
                    //当通知react把需要重新渲染的jsx元素渲染完成后，执行的回调函数（类似于生命周期函数中的componentDidUpdate,项目中一般使用钩子函数而不是这个回调）
                    //设置回调的原因：set-state是异步操作
                })

            },1000)
        }

        render(){
            return  <section>
                <h3>当前北京时间为:</h3>
                <div style={{color:"red",fontWeight:'bold'}}>
                    {/* 获取组件的状态信息 */}
                    {this.state.time}    
                </div>
                </section>
        }
    }

    ReactDOM.render(<Clock/>,document.getElementById('root'))