import "./header.css";
import behoof from "../../assets/headerImg/behoof_logo.svg";
import heart from "../../assets/headerImg/heart.svg";
import chart from "../../assets/headerImg/chart.svg";
import frame from "../../assets/headerImg/frame.svg";
import search from "../../assets/headerImg/search-normal.svg";
import rigt from "../../assets/headerImg/Arrow - Right 2.svg";
import imgIphone from "../../assets/headerImg/image 17.svg";
import { NavLink } from "react-router-dom";
import DropDown from "../dropDown/dropDown";

function Header() {
  return (
    <div>
      <div className="headers">
        <div className="container">
          <div className="header">
            <div className="headerTopFixed">
              <div className="headerTop">
                <div className="headerRigth">
                  <NavLink className="behoofNav" to="/">
                    <img className="imgBehoof" src={behoof} alt="" />
                    <h1 className="behoof">Behoof</h1>
                  </NavLink>
                  <h5 className="miniInfo">
                    Лучшие цены <br /> в интернет-магазине
                  </h5>
                </div>
                <div className="headerCenter">
                  <form className="btnInpForm" action="">
                    <DropDown defaultValue="Каталог товаров" />
                    <img className="imgSeacrh" src={search} alt="" />
                    <input
                      className="inpSearch"
                      type="text"
                      placeholder="Поиск товаров"
                    />
                  </form>
                </div>
                <NavLink className="navBottom" to="/">
                  <img className="hrtFrmCart" src={heart} alt="" />
                  <img className="hrtFrmCart" src={chart} alt="" />
                  <img className="hrtFrmCart" src={frame} alt="" />
                </NavLink>
              </div>
            </div>
            <div className="headerBottom">
              <div className="headerBottomLeft">
                <h1 className="headerBtmInfo">
                  <span>1.8 млн</span> товаров в <span>2272 магазинах</span>{" "}
                  <br /> найди, сравни, выберай!
                </h1>
                <button className="headerBtmBtn">
                  Перейти к качтегориям <img src={rigt} alt="" />
                </button>
              </div>
              <div className="headerBottomRigth">
                <h1 className="headerBtmInfo">
                  <span>Топ-10</span> смартфонов <br />
                  2023 года
                </h1>
                <button className="headerBtmBtnRigth">
                  Смотреть <img src={rigt} alt="" />
                </button>
                <img className="headerBtmIphone" src={imgIphone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btnnn"></button>
    </div>
  );
}

export default Header;
