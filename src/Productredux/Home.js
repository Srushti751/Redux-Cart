import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'


export default function Home() {
    if(localStorage.getItem('mycart')!=undefined){
    var arr = JSON.parse(localStorage.getItem('mycart'))}
    
    const [item, setItem] = useState(arr)
    

    return (
        <div>
             <div className="bg-dark ">
                <Link className="btn btn-outline btn-lg m-3 text-white" to="/home">Home</Link>
                <Link className="btn btn-outline btn-lg m-3 text-white" to="/products">Products</Link>
               </div>
            <h1 className="mb-5">Cart Products</h1>
        {localStorage.getItem('mycart')!=undefined?
            <>
            
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">image</th>
                    </tr>
                </thead>
                <tbody>
               
                {item.map((item)=>{
                return(
                    <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.pname}</td>
                    <td>{item.prod}</td>
                    <td><img src={item.image} height="100" width="100"/></td>
                    </tr>
                )
            })}
                   
                    
                </tbody>
                </table>
           </>:
        <h1>No products added</h1>}

        </div>

    )
}

