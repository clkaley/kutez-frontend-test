import React from "react";
import "./style.css";
import { FaShoppingBasket, FaRegCreditCard } from "react-icons/fa";

function Card(props) {
  console.log(props);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
        <div className="card">
          <div className="card-body">
            <img className="card-img-top" src={props.img} alt="" />
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
                <button className="button">
                  Add Basket{" "}
                  <FaShoppingBasket
                    style={{ marginBottom: "2px", marginLeft: "10px" }}
                  />
                </button>
                <button className="button">
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
