// import Images from "../Images";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
import MyImage from "../component/myimage/MyImage";
import Rating from "../component/rating/Rating";
// import AddToCart from "../component/AddtoCart/AddtoCart";
import AddtoCart from "../component/AddtoCart/AddtoCartBtn";
import { ColorAttribute } from "../component/attribute/ColorAttribute";
import CartAmountToggle from "../component/AddtoCart/CartAmountToggle";

const ProductDetails = () => {
  // const { AddToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchSingleProduct = async () => {
    const res = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const { name, price, image, description, stars, reviews } = product;

  return (
    <div>
      <div class="product-information d-flex">
        <MyImage imgs={image} />
        <div class="product-content">
          <div class="product-name">
            <h5>{name}</h5>
            <span class="alert alert-sm bs-success-50">Instock</span>
          </div>
          <Rating stars={stars} review={reviews} />
          <div class="price-variation d-flex flex-column">
            <div class="price d-flex align-items-center gap-3">
              <h4>{price}</h4>
              <del>30$</del>
              <span class="txt-success">10% off</span>
            </div>
          </div>
          {/* <ColorAttribute product={product} /> */}

          <CartAmountToggle product={product} />
          {/* {stock > 0 && <AddtoCart product={product} />} */}
          <AddtoCart product={product} />

          <div class="product-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
