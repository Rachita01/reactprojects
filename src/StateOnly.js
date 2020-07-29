import React,{Component} from 'react';

class StateOnly extends Component{
    constructor(props){
        super(props);
        this.state = {
            header:"This is header from state only",
            content:"This is content from state only"
        }
    }

    render(){
        return(
            <div>
                <h2>{this.state.header}</h2>
                <h3>{this.state.content}</h3>
            </div>
        );
    }
}

export default StateOnly;