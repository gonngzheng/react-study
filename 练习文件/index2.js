import React from 'react'
import ReactDOM from 'react-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Dialog from '../src/component/Dialog2'

ReactDOM.render(<main>
    <Dialog content='gz长得帅'/>
    <Dialog type={2} content='你写的代码又报错了' />
    <Dialog type="请登录" content={
        <div>
            <input type="text" className="form-control" placeholder="请输入用户名" />
            <input type="password" className="form-control" placeholder="请输入用户密码" />
        </div>
    }>
        <button className="btn btn-success">登录</button>
        <button className="btn btn-danger">取消</button>
    </Dialog>
</main>,document.getElementById('root'))