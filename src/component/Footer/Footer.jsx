import React from 'react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
   <>
  <div className="footer ">
  <div className="container my-5">
   
    <div className="row">
        <div className="col-md-3">
            <div className="footer-item">
                <img src={logo} className='img-fluid my-4 ' />
                <p className='my-3' >33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
                <p>(+91)2-222-0002</p>
                <a href='#'className='text-dark' >Poveria@gmail.Com</a>
            </div>
        </div>
        <div className="col-md-3 my-4">
            <div className="footer-item">
                <h6 className='fw-bold'>FIND IT FAST</h6>
                <p className='my-3' >Search</p>
                <p>Contact Us</p>
                <p>FAQ`s</p>
                <p>Gallery</p>
               
            </div>
           
        </div>
        <div className="col-md-3 my-4">
            <div className="footer-item">
                <h6 className='fw-bold'>INFORMATION</h6>
                <p className='my-3' >Latest News</p>
                <p>Privacy Policy</p>
                <p>Terms And Conditions</p>
                <p>Delivery Information</p>
               
            </div>
           
        </div>
        <div className="col-md-3 my-4">
            <div className="footer-item">
                <h6 className='fw-bold'>SUBSCRIBE NOW</h6>
                <p className='my-3' >You May Unsubscribe At Any Moment. Please Find Our Contact Info</p>
                <input className='form-control w-100 my-3 ' placeholder='Your Email' />
                <i className="fa-brands fa-facebook fs-4"></i>
                <i className="fa-brands fa-instagram fs-4 mx-3 " ></i>
                <i className="fa-brands fa-twitter fs-4  "></i>
                <i className="fa-brands fa-pinterest fs-4 mx-3 "></i>
                <i className="fa-brands fa-youtube fs-4 "></i>
               
            </div>
           
           
        </div>
    </div>
    <div className="line w-100"></div>
    <p className='text-start my-5' >© 2022, Poveria-Demo Powered By Shopify</p>
   </div>
   
  </div>
   </>
  )
}
