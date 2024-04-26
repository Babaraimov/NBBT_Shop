import "./header.css";
import behoof from "../../assets/headerImg/behoof_logo.svg";
import heart from "../../assets/headerImg/heart.svg";
import chart from "../../assets/headerImg/chart.svg";
import frame from "../../assets/headerImg/frame.svg";
import search from "../../assets/headerImg/search-normal.svg";
import { NavLink } from "react-router-dom";
import DropDown from "../dropDown/dropDown";
import HeaderBottom from "./headerBottom";

function Header1() {
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
                <div className="navBottom">
                  <NavLink to="/">
                    <img className="hrtFrmCart" src={heart} alt="" />
                    <img className="hrtFrmCart" src={chart} alt="" />
                    <img className="hrtFrmCart" src={frame} alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
            <HeaderBottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
