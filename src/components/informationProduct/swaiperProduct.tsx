import React from "react";
// import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import img13 from "../../assets/information/svg/eldorado.svg";
import img14 from "../../assets/information/svg/sitilink.svg";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
SwiperCore.use([Navigation]);
interface ChartBlock {
  moneyGroupText: string;
  chartText: string;
  imgSrc: string;
}

interface SwiperSlide {
  slideData: ChartBlock[];
}

interface SwiperProps {
  slides: SwiperSlide[];
}

interface ChartBlockProps {
  moneyGroupText: string;
  chartText: string;
  imgSrc: string;
}

const ChartBlock: React.FC<ChartBlockProps> = ({
  moneyGroupText,
  chartText,
  imgSrc,
}) => {
  return (
    <div className="chart-block">
      <div className="chart-block-header">
        <p className="money-group-text">{moneyGroupText}</p>
        <img src={imgSrc} alt="" />
      </div>
      <p className="chart-text">{chartText}</p>
      <img src={imgSrc} alt="" />
      <div className="chart-footer">
        <p className="chart-footer-text">Перейти в магазин</p>
        <button className="chart-btn">
          <img src={imgSrc} alt="" />
        </button>
      </div>
    </div>
  );
};

const ChartSlider: React.FC<SwiperProps> = ({ slides }) => {
  return (
    <Swiper navigation={true}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.slideData.map((block, idx) => (
            <ChartBlock
              key={idx}
              moneyGroupText={block.moneyGroupText}
              chartText={block.chartText}
              imgSrc={block.imgSrc}
            />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ChartComponent: React.FC = () => {
  const slides: SwiperSlide[] = [
    {
      slideData: [
        {
          moneyGroupText: "83 999 ₽",
          chartText: "Доставка бесплатная",
          imgSrc: img13,
        },
      ],
    },
    {
      slideData: [
        {
          moneyGroupText: "83 999 ₽",
          chartText: "Доставка бесплатная",
          imgSrc: img14,
        },
        // Другие данные для слайда 1
      ],
    },
    {
      slideData: [
        {
          moneyGroupText: "83 999 ₽",
          chartText: "Доставка бесплатная",
          imgSrc: img13,
        },
        // Другие данные для слайда 1
      ],
    },
    {
      slideData: [
        {
          moneyGroupText: "83 999 ₽",
          chartText: "Доставка бесплатная",
          imgSrc: img14,
        },
        // Другие данные для слайда 1
      ],
    },
  ];

  return <ChartSlider slides={slides} />;
};

export default ChartComponent;
