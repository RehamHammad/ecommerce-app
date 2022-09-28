import React from 'react'

export default function Contact() {
  return (
   <>
   <h1 className='text-center my-5' >CONTACT US</h1>
   <div className="contact my-5">
    <div className="container">
     <div className="row">
      <div className="col-md-6">
        <div className="form">
          <h2 className='my-3' >Contact Us</h2>
          <form>
            <input type='text' placeholder='Name' className='form-control my-2' />
            <input type='email' placeholder='Email *' className='form-control my-2' />
            <input type='number' placeholder='Phone Number' className='form-control my-2' />
           <textarea rows='3' placeholder='Comment' className='form-control my-2' ></textarea>
             <button className='btn btn-dark my-2' >Send</button>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="item mx-3">
          <h2 className='my-3' >Get In Touch With Us</h2>
          <ul className='list-unstyled' >
            <li className='d-flex py-2' >
            <div className="icons">
            <i class="fa-solid fa-house mx-2"></i>
            </div>
            <div className="text">
              <h6>33 New Montgomery St.</h6>
            </div>
            </li>
            <li className='d-flex py-2'>
            <div className="icons">
            <i class="fa-solid fa-phone mx-2"></i>
            </div>
            <div className="text">
              <h6>(+91)2-222-0002</h6>
            </div>
            </li>
            <li className='d-flex py-2'>
            <div className="icons">
            <i class="fa-solid fa-envelope mx-2"></i>
            </div>
            <div className="text">
              <h6>Poveria@gmail.Com</h6>
            </div>
            </li>
            <li className='d-flex py-2'>
            <div className="icons">
            <i class="fa-solid fa-info mx-2"></i>
            </div>
            <div className="text">
              <h6>Monday – Friday 10 AM – 8 PM</h6>
            </div>
            </li>
            
          </ul>
        
          
         
        </div>
      </div>
     </div>
    </div>
   </div>
   </>
  )
}
