import axios from "axios";
import { func } from "joi";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Collection() {
  let [data, setData] = useState(null);


  async function getProducts() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  let navigate = useNavigate();

  function goTODetails(id) {
    navigate({
      pathname: "/details",
      search: `?id=${id}`,
    });
  }
  async function getByCategory(category) {
    if (category !== "all") {
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setData(data);
    } else {
      let { data } = await axios.get(`https://fakestoreapi.com/products`);
      setData(data);
    }
  }

  return (
    <>
     {data?
     <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center display-6 fw-bolder">Latest Products</h1>
           
          </div>
        </div>
      </div>
      <div className="buttons d-flex justify-content-center my-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getByCategory("all")}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getByCategory("men's clothing")}
        >
          Men`s Clothes
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getByCategory("women's clothing")}
        >
          Woman Clothes
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getByCategory("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => getByCategory("electronics")}
        >
          Electronic
        </button>
      </div>
      <div className="container">
        <div className="row">
          {data.map((product) => (
            <div key={product.id} className="col-md-3">
              <div key={product.id} className="product h-100 p-4 text-center ">
                <div className="img">
                  <img
                    className="w-100 mb-2"
                    src={product.image}
                    alt="products"
                    height="300px"
                  />
                  <div className="img-caption">
                    <button
                      onClick={() => goTODetails(product.id)}
                      className="btn btn-dark"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>

                <h2 className="h6 my-2 mb-0">
                  {product.title.substring(0, 12)}
                </h2>
                <h5 className="lead fw-bold">${product.price}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="line"></div>
      </div>
     </>
    :<div className='vh-100 bg-red d-flex justify-content-center align-items-center' >
    <i className='fas fa-spinner fa-spin text-black fa-2x' ></i>
    </div>}
    </>
  );
}
