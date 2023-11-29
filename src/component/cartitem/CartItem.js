import Images from "../../Images";
// import CartAmountToggle from "../AddtoCart/CartAmountToggle";

const CartItem = () => {
  return (
    <div class="cart-item d-flex justify-content-between">
      <div class="cart-item-info d-flex gap-3 w-50">
        <div class="cart-item-img">
          <img src="" alt="" />
        </div>
        <div class="cart-item-name">
          <p class="txt-black">gfhfgfg</p>
          <p class="attribute-color">Color : Blue</p>
        </div>
      </div>
      <div class="price">
        <span>
          <p class="txt-in">Price : </p>
          <p>$20</p>
        </span>
      </div>
      {/* <CartAmountToggle /> */}
      <div class="price">
        <span>
          <p class="txt-in">Total Price : </p>
          <p>50</p>
        </span>
      </div>

      <div class="cart-item-action d-flex justify-content-center align-items-center">
        <i class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
};

export default CartItem;
