import { useState } from "react";

const CartAmountToggle = ({ product }) => {
  const { stock } = product;
  const [qty, setQty] = useState(1);
  const setIncress = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock);
  };
  const setDecress = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  return (
    <div>
      <div class="input-group incr-decr">
        <button class="decrement-btn" onClick={() => setDecress()}>
          <img
            src="/static/media/minus.6a46ff91bdc7706aca8ae7e057b195ea.svg"
            alt=""
          />
        </button>
        <input type="text" class="form-control counter-input" value={qty} />
        <button class="increment-btn" onClick={() => setIncress()}>
          <img
            src="/static/media/plus.c4c200943d8d71499cf7f8c5568083a3.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
