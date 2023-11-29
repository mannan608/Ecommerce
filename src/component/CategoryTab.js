import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context/ProductContext";

const CategoryTab = ({ categoryData, setItem, CategoryFilterItem }) => {
  const { items } = useContext(ProductContext);

  return (
    <div className="nav">
      <li class="nav-item" type="button" onClick={() => setItem(items)}>
        <Link class="nav-link"> All </Link>
      </li>
      {categoryData.map((curlem, index) => {
        return (
          <li
            class="nav-item"
            key={index}
            type="button"
            onClick={() => CategoryFilterItem(curlem)}
          >
            <Link class="nav-link"> {curlem} </Link>
          </li>
        );
      })}
    </div>
  );
};

export default CategoryTab;
