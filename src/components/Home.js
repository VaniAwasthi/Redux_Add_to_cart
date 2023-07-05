import React from "react";
import ios from "../assest/ios.png";
import cart from "../assest/add-to-cart.png";

const Home = () => {
  return (
    // <div>
    //   <h1>home Component</h1>
    // </div>
    <div>
      <div className="add-to-cart">
        <img src={cart} alt="cart" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={ios} alt="Iophone" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
          // onClick={() => {
          //   props.addToCartHandler({ pice: 1000, name: "i phone 11" });
          // }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
