import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
// import { Link } from "react-router-dom";
import CategoryTab from "./CategoryTab";

const FilterSection = () => {
  const { items } = useContext(ProductContext);
  const [item, setItem] = useState(items);

  const categoryData = [
    "All",
    ...new Set(items.map((value) => value.category)),
  ];

  const FilterItem = (cate) => {
    const newItem = items.filter((newval) => newval.category === cate);
    setItem(newItem);
  };
  // const getUniqData = (data, property) => {
  //   let newVal = data.map((curlem) => {
  //     return curlem[property];
  //   });
  //   newVal = ["All", ...new Set(newVal)];
  // };
  // const categoryOnlyData = getUniqData(items);

  // console.log(categoryOnlyData);

  return (
    <div>
      <div className="category-wise-filter">
        <h5>Explore Category</h5>
        <div className="tab-menus">
          <CategoryTab
            categoryData={categoryData}
            FilterItem={FilterItem}
            setItem={setItem}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
