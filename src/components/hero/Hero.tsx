import "./hero.css";
import chec from "../../assets/hero/Check(1).png";
import chec1 from "../../assets/hero/addd.png";
import iphome from "../../assets/hero/iphome.png";
import first from "../../assets/hero/Frame 4.png";
import star from "../../assets/hero/Star.png";
import star1 from "../../assets/hero/star1.png";
import trash from "../../assets/hero/trash.png";

function Hero() {
  return (
    <>
      <>
        <div className="NewBox">
          <div className="container">
            <div className="text">
              <h1>Сравнение товаров</h1>
              <p>
                <img src={trash} alt="" /> Удалить все списки
              </p>
            </div>
            <div className="NewBox1">
              <div className="NewBox2">
                <img src={iphome} alt="" />
                <img className="img" src={first} alt="" />
                <p>Смартфоны</p>
                <b>Apple iPhone 13 Pro Max 256 ГБ серый</b>
                <div className="insideBox">
                  <p>Цена</p>
                  <div className="miniboxinside">
                    <b>114 099 ₽</b>
                  </div>
                </div>
              </div>
              <div className="NewBox2">
                <img className="NewBoxImg" src={iphome} alt="" />
                <img className="img" src={first} alt="" />

                <p>Смартфоны</p>
                <b>Apple iPhone 13 Pro Max 256 ГБ серый</b>
                <div className="insideBox">
                  <p>Цена</p>
                  <div className="miniboxinside">
                    <b>114 099 ₽</b>
                  </div>
                </div>
              </div>
              <div className="NewBox2">
                <img className="NewBoxImg" src={iphome} alt="" />
                <img className="img" src={first} alt="" />
                
                <p>Смартфоны</p>
                <b>Apple iPhone 13 Pro Max 256 ГБ серый</b>
                <div className="insideBox">
                  <p>Цена</p>
                  <div className="miniboxinside">
                    <b>114 099 ₽</b>
                  </div>
                </div>
              </div>
              <div className="NewBox2">
                <img className="NewBoxImg" src={iphome} alt="" />
                <img className="img" src={first} alt="" />
                
                <p>Смартфоны</p>
                <b>Apple iPhone 13 Pro Max 256 ГБ серый</b>
                <div className="insideBox">
                  <p>Цена</p>
                  <div className="miniboxinside">
                    <b>114 099 ₽</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="container">
            <div className="hero-text">
              <div>
                <h4>Сравнение товаров</h4>
              </div>
              <p>Рейтинг</p>
              <div className="hero__n">
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star1} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star1} alt="" />
                  <img src={star1} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star1} alt="" />
                </div>
              </div>
            </div>
            <div className="hero-text">
              <p>Модель</p>
              <div className="hero__n">
                <h5>Apple iPhone 13 Pro Max</h5>
                <h5>Apple iPhone 13 Pro</h5>
                <h5>Apple iPhone 13</h5>
                <h5>Apple iPhone 12</h5>
              </div>
            </div>
            <div className="hero-text">
              <p>Год релиза</p>
              <div className="hero__n">
                <h5>2021</h5>
                <h5>2021</h5>
                <h5>2021</h5>
                <h5>2021</h5>
              </div>
            </div>
            <div className="hero-text">
              <p>Количество ядер</p>
              <div className="hero__n">
                <h5>12</h5>
                <h5>8</h5>
                <h5>6</h5>
                <h5>6</h5>
              </div>
            </div>
            <div className="hero-text">
              <p>Поддержка сетей 4G (LTE)</p>
              <div className="hero__n">
                <img src={chec} alt="" />
                <img src={chec} alt="" />
                <img src={chec1} alt="" />
                <img src={chec} alt="" />
              </div>
            </div>
            <div className="hero-text">
              <p>Объем встроенной памяти</p>
              <div className="hero__n">
                <h5>128 гб</h5>
                <h5>64 гб</h5>
                <h5>64 гб</h5>
                <h5>64 гб</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Hero;
