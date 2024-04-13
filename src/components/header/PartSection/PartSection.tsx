// import React from "react";
import img1 from "./images/Store=Google Play, Color=Black, Language=Russian.png";
import img2 from "./images/Store=App Store, Color=Black, Language=Russian (2).png";
import img3 from "./images/iPhone 14 Pro Space Black Mockup (1).png";
import NewMain from "./NewMain";
import "./PartSection.css";

const PartSection = () => {
  return (
    <div className="mainDiv">
      <section id="section">
        <div className="sectionPart">
          <h2>
            Наша цель - создать фантастический <br /> сервис для всех
            потребителей
          </h2>
          <div id="sectionPart_box">
            {[1, 30, 300, 8].map((number, index) => (
              <div className="sectionPart_box" key={index}>
                <h1>{number}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus risus
                  nunc a pharetra viverra enim <br /> nunc.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div id="containetSection">
          <div className="SectionPart">
            <h1>
              <span className="redText">Экономьте</span> свое время <br />и
              получайте <span className="redText">максимум </span> <br /> от
              ежедневных покупок
            </h1>
            <div className="boxmini">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {[1, 2].map((_, index) => (
                <div className="swiper-slide" key={index}>
                  <img
                    className={`SectionPart-img${index + 1}`}
                    src={img3}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <NewMain />
    </div>
  );
};

export default PartSection;
