
import React,{useState} from 'react'
import DATA from './Data'
import  "./App.css"

// import {increment,decrement} from "./Redux/Reducer/CartReducer"
// import {useDispatch} from 'react-redux'
// import {useCart} from "react-use-cart"

function Product() {

  // const addItem=useCart()
  // const dispatch=useDispatch()
  const [model,setModel]=useState(false);
  const [tempdata,setTempdata]=useState([]);
  const getData=(image,title,description,price)=>{
   
    let tempData=[image,title,description,price]
    // console.log(tempData);
    setTempdata(value=>[1,...tempData]);
    return setModel(true);
  }
  const [data,setData]=useState(DATA)
  const filterProduct=(cart)=>{
    const result=DATA.filter((x)=>{
      return x.category===cart
    })
    setData(result)
  }
  return (
    <>
 
    <div className="continer  mt-5" >
    <h3 className='text-center'>PRODUCTS</h3>
    <hr />
    <div className="row">
    <div className="col-md-12" >
    
    </div>
    <div className="buttons d-flex justify-content-center mt-3">
    <button className="btn btn-outline-primary me-2 btn-sm" onClick={()=>setData(DATA)}>ALL</button>
    <button className="btn btn-outline-primary  me-2 btn-sm"  onClick={()=>filterProduct('pizza')}>PIZZA</button>
    <button className="btn btn-outline-primary  me-2 btn-sm" onClick={()=>filterProduct('chicken')}>CHICKEN</button>
    <button className="btn btn-outline-primary  me-2 btn-sm"  onClick={()=>filterProduct('rice')}>RICE</button>
    
    <button className="btn btn-outline-primary  me-2 btn-sm"  onClick={()=>filterProduct('icecream')}>ICE CREAMES</button>
    <button className="btn btn-outline-primary me-2 btn-sm"  onClick={()=>filterProduct('cooldrink')}>COOL DRINKS</button>
    
    </div>
    
    </div>
    </div>
    <div className="continer mt-3">
    <div className="row">
    {data.map((value,index)=>{
      // const {price,title,image,description}=value;
      return (
       
        <div className="col-md-3 col-sm-6 col-12 mb-4" key={index}>
    <div className="card">
  <img src={value.image} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title text-center"> {value.title}</h5>
    <p className='fw-bold text-red text-center'><span>Rs:</span>{value.price}</p>
    <p className="card-text text-center">{value.description}...</p>
    
      
     
  
  </div>
</div>
    </div>  
   
        
       
      )
    })}
   
    </div>
   
    </div>
   
    </>
    
  )
}

export default Product;