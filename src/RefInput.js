import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class RefInput extends Component{
    constructor(props){
        super(props);
        this.state = {data:''};
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

updateState(e){
    this.setState({data:e.target.value});
}

clearInput(){
    this.setState({data:''});
    ReactDOM.findDOMNode(this.ref.myInput).focus();
}

render(){
    return(
      <div>
          <input value={this.state.data} onChange = {this.updateState} refs="MyInput"></input>
          <button onClick={this.clearInput}>CLEAR</button>
          Given input:{this.state.data}
      </div>
    );
}
}

export default RefInput;