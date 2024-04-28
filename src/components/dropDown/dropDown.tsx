import { useRef, useState } from "react";
import arrow from "../../assets/headerImg/Arrow - Down 3.svg";
import arrowTop from "../../assets/headerImg/Polygon 1 (1).svg";
import vectorRigth from "../../assets/headerImg/vectorRigth.svg";
import "./dropDown.css";

// interface Drop {
//   defaultValue: string;
// }

const DropDown: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const menus = [
    "Смартфоны",
    "Ноутбуки",
    "Планшеты",
    "Умные часы",
    "Игровые приставки",
    "Наушники",
    "Портативные колонки",
    "Мониторы",
    "Сканеры и принтеры",
    "Планшеты и электронные книги",
    "Корпуса и блоки питания",
    "Аксесуары",
  ];

  const menuRef = useRef();
  const btnRef = useRef();

  window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target !== menuRef.current && e.target !== btnRef.current) {
      setOpen(false);
    }
  });

  return (
    <>
      <div className="dropDown">
        <button
          ref={btnRef}
          className="btnMenu"
          onClick={() => setOpen(!isOpen)}
        >
          Каталог товаров
          {isOpen ? (
            <img className="imgArrowTop" src={arrowTop} alt="" />
          ) : (
            <img src={arrow} className="imgArrowBottom" alt="" />
          )}
        </button>
        {isOpen && (
          <div className="menu">
            <h1 className="menuProductsName">Каталог товаров</h1>
            <nav ref={menuRef}>
              <ul className="menu__list">
                {menus.map((menu) => (
                  <li onClick={() => setOpen(false)} className="borderBgOrange">
                    <span className="menu__item">
                      {menu}
                      <img src={vectorRigth} className="vectorRigth" alt="" />
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
