import React, { Component } from 'react';

class EventExamplePfromc extends Component{
  constructor(props){
      super(props);
      this.state = {
          data: "I am original data"
      };
      this.updateState = this.updateState.bind(this);
  }

  updateState(){
      this.setState ({
          data: "I am updated data from child component"
      });  
  } 

  render(){
      return(

        <div>
            <Content myDataProps = {this.state.data}
                     myUpdateProps = {this.updateState}></Content>
        </div>
      )
  }
}

class Content extends Component{
render(){
    return(
        <div>
        <button onClick={this.props.myUpdateProps}>CLICK</button>
        <h3>{this.props.myDataProps}</h3>
        </div>
    );
}
}

export default EventExamplePfromc;