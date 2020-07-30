import React, { Component } from 'react';

class EventExampleToggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
       this.setState(previousState => ({isToggleOn: !previousState.isToggleOn}));
    }


render(){
    return(
     <button onClick={this.handleClick}>
         Togglebutton:-{this.state.isToggleOn?'ON':'OFF'}
     </button>
    );
}
}

export default EventExampleToggle;