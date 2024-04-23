import React from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import "swiper/components/navigation/navigation.min.css";
import img1 from "../../assets/hero.imgs/1.svg";
import img10 from "../../assets/hero.imgs/like.svg";
import img11 from "../../assets/hero.imgs/static.svg";

SwiperCore.use([Navigation]);

const ProductsList: React.FC = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} navigation>
      <SwiperSlide>
        <div className="hero__products2">
          <div className="hero__product">
            <div className="hero__product">
              <div className="product">
                <div className="product__header">
                  <p className="product__header-text">Портативные колонки</p>
                  <h1 className="product__header-tittle">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                </div>
                <div className="product__btns">
                  <button>
                    <img src={img10} alt="" />
                  </button>
                  <button>
                    <img src={img11} alt="" />
                  </button>
                </div>
              </div>
              <div className="product__iphone">
                <img src={img1} alt="" />
                <div className="iphone__group">
                  <div className="iphone__group-text">
                    <p>Дизайн</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Батарея</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Камера</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Ответ</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Портативность</p>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero__products2">
          <div className="hero__product">
            <div className="hero__product">
              <div className="product">
                <div className="product__header">
                  <p className="product__header-text">Портативные колонки</p>
                  <h1 className="product__header-tittle">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                </div>
                <div className="product__btns">
                  <button>
                    <img src={img10} alt="" />
                  </button>
                  <button>
                    <img src={img11} alt="" />
                  </button>
                </div>
              </div>
              <div className="product__iphone">
                <img src={img1} alt="" />
                <div className="iphone__group">
                  <div className="iphone__group-text">
                    <p>Дизайн</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Батарея</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Камера</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Ответ</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Портативность</p>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero__products2">
          <div className="hero__product">
            <div className="hero__product">
              <div className="product">
                <div className="product__header">
                  <p className="product__header-text">Портативные колонки</p>
                  <h1 className="product__header-tittle">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                </div>
                <div className="product__btns">
                  <button>
                    <img src={img10} alt="" />
                  </button>
                  <button>
                    <img src={img11} alt="" />
                  </button>
                </div>
              </div>
              <div className="product__iphone">
                <img src={img1} alt="" />
                <div className="iphone__group">
                  <div className="iphone__group-text">
                    <p>Дизайн</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Батарея</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Камера</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Ответ</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Портативность</p>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero__products2">
          <div className="hero__product">
            <div className="hero__product">
              <div className="product">
                <div className="product__header">
                  <p className="product__header-text">Портативные колонки</p>
                  <h1 className="product__header-tittle">
                    Apple iPhone 13 Pro Max 256 ГБ серый
                  </h1>
                </div>
                <div className="product__btns">
                  <button>
                    <img src={img10} alt="" />
                  </button>
                  <button>
                    <img src={img11} alt="" />
                  </button>
                </div>
              </div>
              <div className="product__iphone">
                <img src={img1} alt="" />
                <div className="iphone__group">
                  <div className="iphone__group-text">
                    <p>Дизайн</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Батарея</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Камера</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Ответ</p>
                    <div className="linia">
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div1"></div>
                      <div className="div2"></div>
                    </div>
                  </div>
                  <div className="iphone__group-text">
                    <p>Портативность</p>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductsList;
