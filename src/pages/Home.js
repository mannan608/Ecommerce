import Images from "../Images";
import { useContext, useEffect, useState } from "react";
import Products from "../component/products/Products";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { items } = useContext(ProductContext);
  const [item, setItem] = useState("");

  const [product, setProduct] = useState();

  const filterProducts = () => {
    const searchresult = items?.filter((sitem) => {
      return product === "" ? sitem : sitem.name.includes(item);
    });
    setProduct(searchresult);
  };
  const searchItem = (e) => {
    setItem(e.target.value);
  };

  useEffect(() => {
    setProduct(items);
  }, [items]);

  useEffect(() => {
    filterProducts();
  }, [item]);

  return (
    <div class="common-wrapper">
      <div class="container-fluid">
        <div class="hero-bannar d-flex justify-content-between align-items-center">
          <div>
            <h3>
              Customize Your Dream Wardrobe <br />
              With Iconic Style.
            </h3>
          </div>
          <div>
            <img src={Images.heroBannar} alt="" class="w-auto h-auto" />
          </div>
        </div>
        <div className="categories-products d-flex">
          <div class="category-tab">
            <h5>Explore Category</h5>
          </div>
          <div className="products-tab-content">
            <div class="search-filter d-flex gap-4">
              <div class="search-box">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here.."
                  id="searchInput"
                  onChange={(e) => searchItem(e)}
                />
                <img
                  src="../images/icon/search_box_icon.svg"
                  alt=""
                  class="search_icon w-auto h-auto"
                />
                <ul id="searchResults" class="search_result">
                  <div class="d-flex align-items-center justify-content-between recent_results">
                    <small>Recent</small>
                    <button class="anchor-tag">Clear All</button>
                  </div>
                  <li>
                    <span>
                      <img
                        src="../images/master_icon/search_product_img.png"
                        alt=""
                        class="search_item_img"
                      />
                      How to registration on steadfast
                    </span>
                    <img
                      src="../images/master_icon/search_close.png"
                      alt=""
                      class="close_recent"
                    />
                  </li>
                  <li>
                    <span>
                      <img
                        src="../images/master_icon/search_product_img.png"
                        alt=""
                        class="search_item_img"
                      />
                      How to withdraw My Payments
                    </span>
                    <img
                      src="../images/master_icon/search_close.png"
                      alt=""
                      class="close_recent"
                    />
                  </li>
                  <li>
                    <span>
                      <img
                        src="../images/master_icon/search_product_img.png"
                        alt=""
                        class="search_item_img"
                      />
                      What the call center Number
                    </span>
                    <img
                      src="../images/master_icon/search_close.png"
                      alt=""
                      class="close_recent"
                    />
                  </li>
                </ul>
              </div>
              <div class="custom-dropdown">
                <label for="" class="form-control">
                  Short By
                </label>
                <span class="arrow-icon"></span>
                <ul id="myOptions" class="options-list">
                  <li>low to high</li>
                  <li>High to low</li>
                </ul>
              </div>
            </div>
            <div className="productArea">
              <div className="row products">
                {product?.map((item) => {
                  return <Products item={item} key={item.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
