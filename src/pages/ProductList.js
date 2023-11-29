import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "../component/products/Products";
import CategoryTab from "../component/CategoryTab";
import Colors from "../component/Colors";
import Brand from "../component/Brand";

const ProductList = () => {
  const { items } = useContext(ProductContext);
  const [item, setItem] = useState(items);
  // Category filter
  const categoryData = [...new Set(items.map((value) => value.category))];

  const CategoryFilterItem = (cate) => {
    const newItem = items.filter((newval) => newval.category === cate);
    setItem(newItem);
  };
  // End  Category filter

  // brand filter
  const brandData = [...new Set(items.map((value) => value.company))];

  const brandFilterItem = (brand) => {
    // console.log({ brand });
    const newItem = items.filter((newval) => newval.company === brand);
    setItem(newItem);
  };

  // End  brand filter

  // Color Filter
  const colorData = items.map((value) => value.colors);
  const uniColor = [...new Set([].concat(...colorData))];
  const filterByColor = (uniColor) => {
    const newColorItem = items.filter((newval) =>
      newval.colors.includes(uniColor)
    );
    setItem(newColorItem);
  };
  // End  Color Filter

  // Search Data
  const [searchProduct, setsearchProduct] = useState("");

  const filterProducts = () => {
    const searchresult = items?.filter((sitem) => {
      return item === "" ? sitem : sitem.name.includes(searchProduct);
    });
    setItem(searchresult);
  };
  const searchItem = (e) => {
    setsearchProduct(e.target.value);
  };

  useEffect(() => {
    filterProducts();
  }, [searchProduct]);
  // Search Data

  return (
    <div className="common-wrapper">
      <div className="container-fluid">
        <div className="categories-products d-flex">
          <div className="category-tab">
            <div className="category-wise-filter">
              <h5>Explore Category</h5>
              <div className="tab-menus">
                <CategoryTab
                  categoryData={categoryData}
                  CategoryFilterItem={CategoryFilterItem}
                  setItem={setItem}
                />
              </div>
            </div>
            <div className="brand-wise-filter">
              <h5>Explore Brand</h5>
              <div className="tab-menus">
                <Brand
                  brandData={brandData}
                  brandFilterItem={brandFilterItem}
                />
              </div>
            </div>

            <div className="color-wise-filter">
              <h5>Explore Color</h5>
              <div className="tab-menus">
                <Colors uniColor={uniColor} filterByColor={filterByColor} />
              </div>
            </div>
          </div>
          <div className="products-tab-content ">
            <div className="short">
              <input
                placeholder="Search Here"
                onChange={(e) => searchItem(e)}
              />
            </div>
            <div className="productlist">
              <div className="row products">
                {item.map((item) => {
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

export default ProductList;
