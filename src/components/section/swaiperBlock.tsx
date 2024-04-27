import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import img1 from "../../assets/hero.imgs/1.svg";
import img2 from "../../assets/hero.imgs/2.svg";
import img3 from "../../assets/hero.imgs/3.svg";
import img4 from "../../assets/hero.imgs/4.svg";
import img5 from "../../assets/hero.imgs/5.svg";
import img6 from "../../assets/hero.imgs/6.svg";
import img7 from "../../assets/hero.imgs/7.svg";
import img8 from "../../assets/hero.imgs/8.svg";
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper.min.css" />;

SwiperCore.use([Navigation]);

const SwaiperBlock: React.FC = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3} navigation>
      <SwiperSlide>
        <div className="block">
          <img src={img1} alt="" />
          <p className="block__text">Смартфоны</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img2} alt="" />
          <p className="block__text">Ноутбуки</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img3} alt="" />
          <p className="block__text">Планшеты</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img4} alt="" />
          <p className="block__text">Умные часы</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img5} alt="" />
          <p className="block__text">Игровые приставки</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img6} alt="" />
          <p className="block__text">Наушники</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img7} alt="" />
          <p className="block__text">
            Портативные <br />
            колонки
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="block">
          <img src={img8} alt="" />
          <p className="block__text">Аксесуары</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwaiperBlock;
