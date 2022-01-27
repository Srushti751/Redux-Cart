
import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import Home from './Home';
import Product from './Product';

function ProductList() {
    const [prod, setProd] = useState([
        {
            id:1,
            pname:"mobile",
            prod:1000,
            quantity:1,
            image:"images/i1.jpg"
        },
        {
            id:2,
            pname:"Fan",
            prod:500,
            quantity:1,
            image:"images/i2.jpg"

        },
        {
            id:3,
            pname:"Fridge",
            prod:1000,
            quantity:1,
            image:"images/i3.jpg"

        },
        {
            id:4,
            pname:"shoes",
            prod:2000,
            quantity:1,
            image:"images/i4.jpg"

        },
        {
            id:5,
            pname:"Shirt",
            prod:1000,
            quantity:1,
            image:"images/i5.jpg"

        },
        {
            id:6,
            pname:"TV",
            prod:1000,
            quantity:1,
            image:"images/i6.jpg"

        },
        {
            id:7,
            "pname":"Jeans",
            "prod":1000,
            "quantity":1,
            "image":"images/i7.jpg"

        },
        {
            id:8,
            "pname":"Heels",
            "prod":700,
            "quantity":1,
            "image":"images/i8.jpg"

        },
        {
            id:9,
            pname:"Earphones",
            prod:1200,
            quantity:1,
            image:"images/i9.png"

        },
        {
            id:10,
            pname:"Laptop",
            prod:15000,
            quantity:1,
            image:"images/i10.jpg"

        }
  

    ])
    return (
        <div>
            <Router>
                <Switch>

                    <Route exact path="/products">
                        <Product prodData={prod}/>
                    </Route>
                    <Route exact path="/">
                        <Product prodData={prod}/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

   
    
      
    
    
 


export default ProductList ;


