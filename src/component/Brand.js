// import { useContext } from "react";
// import { Link } from "react-router-dom";

// import { ProductContext } from "../context/ProductContext";

const Brand = ({ brandData, brandFilterItem }) => {
  //   const { items } = useContext(ProductContext);
  const handleClick = (e) => {
    console.log(e.target.value);
    brandFilterItem(e.target.value);
  };
  return (
    <select onChange={(e) => handleClick(e)}>
      <option>All</option>
      {brandData.map((curlem, index) => {
        return (
          <option key={index} value={curlem}>
            {curlem}
          </option>
        );
      })}
    </select>
    // <div className="nav">
    //   <li class="nav-item" type="button" onClick={() => setItem(items)}>
    //     <Link class="nav-link"> All </Link>
    //   </li>
    //   {brandData.map((curlem, index) => {
    //     return (
    //       <li
    //         class="nav-item"
    //         key={index}
    //         type="button"
    //         onClick={() => brandFilterItem(curlem)}
    //       >
    //         <Link class="nav-link"> {curlem} </Link>
    //       </li>
    //     );
    //   })}
    // </div>
  );
};

export default Brand;
