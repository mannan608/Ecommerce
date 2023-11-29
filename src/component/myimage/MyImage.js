import { useState } from "react";
import { useEffect } from "react";

const MyImage = ({ imgs }) => {
  const [mainImage, setMainImage] = useState(null);
  // console.log(mainImage);
  console.log(mainImage);

  useEffect(() => {
    if (imgs?.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);

  return (
    <div class="product-image d-flex gap-4">
      <div class="thumbnail-product-img d-flex flex-column ">
        {imgs?.map((curlem, index) => {
          return (
            <div class="gallery-image">
              <img
                src={curlem?.url}
                alt={curlem?.filename}
                key={index}
                onClick={() => setMainImage(curlem)}
              />
            </div>
          );
        })}
      </div>
      <div class="product-feature-img">
        <img src={mainImage?.url} alt={mainImage?.filename} />
      </div>
    </div>
  );
};

export default MyImage;
