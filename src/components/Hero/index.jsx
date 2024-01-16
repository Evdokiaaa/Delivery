import HeroForm from "./HeroForm";
import image from "@/assets/images/hero-img.jpg";
import "./hero.scss";

const HeroRight = () => {
  return (
    <div className="hero__right">
      <div className="hero__right-container">
        <div className="hero__right-text">
          <h2 className="hero__right-title">Калькулятор доставки</h2>
          <p className="hero__right-desc">
            Посчитайте, сколько будет стоить перевозка покупки из зарубежа
          </p>
        </div>
        <HeroForm />
      </div>
    </div>
  );
};
const HeroLeft = () => {
  return (
    <div className="hero__left">
      <div className="hero__left-title">
        Без проблемная доставка купленных вещей из США, Европы и Азии в Россию
      </div>
      <div className="hero__left-desc">
        Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис
        позволяет вам легко и удобно заказывать товары со всего мира и получать
        их в России
      </div>
      <div className="hero__left-image">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
