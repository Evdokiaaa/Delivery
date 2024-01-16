import { Link } from "react-router-dom";

import "./footer.scss";
import { menuItems } from "@/features/utils/utils.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__top-left">
            <img src="src\assets\logo.svg" alt="logo" />
            <h3 className="footer__top-left-title">FromBoard Delivery</h3>
          </div>
          <div className="footer__top-nav">
            <nav className="footer__nav">
              <ul className="footer__items">
                {menuItems.map((item) => (
                  <li className="footer__item" key={item.id}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer__top-phone">
            <h2 className="footer__top-phone-number">+7 (800) 123 45-67</h2>
            <p className="footer__top-phone-desc">Звонки по России бесплатны</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-desc">
            НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что
            цены носят информационный и ознакомительный характер, а значит н в
            какой мере не являются публичной офертой, которая определена в ст.
            437 ГК РФ. Вся информация на сайте может содержать неточности,
            орфографические и иные ошибки, она не является полной, окончательно
            и исчерпыва щей
          </p>
          <p className="footer__bottom-author">
            Разработкой макета занимался
            <a href="#" target="_self">
              StyleLifeWeb | Васильев Александр
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
