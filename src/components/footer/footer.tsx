import "./footer.css";
import foter from "../../assets/footer/foter.png";
import insta from "../../assets/footer/insta.png";
import tiktok from "../../assets/footer/tiktok.png";
import Youtube from "../../assets/footer/Youtube.png";
import telegram from "../../assets/footer/telegram.png";
import behoof from '../../assets/footer/behoof.png'
import frame from '../../assets/footer/Frame1.png'
import icon from '../../assets/footer/Frame 2.png'
import icon2 from '../../assets/footer/Frame 3.png'
import icon3 from '../../assets/footer/Frame 4.png'
import icon4 from '../../assets/footer/Frame 5.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <li className="behoof">
            <img src={behoof} alt="" />
              <a href="#">Behoof</a>
            </li>
            <h6>мы в соц сетях</h6>
            <div className="social-links">
              <a href="#">
                <img src={foter} alt="#" />
              </a>
              <a href="#">
                <img src={telegram} alt="#" />
              </a>
              <a href="#">
                <img src={Youtube} alt="#" />
              </a>
              <a href="#">
                <img src={insta} alt="#" />
              </a>
              <a href="#">
                <img src={tiktok} alt="#" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Пользователю</h4>
            <ul>
              <li>
                <a href="#">Связаться с нами</a>
              </li>
              <li>
                <a href="#">Поддерка пользователей</a>
              </li>
              <li>
                <a href="#">FAQ & Руководства</a>
              </li>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#">Пользовательское соглашение</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Популярные категории</h4>
            <ul>
              <li>
                <a href="#">Смартфоны</a>
              </li>
              <li>
                <a href="#">Teteras electricas</a>
              </li>
              <li>
                <a href="#">Стиральные машины</a>
              </li>
              <li>
                <a href="#">Телевизоры</a>
              </li>
              <li>
                <a href="#">Ноутбуки</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Команда Behoof</h4>
            <ul>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Работа у нас</a>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
                Copyridht & {new Date().getFullYear()} Behoof, Inc. все права
                защищены
              </p>
            </div>
          </div>
        </div>
        <div className="footer__icon">
            
            <a href="">
            <img src={frame} alt="" />
            </a>
            <a href="">
              <img src={icon} alt="" />
            </a>
            <a href="">
              <img src={icon2} alt="" />
            </a>
            <a href="">
              <img src={icon3} alt="" />
            </a>
            <a href="">
              <img src={icon4} alt="" />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
