import "./reviews.scss";
import ReviewsSlider from "./Slider";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container reviews__container">
        <h2 className="reviews__title">Отзывы</h2>
        <div className="reviews__swipper">
          <ReviewsSlider />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
