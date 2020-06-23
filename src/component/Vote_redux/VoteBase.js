import React from 'react'
import action from '../../store/action'
export default class VoteBase extends React.Component{
    constructor(props){
        super(props);
        let reduxState=this.props.store.getState().vote;
        this.state={
            ...reduxState
        }
    }
    componentWillMount(){
        this.props.store.dispath(action.vote.init({
            title:'2',
            n:0,
            m:100
        }))
        let reduxState=this.props.store.getState().vote;
        this.state={
            ...reduxState
        }
    }
    render(){
        return <div className="panel-heading">
            <h3 className="panel-title">
                {this.state.title}
            </h3>
            <div className="panel-body">
                支持人数:<span>{this.state.n}</span>
                <br></br>
                反对人数：<span>{this.state.m}</span>
            </div>
        </div>
    }
}