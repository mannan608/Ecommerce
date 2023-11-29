import React from "react";

const Wishlist = () => {
  return (
    <div className="common-wrapper">
      <div className="container-fluid">
        <div class="product-carts d-flex">
          <div class="product-cart d-flex flex-column">
            <div class="section-head">
              <h4>My Wishlist</h4>
            </div>
            <div class="cart-item d-flex justify-content-between">
              <div class="cart-item-info d-flex gap-3 w-50">
                <div class="cart-item-img">
                  <img src="" alt="" />
                </div>
                <div class="cart-item-name">
                  <p class="txt-black">dsdsg</p>
                </div>
              </div>
              <div class="price">
                <span>
                  <p class="txt-in">Price : </p>
                  <p>$45</p>
                </span>
              </div>

              <button className="btn btn-md">add to cart</button>

              <div class="cart-item-action d-flex justify-content-center align-items-center">
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
