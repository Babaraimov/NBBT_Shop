import React from "react";
import "./style.css";
import img1 from "../../assets/information/svg/1 .svg";
import img2 from "../../assets/information/svg/Rating.svg";
import img3 from "../../assets/information/svg/crown.svg";
import img4 from "../../assets/information/svg/reStore.svg";
import img5 from "../../assets/information/svg/9.svg";
import img6 from "../../assets/information/svg/10.svg";
import img7 from "../../assets/information/svg/11.svg";
import img8 from "../../assets/information/svg/12.svg";
import img9 from "../../assets/information/svg/chart.svg";
import img10 from "../../assets/information/svg/heart.svg";
import img11 from "../../assets/information/svg/grafic1.svg";
import img12 from "../../assets/information/svg/price.svg";
import img13 from "../../assets/information/svg/eldorado.svg";
import img14 from "../../assets/information/svg/sitilink.svg";
import img15 from "../../assets/information/svg/Chart1.svg";
import img16 from "../../assets/information/svg/Chart2.svg";
import img17 from "../../assets/information/svg/next.svg";
import img18 from "../../assets/information/svg/Invisible.svg";
import img19 from "../../assets/information/svg/star-otzyv.svg";
import ChartComponent from "./swaiperProduct";
// import { useHistory } from "react-router-dom";
function Information() {
  // const history = useHistory();
  const handleCompareClick = () => {};

  const handleFavoriteClick = () => {};

  // const handleImageClick = () => {
  //   history.push("/other-page");
  // };

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="container">
            <div className="wrap-block">
              <div className="Products">
                <div className="product__block">
                  <div className="iphone-block">
                    <img
                      className="iphone-13"
                      src={img1}
                      alt=""
                      // onClick={handleImageClick}
                    />
                    <div className="iphones-block">
                      <img className="iphones" src={img1} alt="" />
                      <img className="iphones" src={img1} alt="" />
                      <img className="iphones" src={img1} alt="" />
                    </div>
                  </div>
                  <div className="charecteristic">
                    <h1>Характеристики Apple iPhone 13 Pro Max 256 ГБ серый</h1>
                    <div className="information">
                      <div className="information-text">
                        Камера <span>48 МРх</span>
                      </div>
                      <div className="information-text">
                        Система <span>IOS </span>
                      </div>
                      <div className="information-text">
                        Диагональ <span>6,1"</span>
                      </div>
                      <div className="information-text">
                        Зарядка <span>Беспроводная</span>
                      </div>
                    </div>
                    <h2 className="information-title">
                      Полный список характеристик
                      <button className="information-btn">
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8332 1.0835L6.99984 6.91683L1.1665 1.0835"
                            stroke="#FF4D4D"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </h2>
                  </div>
                  <div className="opisanie">
                    <h3>Описание</h3>
                    <p className="opisanie-text">
                      Смартфон Apple iPhone 13 выполнен в компактном корпусе с
                      привлекательной розовой расцветкой и защищенной
                      конструкцией по стандарту IP68. Мощный чип A15 Bionic
                      обеспечивает быструю и стабильную работу при запуске
                      приложений, просмотре видео, веб-серфинге и выполнении
                      других задач. На дисплее 6.1 дюйма OLED выводится четкая и
                      красочная картинка. На тыловой стороне расположена камера
                      с двумя датчиками по 12 Мп, которые при поддержке ряда
                      технологий и функций позволяют создавать реалистичные
                      снимки в различных условиях. На передней стороне имеется
                      камера 12 Мп для селфи и общения. В мобильном устройстве
                      предлагается широкий набор беспроводных интерфейсов и
                      разъем Lightning 8-pin. Аккумулятор гарантирует
                      продолжительное время автономности. Из особенностей
                      отмечаются поддержка быстрой зарядки, беспроводной зарядки
                      и устройств MagSafe с магнитным позиционированием.===
                    </p>
                  </div>
                </div>
              </div>
              <div className="Charts">
                <div className="product__iphone">
                  <div className="iphone__group">
                    <h1 className="iphone__group-title">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                    <div className="grade-block">
                      <p className="grade">4.4. Оценка экспертов</p>
                      <p className="star">
                        4.0 <img src={img2} alt="" />
                        447 Отзывов
                      </p>
                    </div>
                    <div className="iphone__group-text">
                      <p className="iphone-text">Дизайн</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p className="iphone-text">Батарея</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div2"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p className="iphone-text">Камера</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p className="iphone-text">Ответ</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                      </div>
                    </div>
                    <div className="iphone__group-text">
                      <p className="iphone-text">Портативность</p>
                      <div className="linia">
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div1"></div>
                        <div className="div2"></div>
                      </div>
                    </div>
                    <div className="crown-group">
                      <img className="crown" src={img3} alt="" />
                      <p className="">Самый дешевый</p>
                    </div>
                    <div className="money-group">
                      <p className="money-group-text">78 999 ₽</p>
                      <img src={img4} alt="" />
                    </div>
                    <p>Доставка бесплатная</p>

                    <div className="hgfds">
                      <img className="statik-img" src={img5} alt="" />

                      <div className="statik">
                        Цена хорошая
                        <br />
                        <span>
                          Исходя из последних 40 дней, сумма составляет близко к
                          среднему 80 000 ₽
                        </span>
                      </div>
                    </div>
                    <div className="color-group">
                      <img className="color" src={img6} alt="" />
                      <img className="color" src={img7} alt="" />
                      <img className="color" src={img8} alt="" />
                      <div className="btns">
                        <button
                          className="btn-left"
                          onClick={handleCompareClick}
                        >
                          <img src={img9} alt="" /> Сравнить
                        </button>
                        <button
                          className="btn-right"
                          onClick={handleFavoriteClick}
                        >
                          <img src={img10} alt="" /> В избранное
                        </button>
                      </div>
                    </div>

                    <div className="history-group">
                      <h4>История цены</h4>
                      <img className="mount" src={img11} alt="" />
                      <img className="price" src={img12} alt="" />
                      <div className="history-mounth">
                        <div className="mounth">Сентябрь</div>
                        <div className="mounth">Октябрь</div>
                        <div className="mounth">Ноябрь</div>
                        <div className="mounth">Декабрь</div>
                        <div className="mounth">Январь</div>
                        <div className="mounth">Февраль</div>
                      </div>
                    </div>
                    {/* <div className="swiper">
                      <ChartComponent />
                    </div> */}
                    <div className="chart-blocks">
                      {/* <div className="chart-groups"> */}
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img13} alt="" />
                        </div>
                        <p className="chart-text">Доставка бесплатная</p>
                        <img src={img15} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img14} alt="" />
                        </div>
                        <p className="chart-text">
                          Доставка включена в стоимость
                        </p>
                        <img src={img16} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img14} alt="" />
                        </div>
                        <p className="chart-text">
                          Доставка включена в стоимость
                        </p>
                        <img src={img16} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img13} alt="" />
                        </div>
                        <p className="chart-text">Доставка бесплатная</p>
                        <img src={img15} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img13} alt="" />
                        </div>
                        <p className="chart-text">Доставка бесплатная</p>
                        <img src={img15} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img14} alt="" />
                        </div>
                        <p className="chart-text">
                          Доставка включена в стоимость
                        </p>
                        <img src={img16} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>

                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img14} alt="" />
                        </div>
                        <p className="chart-text">
                          Доставка включена в стоимость
                        </p>
                        <img src={img16} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="chart-block">
                        <div className="chart-block-header">
                          <p className="money-group-text">83 999 ₽</p>
                          <img src={img13} alt="" />
                        </div>
                        <p className="chart-text">Доставка бесплатная</p>
                        <img src={img15} alt="" />
                        <div className="chart-footer">
                          <p className="chart-footer-text">Перейти в магазин</p>
                          <button className="chart-btn">
                            <img src={img17} alt="" />
                          </button>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="otzyv__header-title">Отзывы</h4>
            <div className="otzyv-groups">
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Я перешел с Samsung через 7 лет без iPhone, так что это
                  странно и возвращаюсь, однако я еще не был разочарован,
                  единственное, чего мне может не хватать, это лучшей камеры, но
                  этого достаточно, вам нужно все выяснить еще раз, но,
                  очевидно, рекомендация отсюда 😁 💪🏼
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Этот телефон просто работает. Моментальный отклик на любое
                  действие. Все механизмы отлажены. В совокупности с остальными
                  девайсами от apple образует органичную инфраструктуру, которой
                  легко и просто пользоваться. Интерфейс не перегружен
                  бесполезными, запутанными и лишними элементами, как в Андроид
                  телефонах. Просто разобраться, где что настроить и при этом не
                  утонуть в лабиринте из меню, переходов, надстроек и
                  дополнительных танцев, как в какой нибудь самсе.
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Самое заметное это производительность, прям новый уровень в
                  быстродействии, в повседневных задачах просто летает, отличные
                  камеры, но сильно выпирают из корпуса. Экран смотрится
                  отлично, единственное что беспокоит сколько проживет OLED
                  матрица, как можно во флагман засунуть экран выгорающий со
                  временем, есть же у них топовые практически вечные экраны Mini
                  LED которые в ipad pro, макбуках и т.д.
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Самое заметное это производительность, прям новый уровень в
                  быстродействии, в повседневных задачах просто летает, отличные
                  камеры, но сильно выпирают из корпуса. Экран смотрится
                  отлично, единственное что беспокоит сколько проживет OLED
                  матрица, как можно во флагман засунуть экран выгорающий со
                  временем, есть же у них топовые практически вечные экраны Mini
                  LED которые в ipad pro, макбуках и т.д.
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  оброго времени суток! Приобрёл данное устройство в январе 2023
                  года, и спустя несколько месяцев обслуживания решил поделиться
                  впечатлениями об данной модели телефона. Если вы обладатель
                  Android устройства, то переход на эту модель телефона будет
                  что-то невероятное, высокая производительность, великолепное
                  качество снимков, видео.
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  По камере могу сказать что после 11 айфона особой разницы днем
                  в хороших условиях не видно, а ночью.(+зум и супер стаб).
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  По камере могу сказать что после 11 айфона особой разницы днем
                  в хороших условиях не видно, а ночью.(+зум и супер стаб).
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Ужасный аккумулятор, держит только 24 часа, иногда даже
                  меньше. При этом Bluetooth hi-fi отключены. Навигатором вообще
                  не пользуюсь, видео не смотрю. В общем ужас!!!!
                </p>
              </div>
              <div className="otzyv-group">
                <div className="otzyv-header">
                  <img className="avatar" src={img18} alt="" />
                  <div className="otzyv-header-text">
                    <p className="otzyv-title">Jerome Bell</p>
                    <img src={img19} alt="" />
                  </div>
                </div>

                <h5 className="otzyv-title">Восхитительный мобильный</h5>
                <p className="otzyv-text">
                  Этот телефон просто работает. Моментальный отклик на любое
                  действие. Все механизмы отлажены. В совокупности с остальными
                  девайсами от apple образует органичную инфраструктуру, которой
                  легко и просто пользоваться. Интерфейс не перегружен
                  бесполезными, запутанными и лишними элементами, как в Андроид
                  телефонах. Просто разобраться, где что настроить и при этом не
                  утонуть в лабиринте из меню, переходов, надстроек и
                  дополнительных танцев, как в какой нибудь самсе.
                </p>
              </div>
            </div>
            <div className="btn-footer">
              <button className="button-footer">Показать еще</button>
            </div>
          </div>
          <div className="swiper">
            <ChartComponent />
          </div>
        </div>
      </section>
    </>
  );
}
export default Information;
