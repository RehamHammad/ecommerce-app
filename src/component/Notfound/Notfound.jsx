import React from 'react';
import notfound from '../images/notfound.jpg';

export default function Notfound() {
  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
        <h2 className='text-center fw-bold' >Sorry can't Find This Page</h2>
          <div className="notfound-img d-flex justify-content-center align-items-center">
          <img src={notfound} alt="notfound" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
