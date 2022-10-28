import React from "react";
import tsort1 from '../img/t-1.jpg'
import tsort2 from '../img/t-2.jpg'
import tsort3 from '../img/t-3.jpg'
import tsort4 from '../img/t-4.jpg'
import tsort5 from '../img/t-5.jpg'
import tsort6 from '../img/t-6.jpg'
import tsort7 from '../img/t-7.jpg'
function Card() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mt-5" >
              <img 
              src={tsort1}
              className="card-img-top" alt="" />
              <p className="product-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate neque iure voluptates! Optio, cupiditate perspiciatis.
              </p>
              <h6 className="product-title">80TL</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
