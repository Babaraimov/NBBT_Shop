import { LuChevronRight } from "react-icons/lu";
import { Product } from "./types";
import NewImg1 from "./images/2272131 1.png";
import NewImg2 from "./images/2272131 1 (2).png";
import NewImg3 from "./images/2272131 1 (3).png";
import NewImg4 from "./images/2272131 1 (4).png";
import NewImg5 from "./images/2272131 1 (6).png";
import NewImg6 from "./images/2272131 1 (7).png";
import NewImg7 from "./images/2272131 1 (8).png";
import NewImg8 from "./images/2272131 1 (9).png";
import NewImg9 from "./images/2272131 1 (10).png";
import NewPart from "./NewPart";

const MainProduct: React.FC = () => {
  const products: Product[] = [
    {
      imageSrc: NewImg1,
      productName: "Умные часы",
      productDetails: "",
      price: 114099,
      name: "Apple iPhone 13 Pro  Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg2,
      productName: "Наушники",
      price: 114099,
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
      productDetails: "",
    },
    {
      imageSrc: NewImg3,
      productName: "Умные часы",
      price: 114099,
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",

      productDetails: "",
    },
    {
      imageSrc: NewImg4,
      productName: "Смартфоны",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg5,
      productName: "Планшеты",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },

    {
      imageSrc: NewImg6,
      productName: "Смартфоны",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg7,
      productName: "Аксесуары",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg8,
      productName: "Ноутбуки",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg9,
      productName: "Портативные колонки ",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
    {
      imageSrc: NewImg4,
      productName: "Смартфоны",
      price: 114099,
      productDetails: "",
      name: "Apple iPhone 13 Pro Max 256 ГБ серый",
    },
  ];

  return (
    <>
      <section className="new-container">
        <div className="newText">
          <b>Новинки</b>
          <button>
            К новинкам
            <LuChevronRight />
          </button>
        </div>
        <div className="NewContainer">
          {products.map((product, index) => (
            <NewPart key={index} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MainProduct;
