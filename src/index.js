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

//------------------Search functionality-------------------------//
//Import Component to run this example

// class KeyExampleSearch extends Component{
//     constructor(props){
//         super(props);
//         this.state={filterText:'',
//                     isStockOnly:false}
//         this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//         this.handleStockChange = this.handleStockChange.bind(this);
//     }

//     handleFilterTextChange(filterText){
//         this.setState({
//             filterText:filterText
//         })
//     }

//     handleStockChange(inStockOnly){
//         this.setState({
//             inStockOnly:inStockOnly
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <SearchBar filterText={this.state.filterText}
//                            inStockOnly={this.state.inStockOnly}
//                            onFilterTextChange = {this.handleFilterTextChange}
//                            onStockChange = {this.handleStockChange}></SearchBar>

//                 <ProductTable products = {this.props.products}
//                               filterText={this.state.filterText}
//                               inStockOnly={this.state.inStockOnly}></ProductTable>
//             </div>

//         );
//     }

// }

// class SearchBar extends Component{
// constructor(props){
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleStockChange = this.handleStockChange.bind(this);
// }

// handleFilterTextChange(e){
//     this.props.onFilterTextChange(e.target.value);
// }

// handleStockChange(e){
//     this.props.onStockChange(e.target.checked);
// }

// render(){
//     return(
//         <div>
//             <form>
//                 <input type="text" placeholder = "Search.." value={this.props.filterText} onChange={this.handleFilterTextChange}></input>
//                 <p>
//                     <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleStockChange}></input>
//                     {' '}
//                     Only Show Products In Stock
//                 </p>
//             </form>
//         </div>
//     );
// }
// }
// class ProductCategoryRow extends Component{
//     render(){
//         const category = this.props.category;
//     return(
//         <tr>
//           <th colSpan="2">
//               {category}
//           </th>
//         </tr>
//     );
//     }
// }

// class ProductRow extends Component{
//     render(){
//         const product = this.props.product;
//         const name = product.stocked?
//         product.name : <span style={{color:'red'}}>{product.name}</span>

//         return(
//             <tr>
//                 <td>{name}</td>
//                 <td>{product.price}</td>
//             </tr>
//         );
//     }
// }

// class ProductTable extends Component{
// render(){
//     const filterText = this.props.filterText;
//      const inStockOnly = this.props.inStockOnly;
//      const rows = [];
//      let lastCategory = null;
//      this.props.products.forEach((product) => {
//      if(product.name.indexOf(filterText)===-1)
//       {
//           return;
//       }   
//       if(inStockOnly && !product.stocked){
//           return;
//       }
//       if(product.category!== lastCategory)
//       {
//           rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
//       }

//       rows.push(
//           <ProductRow product={product} key={product.name}/>);
//                   lastCategory = product.category;
//       }
//      );
// return(
//    <table>
//        <thead>
//            <tr>
//                <th>
//                    Name
//                </th>
//                <th>
//                    Price
//                </th>
//            </tr>
//        </thead>
//        <tbody>
//             {rows} 
//         </tbody>
//    </table>

// );
// }
// }

// const PRODUCTS = [
//     {category:"Sporting Goods",price:"$49.50",stocked:true,name:"Football"},
//     {category:"Sporting Goods",price:"$30.50",stocked:true,name:"Baseball"},
//     {category:"Sporting Goods",price:"$40.50",stocked:false,name:"Basketball"},
//     {category:"Electronics",price:"$5.50",stocked:true,name:"Fan"},
//     {category:"Electronics",price:"$4.50",stocked:false,name:"Bulb"},
//   ] 
// ReactDOM.render(<KeyExampleSearch products={PRODUCTS}/>,document.getElementById('root'));

ReactDOM.render(<App/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
