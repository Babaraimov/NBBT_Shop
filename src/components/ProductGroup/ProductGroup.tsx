import React, { useState } from "react";
import "./ProductGroup.css";
import { RxExternalLink } from "react-icons/rx";
import Phone from "./Phone";
import { RxSwitch } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";
import imgProduct3 from "./images/arrow-3.png";
import { HiAdjustments } from "react-icons/hi";

function ProductGroup() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="containerGroup">
      <div className="textGroup">
        <a style={{ color: "gray" }}>Главная /</a>
        <span style={{ color: "black" }}> Смартфоны</span>
      </div>
      <div className="GroupText">
        <h1>Смартфоны</h1>
        <p>
          Все что нужно знать при выборе
          <button>
            <span>Смартфона</span> <RxExternalLink />
          </button>
        </p>
      </div>
      <div className="adaptationBox">
        <img src={imgProduct3} alt="" />
        <button>Сортировка</button>
        <div className="adaptationDiv"></div>
        <button>
          {/* {" "} */}
          <HiAdjustments
            style={{ fontSize: "30px", marginLeft: "10px", marginTop: "10px" }}
          />
        </button>
        <button>Фильтры</button>
      </div>
      <div className="bigGroup">
        <div className="BGBox_1">
          <h1>Качественные характеристики</h1>
          <div className="BGBox_mini">
            <div className="GroupBox1">
              <b>Цена</b>
              <div className="GroupBox1_button">
                <button>
                  <span style={{ color: "gray" }}>от </span>12 511
                </button>
                <button>
                  <span style={{ color: "gray" }}>До </span>99 511
                </button>
              </div>
              <b>Диапазон</b>
              <ul>
                <li className="GroupBox1li1">0 - 10 000 ₽</li>
                <li className="GroupBox1li2">10 000 - 20 000 ₽</li>
                <li className="GroupBox1li2">20 000 - 30 000 ₽</li>
                <li className="GroupBox1li2"> 30 000 ₽</li>
              </ul>
            </div>
            <div className="">
              <b>Батарея</b>
              <ul>
                {/* {Array.from({ length: 6 }, (_, index) => (
                  <li key={index}>Text label</li>
                ))} */}
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
              </ul>
            </div>
            <div className="GroupBox2">
              <b>Камера</b>
              <ul>
                {/* {Array.from({ length: 6 }, (_, index) => (
                  <li key={index}>Text label</li>
                ))} */}
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="BGBox_2">
          <div className="GroupBoxText">
            <h1>Дополнительные фильтры</h1>
            <button>
              Все фильтры <SlArrowRight />
            </button>
          </div>
          <div className="BGBox_mini">
            {/* {Array.from({ length: 2 }, (_, index) => ( */}
            <div
              className="GroupBox2"
              // key={index}
            >
              {/* <b>{index === 0 ? "Ответ" : "Портативность"}</b> */}
              <ul>
                {/* {Array.from({ length: 6 }, (_, index) => (
                    <li key={index}>Text label</li>
                  ))} */}
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li1">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Text label</li>
                <li className="GroupBox2Li12">Textlabel </li>
              </ul>
            </div>
            <div className=" GroupBox2">
              <ul>
                <li className="GroupBox2Li1">Textlabel </li>
                <li className="GroupBox2Li1">Textlabel </li>
                <li className="GroupBox2Li12">Textlabel </li>
                <li className="GroupBox2Li12">Textlabel </li>
                <li className="GroupBox2Li12">Textlabel </li>
                <li className="GroupBox2Li12">Textlabel </li>
              </ul>
            </div>
            {/* ))} */}
            <div className="GroupBox3">
              <h3 className="GroupBox3h3">4G (LTE)</h3>
              <button>
                {/* {" "} */}
                <RxSwitch />
              </button>
              Есть
            </div>
          </div>
        </div>
      </div>
      <div className="Dropdown">
        <select
          id="dropdown"
          title="Выберите опцию"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="">Select an option</option>
          {Array.from({ length: 3 }, (_, index) => (
            <option key={index} value={`option${index + 1}`}>
              Option {index + 1}
            </option>
          ))}
        </select>
      </div>
      <Phone />
    </div>
  );
}

export default ProductGroup;
