import React from "react";
import CartItem from "../component/cartitem/CartItem";
import OrderSummery from "../component/ordersummery/OrderSummery";

const Carts = () => {
  return (
    <div className="common-wrapper">
      <div className="container-fluid">
        <div class="product-carts d-flex">
          <div class="product-cart d-flex flex-column">
            <div class="section-head">
              <h4>My Carts</h4>
            </div>
            <div className="cart-items d-flex flex-column gap-3">
              <CartItem />
            </div>
          </div>
          <OrderSummery />
        </div>
      </div>
    </div>
  );
};

export default Carts;
