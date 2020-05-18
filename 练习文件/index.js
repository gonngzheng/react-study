import React from 'react';
import ReactDOM,{render} from 'react-dom';
import qs from 'qs';
// import './2-self-jsx'
// import './static/less/index.less';
console.log(qs.parse('name=gz&age=24&lx=stu'))
/* ReactDOM.render([JSX],[CONTAINER],[CALLBACK]):把JSX元素渲染到页面中
    JSX:REACT虚拟元素
    CONTAINER:容器，我们想把元素放到页面中的哪个容器中
    CALLBACK:当把内容放到页面中呈现触发的回调函数

    JSX:react独有的语法 javascript+XML(HTML)
        和我们之前拼接的html字符串类似，都是把html结构代码和js代码或者数据混合在一起了，但是它不是字符串

        1.不建议我们把jsx直接渲染到body中，而是放在自己创建的一个容器中，一般放在一个id为root的div中即可
        2.在JSX中出现的{}是存放js的，但是要求js代码执行完成有返回结果（js表达式）
            ->不能直接放一个对象数据类型的值(对象(除了给style赋值)，数组，函数都不行)
            ->可以使基本类型的值（布尔类型什么都不显示，null，undefined也是jsx元素，代表的是空）
            ->循环判断的语句都不支持，但是支持三元运算符
        3.循环数组创建jsx元素（一般都基于数组的map方法完成迭代），需要给创建的元素设置唯一的key值（当前本次循环内唯一即可）
        4.只能出现一个根元素
        5.给元素设置样式类用的是className而不是class
        6.style中不能直接写样式字符串，需要基于一个样式对象来遍历赋值
        

*/
let root = document.querySelector('#root')
// ReactDOM.render(<div id={"box"} className="box" style={{color:'red'}}><h1>我是标题</h1><ul></ul></div>,root);
let styleObj={color:'red'}
render(<div><h1 id="titleBox" className="title" style={styleObj}>平凡的世界</h1><span>span中的内容</span></div>,root)
// render(<h1/>,root)
//执行React.createElement(type,props,children),创建一个对象（虚拟dom）
/*
    type:'h1'
    props:{
        id:'titleBox,
        className:'title',
        style:...,
        children:'平凡的世界'  //存放的是元素中的内容
    }
    ref:null
    key:null
    ...
    __proto__:Object.prototype
    
    ReactDOM.render(JSX语法最后生成的对象，容器)，基于RENDER方法吧生成的对象动态创建为DOM圆度，插入到指定的容器中
*/
console.log(React.createElement("h1", {
    id: "titleBox",
    className: "title",
    style: styleObj
  }, "\u5E73\u51E1\u7684\u4E16\u754C",React.createElement('span',{},'span中的内容'))
)
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// serviceWorker.unregister();
