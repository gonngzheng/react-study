class Parent{
    constructor(x,y){
        //给实例设置私有的属性
        this.x=x;
        this.y=y;
    }
    render(){

    }
    // AA=12 不行
    //=>把parent当做一个普通的对象，设置的是有属性方法，和实例没关系
    static ajax(){
        //parent.ajax()
    }
    // static BB=12//不行
}
Parent.prototype.AA=12;//es6创建类的大括号中只能写方法（而且不能是箭头函数），不能设置属性，属性需要自己额外拿出来设置
Parent.BB=12;//把它作为对象设置的私有属性也只能拿到外面设置
class Children extends Parent{
    constructor(){
        super(3,4)//Parent.constructor.call(this)
        //Parent.constructor(x,y)
        //=>给实例设置私有的属性
        console.log(this.x,this.y)
    }
    render(){
        
    }
}
console.dir(new Parent(1,2))
console.dir(new Children(10,20))