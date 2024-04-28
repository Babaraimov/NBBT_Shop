import "./header.css";
import rigt from "../../assets/headerImg/Arrow - Right 2.svg";
import imgIphone from "../../assets/headerImg/newImage 17.svg";

function HeaderBottom() {
  return (
    <div>
      <div className="headerBottom">
        <div className="maxWidthBtmLeft">
          <div className="headerBottomLeft">
            <h1 className="headerinfoTop headerBtmInfo">
              <span>1.8 млн</span> товаров в <span>2272 </span> магазинах <br />{" "}
              найди, сравни, выберай!
            </h1>
            <button className="headerBtmBtn">
              Перейти к качтегориям <img src={rigt} alt="" />
            </button>
          </div>
        </div>

        <div className="headerBottomRigth">
          <div className="headerBottomRigthInfo">
            <h1 className="headerBtmInfoBottom headerBtmInfo">
              <span>Топ-10</span> смартфонов <br /> 2023 года
            </h1>
            <button className="headerBtmBtnRigth">
              Смотреть <img src={rigt} alt="" />
            </button>
            <div className="headerBtmIphone">
              <img className="imgIphone" src={imgIphone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
