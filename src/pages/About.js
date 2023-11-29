import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Products from "../component/products/Products";

const About = () => {
  const { items } = useContext(ProductContext);
  const brandData = [...new Set(items.map((value) => value.company))];

  const [item, setItem] = useState("");
  const selectHandle = (e) => {
    setItem(e.target.value);
  };
  console.log(selectHandle);
  return (
    <div className="common-wrapper">
      <div className="container-fluid">
        <select onChange={selectHandle}>
          <option>All</option>
          {brandData.map((curlem, index) => {
            return (
              <option key={index} value={curlem}>
                {curlem}
              </option>
            );
          })}
        </select>

        <div>
          {items
            .filter((sitem) => {
              return item === "" ? sitem : sitem.name.includes(item);
            })
            .map((item) => {
              return <Products item={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
