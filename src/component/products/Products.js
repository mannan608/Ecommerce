import "./Products.css";
import { Link } from "react-router-dom";
import Images from "../../Images";

const Products = ({ item }) => {
  const { id, name, image, price } = item;
  return (
    <div className="col-md-3">
      <div class="product">
        <div class="card">
          <div class="product-img">
            <img src={image} alt={name} />
          </div>
          <div class="card-body d-flex flex-column gap-1">
            <p>{name} </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="product-price d-flex align-items-center gap-2">
                <p>${price} </p>
                <del>$2</del>
              </div>
              <div class="cart_action">
                <button className="btn btn-sm">
                  <img
                    src={Images.cart_btn_20}
                    alt=""
                    className="cart_btn_20"
                  />
                  <img
                    src={Images.cart_btn_20_hover}
                    alt=""
                    className="cart_btn_20_hover"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="quick-action">
            <div class="wishlist-icon">
              <img src={Images.cardWishlist} alt="" class="w-auto h-auto" />
            </div>
            <Link to={`/productdetails/${id}`}>
              <div class="quick-view">
                <img src={Images.cardEye} alt="" class="w-auto h-auto" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
