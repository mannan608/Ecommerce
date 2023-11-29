import React from "react";

const OrderSummery = () => {
  return (
    <div class="cart-items-summary">
      <h6>Order Summery</h6>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p>Sub Total (50)</p>
          <p class="txt-black">40</p>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p>Coupon Code</p>
          <div>
            <input
              type="text"
              class="form-control counter-input "
              placeholder="0"
            />
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <p class="txt-black">Total</p>
          <p class="txt-black">400</p>
        </li>
      </ul>
      <div class="process-order">
        <a href="payment.html">
          <button class="btn btn-lg w-100">Process to Checkout</button>
        </a>
      </div>
    </div>
  );
};

export default OrderSummery;
