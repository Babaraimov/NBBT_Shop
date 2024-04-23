import { BiSolidArrowToBottom } from "react-icons/bi";
import miniboximg1 from "./images/Frame 4.png";
import miniboximg2 from "./images/Frame 7 (1).png";
import { Product } from "./types";

const NewPart = ({ product }: { product: Product }) => {
  return (
    <div className="NewBox">
      <img className="NewBoxImg" src={product.imageSrc} alt="" />
      <p>{product.productName}</p>
      <b>{product.productDetails}</b>
      <h4>{product.name}</h4>
      <div className="insideBox">
        <div className="miniboxinside">
          <p>
            Цена
            <button>
              <BiSolidArrowToBottom />
              13%
            </button>
          </p>
          <b>{product.price}₽</b>
        </div>
        <div className="miniboximg">
          <img src={miniboximg1} alt="" />
          <img src={miniboximg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewPart;
