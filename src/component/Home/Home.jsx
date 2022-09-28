import React from 'react';
import Collection from '../Collection/Collection';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';




export default function Home() {
  return (
    <>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="background"/>
      <div className="carousel-caption ">
       <div className="item">
        <h5>Upto 60% Discount</h5>
         <p className='display-3 fw-bolder mb-4' >Winter Stock Summer Collection</p>
        <button className='btn btn-dark' >View More</button>
       </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="background"/>
      <div className="carousel-caption">
        <div className="item  ">
        <h5>Best Relexing Collection</h5>
        <p className='display-3 fw-bolder mb-4' >Exclusive Cool Summer Collection</p>
        <button className='btn btn-dark' >View More</button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Collection/>
<div className="container">
<div className="line"></div>
</div>

    </>
    
  )
}
