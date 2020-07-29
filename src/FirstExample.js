import React, { Component } from 'react';
import ReactDom from 'react-dom';

class FirstExample extends Component{
    render(){
        return(
            <div>
            <Democlass democlass="First Example of props by"></Democlass>
            <Author authorname="Rachita Singhal"></Author>
            <CmpStyle calculations="Calculate"></CmpStyle>
            </div>
        );
    }
}

class Democlass extends Component{
    render(){
        return(
            <h1><u>{this.props.democlass}</u></h1>
        );
    }
}

class Author extends Component{
    render(){
        return(
            <h2>{this.props.authorname}</h2>
        );
    }
}

class CmpStyle extends Component{
    render()
    {let MyStyle = 
        {
        color:'Blue'
        }
    return(
      <h2 style={MyStyle}>Calculate:4-2={4-2}</h2>
    );
}
}

export default FirstExample;