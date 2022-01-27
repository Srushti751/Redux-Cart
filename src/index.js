import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

// var arrlen =0
// if(localStorage.getItem('mycart')!=undefined){
//   let arr = JSON.parse(localStorage.getItem('mycart'));
//    arrlen= arr.length
// }
// else{
//    arrlen = 0
// }
// const initialState = {cart:arrlen}
// function reducer(state=initialState,actions){
// let arr = JSON.parse(localStorage.getItem('mycart'));

//   console.log(state)
//   switch(actions.type){
//     case 'ADD' :return {cart:state.cart +1}
//     default: return state
//   }
// }

// const store = createStore(reducer)


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
