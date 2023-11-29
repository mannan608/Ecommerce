import { useState } from "react";

export const ColorAttribute = ({ product }) => {
  const { colors } = product;
  const [Color, setColors] = useState(colors[0]);

  return (
    <div>
      <div className="d-flex gap-3 align-items-center">
        Colors
        {colors.map((curColor, index) => {
          return (
            <button
              className={Color === curColor ? "colorBtn active" : "colorBtn"}
              key={index}
              style={{ background: curColor }}
              onClick={() => setColors(curColor)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

// export default ColorAttribute;
