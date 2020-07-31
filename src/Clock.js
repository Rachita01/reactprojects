import React,{Component} from 'react';

class Clock extends Component{
   constructor(props){
       super(props);
       this.state = {date: new Date()};
   }

    tick(){
        this.setState({date:new Date()});
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div>
                <h2>Hye I am clock</h2>
                <h3>It's {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Clock;