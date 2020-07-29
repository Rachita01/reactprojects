import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//JSX Example
// var ipsumtext = "lorem ipsum dollar lorem ipsum dollar";
//     const element = (
//         <div>
//             <a href="#" className="button">Button</a>
//             <div>{ipsumtext}</div>
//         </div>
//     );

//Render element using jsx
// function formatUser(user){
//   return user.firstName + ' '+ user.lastName;
// }

// const user = {firstName:"Rachita",
// lastName:"Singhal"};

// const element = (<h1> Hello {formatUser(user)}</h1>);
// ReactDOM.render(
//     element,
//   document.getElementById('root')
// );

ReactDOM.render(<App/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
