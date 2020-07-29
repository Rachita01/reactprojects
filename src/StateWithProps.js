import React, { Component } from 'react';

class StateWithProps extends Component{
   constructor(props)
   {
       super(props);
       this.state = {header:"This is header using state and props both",
                    content:"This is content using state and props both"
   }
   }

   render(){
       return(
         <div>
             <Header headerprop={this.state.header}/>
             <Content contentprop={this.state.content}/>
         </div>
       );
   }
}

class Header extends Component{
    render(){
        return(
    <div>
        <h2>{this.props.headerprop}</h2>
    </div>
        );
    }
}

class Content extends Component{
    render()
    {
        return(
            <div>
                <h3>{this.props.contentprop}</h3>
            </div>
        )
    }
}

export default StateWithProps;