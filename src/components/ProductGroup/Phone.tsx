// import React from 'react';
import imgPhone from "./images/2272131 1 (12).png";
import imgPhone1 from "./images/Frame 29.png";
import imgPhone3 from "./images/Rating.png";
import { SlArrowDown } from "react-icons/sl";

const Phone = () => {
  const phoneBoxItems = Array.from({ length: 10 }, (_, index) => (
    <div className="phoneBox" key={index}>
      <img className="imgPhone" src={imgPhone} alt="" />
      <div className="phonemini">
        <div className="phoneminiB">
          <div style={{ display: "flex" }}>
            <button className="phoneminiB-button">4.4 Оценка экспертов</button>
            <button className="phoneminiB-button2">
              0.4 <img src={imgPhone3} alt="" /> 447 Отзывов
            </button>
          </div>
          <img className="phoneminiB-img" src={imgPhone1} alt="" />
        </div>
        <div>
          <div className="phoneminiText">
            <h3>Apple iPhone 13 Pro Max 256 ГБ серый</h3>
            <button>
              <SlArrowDown />
              13% <span>78 999 ₽</span>
            </button>
          </div>
          <div className="phoneUl">
            <ul>
              <li className="phoneUl">
                Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
              </li>
              <li className="phoneUl">
                6.1 inches, 1170 x 2532 px Display with Small Notch
              </li>
              <li className="phoneUl">
                Bionic A15, Hexa Core, 3.22 GHz Processor
              </li>
              <li className="phoneUl">
                12 MP + 12 MP Dual Rear & 12 MP Front Camera
              </li>
            </ul>
            <ul>
              <li className="phoneUl">4 GB RAM, 128 GB inbuilt</li>
              <li className="phoneUlli">Memory Card Not Supported</li>
              <li className="phoneUl">3240 mAh Battery with Fast Charging</li>
              <li className="phoneUl">iOS v15</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="hero__product">
          <div className="product__iphone">
            <div className="iphone__group">
              <div className="iphone__group-text">
                <p className="iphone-text">Дизайн</p>
                <div className="linia">
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div2"></div>
                </div>
              </div>
              <div className="iphone__group-text">
                <p className="iphone-text">Батарея</p>
                <div className="linia">
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div2"></div>
                  <div className="div2"></div>
                  <div className="div2"></div>
                </div>
              </div>
              <div className="iphone__group-text">
                <p className="iphone-text">Камера</p>
                <div className="linia">
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                </div>
              </div>
              <div className="iphone__group-text">
                <p className="iphone-text">Ответ</p>
                <div className="linia">
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                  <div className="div1"></div>
                </div>
              </div>
              <div className="iphone__group-text">
                <p className="iphone-text">Портативность</p>
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
    </div>
  ));

  return (
    <div className="phoneContainer">
      {phoneBoxItems}
      <div className="phoneFooterContainer">
        <div className="phoneFooter">
          <p>Показ 1 – 10 из 1286</p>
        </div>
        <div className="phoneFooterDiv">
          <a href="">Назад</a>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>...</button>
          <button>51</button>
          <a href="">Вперед</a>
        </div>
      </div>
    </div>
  );
};

export default Phone;
