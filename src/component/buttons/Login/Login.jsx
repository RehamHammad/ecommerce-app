import React from 'react';


export default function Login() {
  

  return (
    <>
    <div className='my-5 text-center ' >
   <h2 className='my-5' >Login</h2>
  <form >
  <div className="input-gp my-3 m-auto w-25">
   <input type='email' className='form-control my-3' name='email' placeholder='Enter Your Email'  />
  
   <input type='password' className='form-control my-3' name='password' placeholder='Enter Your Password'  />
   <button className='btn btn-dark my-3' >
   Login
   </button>
   </div>
  </form>
   </div>
   <div className="container line"></div>
   </>
  )
}
