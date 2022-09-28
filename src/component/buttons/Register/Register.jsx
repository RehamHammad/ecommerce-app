
import React from 'react';

export default function Register() {
  

  return (
    <>
    <div className='my-5 text-center ' >
   <h2 className='my-5' >Create Acount</h2>
   
  <form>
  <div className="input-gp my-3 m-auto w-25">
   
   <input  type='text' className='form-control my-3 ' name='first_name' placeholder='Enter Your Fname' />
   
   <input type='text' className='form-control my-3' name='last_name' placeholder='Enter Your Lname'  />
  
   <input  type='email' className='form-control my-3' name='email' placeholder='Enter Your Email'  />
  
   <input  type='password' className='form-control my-3' name='password' placeholder='Enter Your Password'  />
   <button className='btn btn-dark my-3' >
   Create
   </button>
   </div>
  </form>
   </div>
   <div className="container line"></div>
   </>
  )
}
