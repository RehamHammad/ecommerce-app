import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { delItem,addItem } from './redux/action';

import { NavLink } from 'react-router-dom';


export default function Details() {

 const [cartBtn,setCartBtn] = useState("Add To Cart")
 let [searchParams,setSearchParams]=useSearchParams();
 let [details,setDetails]=useState(null)

 const dispatch = useDispatch();
 

 const handleCart=(details)=>{
  if (cartBtn === "Add To Cart"){
    dispatch(addItem(details))
    setCartBtn("Remove from Cart")
  }else{
    dispatch(delItem(details))
    setCartBtn("Add To Cart")
  }
 }
 
 let currentId=searchParams.get('id');
 async function getDetails(){
    let {data}= await axios.get(`https://fakestoreapi.com/products/${currentId}`)
    setDetails(data);
  } 
  useEffect(() => {
    getDetails()
   }, []);


  return (
    <>
   {details?
   <>
   <div className="container my-5">
    <div className="row">
    <div className="col-md-6">
      <div className="details-img">
      <img src={details.image} alt={details.title} height='400px' width='400px' />
      </div>   
    </div>
    <div className="col-md-6">
        <h4 className='text-uppercase text-black-50'>{details.category}</h4>
        <h5 className='display-5' >{details.title}</h5>
        <p className='lead fw-bolder' >
          Rating {details.rating && details.rating.rate}
          <i className='fa fa-star mx-1' ></i>
          <i className='fa fa-star' ></i>
        </p>
        <h4 className='display-6 fw-bold my-4' >
           ${details.price}
        </h4>
        <p className='lead' >{details.description}</p>
        <button onClick={()=>handleCart(details)} className='btn btn-dark mx-2' >{cartBtn}</button>
      
    </div>
    </div>
   </div>
   </>:
   <div className='vh-100 bg-red d-flex justify-content-center align-items-center' >
    <i className='fas fa-spinner fa-spin text-black fa-2x' ></i>
    </div>}
    </>
  )
}
