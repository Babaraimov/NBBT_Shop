import React, { useState } from "react";

import img1 from "../../assets/hero.imgs/1.svg";
import img2 from "../../assets/hero.imgs/2.svg";
import img3 from "../../assets/hero.imgs/3.svg";
import img4 from "../../assets/hero.imgs/4.svg";
import img5 from "../../assets/hero.imgs/5.svg";
import img6 from "../../assets/hero.imgs/6.svg";
import img7 from "../../assets/hero.imgs/7.svg";
import img8 from "../../assets/hero.imgs/8.svg";
import "./style.css";
// import img9 from "../../assets/hero.imgs/delete.svg";
import img10 from "../../assets/hero.imgs/like.svg";
import img11 from "../../assets/hero.imgs/static.svg";
import img12 from "../../assets/hero.imgs/heart-solid.svg";
import ProductsList from "./swaiperProduts";
import SwaiperBlock from "./swaiperBlock";
function Product() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLike, setLike] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleLikeClick = () => {
    setLike(!isLike);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="hero">
            <h1 className="hero__title">Лучший выбор</h1>
            <div className="hero__block">
              <div className="block">
                <img src={img1} alt="" />
                <p className="block__text">Смартфоны</p>
              </div>
              <div className="block">
                <img src={img2} alt="" />
                <p className="block__text">Ноутбуки</p>
              </div>
              <div className="block">
                <img src={img3} alt="" />
                <p className="block__text">Планшеты</p>
              </div>
              <div className="block">
                <img src={img4} alt="" />
                <p className="block__text">Умные часы</p>
              </div>
              <div className="block">
                <img src={img5} alt="" />
                <p className="block__text">Игровые приставки</p>
              </div>
              <div className="block">
                <img src={img6} alt="" />
                <p className="block__text">Наушники</p>
              </div>
              <div className="block">
                <img src={img7} alt="" />
                <p className="block__text">
                  Портативные <br />
                  колонки
                </p>
              </div>
              <div className="block">
                <img src={img8} alt="" />
                <p className="block__text">Аксесуары</p>
              </div>
            </div>
            <div className="hero__info">
              <div className="info">
                Дизайн
                <button className="info-delete">X</button>
              </div>

              <div className="info">
                Портативность
                <button className="info-delete">X</button>
              </div>
              <div className="info2">Камера</div>
              <div className="info2">Ответ</div>
              <div className="info2">Батарея</div>
            </div>
            <div className="hero__products">
              <div className="hero__product">
                <div className="product">
                  <div className="product__header">
                    <p className="product__header-text">Портативные колонки</p>
                    <h1 className="product__header-tittle">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                  </div>
                  <div className="product__btns">
                    <button
                      className="btn-right2"
                      onClick={handleFavoriteClick}
                    >
                      <img
                        src={isFavorite ? img12 : img10}
                        alt=""
                        className={isFavorite ? "heart-red" : "heart-white"}
                      />
                      ⠀
                    </button>
                    <button className="btn-left2">
                      <img src={img11} alt="" />
                    </button>
                  </div>
                </div>
                <div className="product__iphone">
                  <img src={img1} alt="" />
                  <div className="iphone__group">
                    <div className="iphone__group-text">
                      <p>Дизайн</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Батарея</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Камера</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Ответ</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Портативность</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__product">
                <div className="product">
                  <div className="product__header">
                    <p className="product__header-text">Портативные колонки</p>
                    <h1 className="product__header-tittle">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                  </div>
                  <div className="product__btns">
                    <button
                      className="btn-right2"
                      onClick={handleFavoriteClick}
                    >
                      <img
                        src={isFavorite ? img12 : img10}
                        alt=""
                        className={isFavorite ? "heart-red" : "heart-white"}
                      />
                      ⠀
                    </button>
                    <button className="btn-left2">
                      <img src={img11} alt="" />
                    </button>
                  </div>
                </div>
                <div className="product__iphone">
                  <img src={img1} alt="" />
                  <div className="iphone__group">
                    <div className="iphone__group-text">
                      <p>Дизайн</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Батарея</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Камера</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Ответ</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Портативность</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__product">
                <div className="product">
                  <div className="product__header">
                    <p className="product__header-text">Портативные колонки</p>
                    <h1 className="product__header-tittle">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                  </div>
                  <div className="product__btns">
                    <button className="btn-right2" onClick={handleLikeClick}>
                      <img
                        src={isFavorite ? img12 : img10}
                        alt=""
                        className={isFavorite ? "heart-red" : "heart-white"}
                      />
                      ⠀
                    </button>
                    <button className="btn-left2">
                      <img src={img11} alt="" />
                    </button>
                  </div>
                </div>
                <div className="product__iphone">
                  <img src={img1} alt="" />
                  <div className="iphone__group">
                    <div className="iphone__group-text">
                      <p>Дизайн</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Батарея</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Камера</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Ответ</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Портативность</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__product">
                <div className="product">
                  <div className="product__header">
                    <p className="product__header-text">Портативные колонки</p>
                    <h1 className="product__header-tittle">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                  </div>
                  <div className="product__btns">
                    <button
                      className="btn-right2"
                      onClick={handleFavoriteClick}
                    >
                      <img
                        src={isFavorite ? img12 : img10}
                        alt=""
                        className={isFavorite ? "heart-red" : "heart-white"}
                      />
                      ⠀
                    </button>
                    <button className="btn-left2">
                      <img src={img11} alt="" />
                    </button>
                  </div>
                </div>
                <div className="product__iphone">
                  <img src={img1} alt="" />
                  <div className="iphone__group">
                    <div className="iphone__group-text">
                      <p>Дизайн</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Батарея</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Камера</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Ответ</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p>Портативность</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swaiper-group">
              <SwaiperBlock />
              <ProductsList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;
