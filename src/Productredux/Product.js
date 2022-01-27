import React, { useState,useEffect } from 'react'
// import Cart from './Cart';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import { Addcart } from './CartAction';



 function Product(props) {
     
    return(
        <Router>
            <div>
                <div className="bg-dark ">
                <Link className="btn btn-outline btn-lg m-3 text-white" to="/home">Home</Link>
                <Link className="btn btn-outline btn-lg m-3 text-white" to="/products">Products</Link>
                <button className="btn btn-warning btn-lg m-3 ml-0" >Cart  {props.mycart}</button>
               </div>
                    <div className="row">
                        <h1>Products</h1>

                        {props.prodData.map(currElm=>{
                        const {id, pname,prod, image} = currElm;
                        return(
                            <>

                            <div key={currElm.id} className="col-sm-3">
                                <div  key={id} className="card " style={{height:"500px",width: "18rem"}}>
                                    <img src={image}   className="card-img-top" alt={pname}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product:{pname}</h5>
                                        <p className="card-text">price: Rs.{prod}</p>
                                        <button className="btn-warning" onClick={()=>props.addcart(id,image,pname,prod)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                                
                            </>
                        )
                    })}
                    <button className="btn-danger" onClick={()=>props.removeCart()}>Remove Cart</button>

                    </div>
            </div>
            </Router>
        );
   
}

       
const mapStateToProps=(state)=>{
    return{
        mycart:state.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addcart: function(id,image,pname,prod){
                /* eslint-disable */
                if(localStorage.getItem('mycart')!=undefined){
                    let arr = JSON.parse(localStorage.getItem('mycart'));
                    const newid= arr.find((ele)=>{
                        return(ele.id===id)
                    })
                    if(newid ){
                        console.log(id)
                
                        
                        alert(` item already added`)
        
                    localStorage.setItem('mycart',JSON.stringify(arr))
        
                    }
                    else{
                        arr.push({id:id,image:image,pname:pname,prod:prod});
                    localStorage.setItem('mycart',JSON.stringify(arr))
                    alert("Product Added")
                    dispatch(Addcart())    // redux dispatch method
                    }
                }
                else{
                    let arr=[];
                    // arr.push(id);
                    arr.push({id:id,image:image,pname:pname,prod:prod});
                    localStorage.setItem('mycart',JSON.stringify(arr))
                    alert("Product Added")
                    dispatch(Addcart())    // redux dispatch method
                }
              
        },
        removeCart: function(){
            if(window.confirm("Do you want to  delete cart items")){
            localStorage.removeItem('mycart')
            }
        }
        }
    }




export default connect(mapStateToProps,mapDispatchToProps)(Product)