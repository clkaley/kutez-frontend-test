import React from "react";
import "./style.css";
import { FaShoppingBasket, FaRegCreditCard } from "react-icons/fa";
import { toast } from "react-toastify";
import ImageGallery from 'react-image-gallery';
import t1 from "../img/t-1.jpg";
import t3 from "../img/t-3.jpg";
import t4 from "../img/t-4.jpg";
import t5 from "../img/t-5.jpg";
import t6 from "../img/t-6.jpg";
import t7 from "../img/t-7.jpg";
import t8 from "../img/t-8.jpg";
import t9 from "../img/t-9.jpg";
function Card(props) {
  console.log(props);

  const notifyBasket = () =>
    toast("Added Basket!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const notifyCheckout = () =>
    toast("Go to Checkout Process!", {
      position: "bottom-center",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // const images = [
    //   {
    //     t1
    //   },
    //   {
    //   t3
    //   },
    //   {
    //    t4
    //   },
    // ];

    const images = [
      {
        original:t1,
      },
      {
        original:t3,
      },
      {
        original:t4,
      },
    ];
    
  return (
    <>
      <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6  mt-4">
        <div className="card">
          <div className="card-body">
            <ImageGallery items={images} />
            <div className="about">
              <h4 className="mt-3">{props.name}</h4>
              <p>{props.about}</p>

              <div className="product-size mt-1">
                <div className="size s">S</div>
                <div className="size m">M</div>
                <div className="size l">L</div>
              </div>
              <div className="product-color mt-2">
                <div className="color black"></div>
                <div className="color blue"></div>
                <div className="color white"></div>
              </div>
              <h4 className="price mt-3">{props.price} $</h4>
              <div className="flex-container">
                <button className="button" onClick={notifyBasket}>
                  Add Basket{" "}
                  <FaShoppingBasket
                    style={{ marginBottom: "2px", marginLeft: "10px" }}
                  />
                </button>

                <button className="button"
                onClick={notifyCheckout}>
                  Checkout{" "}
                  <FaRegCreditCard
                    style={{ marginBottom: "2px", marginLeft: "10px" }}
                  />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
