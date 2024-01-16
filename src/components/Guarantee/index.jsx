import GuaranteeItem from "./GuaranteeItem";
import { Link } from "react-router-dom";
import "./guarantee.scss";

const Guarantee = () => {
  return (
    <section className="guarantee">
      <div className="container guarantee__container">
        <div className="guarantee__text">
          <h2 className="guarantee__title">Гарантии качества</h2>
          <p className="guarantee__desc">
            Наши гарантии качества включают в себя полный спектр документов,
            необходимых для ввоза и вывоза товаров, а также для успешного
            бизнеса на мировом рынке.
            <p className="guarantee__desc-sub">
              Мы предоставляем вам надёжность и уверенность
            </p>
          </p>
        </div>
        <ul className="guarantee__items">
          <GuaranteeItem
            imgSrc="src/assets/images/guarantee-1.png"
            title="Свидетельство о регистрации в РФ"
            linkHref=""
          />
          <GuaranteeItem
            imgSrc="src/assets/images/guarantee-2.png"
            title="Свидетельство о регистрации в США"
            linkHref=""
          />
          <GuaranteeItem
            imgSrc="src/assets/images/guarantee-3.png"
            title="Свидетельство о регистрации в Китае"
            linkHref=""
          />
          <GuaranteeItem
            imgSrc="src\assets\guarantee-4.png"
            title="Свидетельство о регистрации в Великобритании"
            linkHref=""
          />
        </ul>
        <div className="guarantee__btn">
          <Link to="#">Показать больше документов</Link>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
