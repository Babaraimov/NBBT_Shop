import "./header.css";
import rigt from "../../assets/headerImg/Arrow - Right 2.svg";
import imgIphone from "../../assets/headerImg/newImage 17.svg";

function HeaderBottom() {
  return (
    <div>
      <div className="headerBottom">
        <div className="headerBottomLeft">
          <h1 className="headerBtmInfo">
            <span>1.8 млн</span> товаров в <span>2272 магазинах</span> <br />{" "}
            найди, сравни, выберай!
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
  );
}

export default HeaderBottom;
