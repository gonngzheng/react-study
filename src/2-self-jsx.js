/**
 * create-element:创建jsx对象
 * 参数：至少两个 type/props，children这个部分可能没有可能有多个
 * 
 */
function createElement(type,props,children){
    /**
     * 1.创建一个对象（默认有四个属性：type/props/ref/key）,最后要把这个对象返回
     * 2.根据传递的值修改这个对象
     * type=>传递的type
     * props 需要做一些处理：大部分传递props中的属性都赋值给对象的props,有一些比较特殊
     *      ->如果是ref或者key,我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中
     *  把这两个值删除掉
     *      ->把传递的children作为新创建对象的props中的一个属性
     * 
     * 
     */
    //创建一个对象，设置一些默认属性值
    props=props||{}
    let obj={
        type:null,
        props:{
            children:''
        },
        ref:null,
        key:null
    }
    obj = {...obj,type,props:{...props,children}};
    //把ref和key提取出来,并且删除props中的属性
    'key' in obj.props ? (obj.key=obj.props.key,obj.props.key=undefined) :null
    'ref' in obj.props ? (obj.ref=obj.props.ref,obj.props.ref=undefined) :null

    return obj;
   
}
let styleObj={color:'green'}
let objJSX = createElement(
    'h1',
    {
        id: "titleBox",
        className: "title",
        style: styleObj,
        ref:'AA',
        key:'12'
        
    },
    "\u5E73\u51E1\u7684\u4E16\u754C"
)
/*
    {
        type:'h1',
        props:{
            id:'titleBox',
            className:'titile',
            style:styleObj,
            children:"\u5E73\u51E1\u7684\u4E16\u754C",
            ref:undefined,
            key:undefined
        },
        ref:'AA',
        key:'12',
        __proto__:Object.prototype
    }
*/

/**
 * render: 把创建的对象生成对应的DOM元素，最后插入到页面中
 * 
 */
function render(obj,container,callBack){
    let {type,props} = obj || {};
    let newElement = document.createElement(type);
    for(let attr in props){
        if(!props.hasOwnProperty(attr)) break;
        if(!props[attr]) continue; //如果当前属性没有值，直接不处理即可
        let value =props[attr];
        if(attr==='className'){
            newElement.setAttribute('class',value);
            continue;
        }
        if(attr==='style'){
            if(value==='') continue;
            for(let styKey in value){
                newElement['style'][styKey]=value[styKey];
            }
            continue;
        }
        if(attr==='children'){
            if(typeof value==='string'){
                let text = document.createTextNode(value) //创建文本节点
                newElement.appendChild(text)
            }
            continue;
        }

        newElement.setAttribute(attr,value) //基于setAttribute可以让设置的属性表现在html的结构上
    }
    container.appendChild(newElement)
    callBack && callBack();
}
render(objJSX,root,()=>{
    console.log('ok')
})