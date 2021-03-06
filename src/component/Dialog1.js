/*
 * 函数式声明组件
    1.函数2返回结果是一个新的jsx（也就是当前组件的jsx结构）
    2.props变量存储的值是一个对象，包含了调取组件时候传递的属性值(不传递是一个空对象)
 */
import React from 'react';
export default function Dialog(props){
    let {con,lx=0,children,style}=props;
    let title=lx===0?'系统提示':'系统警告';
    console.log(props)
    console.log(React.Children)
    //children可能有可能没有，可能只是一个值，也可能是一个数组，可能每一项是一个字符串，也可能是一个对象等（都代表双闭合组件中的子元素）
    return <section style={style}>
        <h2>{title}</h2>
        <div>{con}</div>
        {/* 把属性中传递的子元素放到组件中的指定位置 */}
        {/* {children} */}
        {
        React.Children.map(children,item=>item)
        }
    </section>
}