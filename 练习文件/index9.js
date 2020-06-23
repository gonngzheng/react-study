import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import VoteBase from '../src/component/Vote_redux/VoteBase'
import VoteHandle from '../src/component/Vote_redux/VoteHandle'
import store from '../src/store'
ReactDOM.render(<div className="panel panel-default" style={{width:'50%',margin:'20px auto'}}>
        <VoteBase store={store}/>
        <VoteHandle store={store}/>
    </div>, document.getElementById('root'));

    //该页面有报错