import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "./swiper.scss";

const ReviewsSlider = () => {
    const [slides, setSlides] = React.useState(2);
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSlides(1);
            } else {
                setSlides(2);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={slides}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="custom-swiper-slide">
                Я заказала последний iPhone из США через ваш сервис, и доставка прошла
                быстро и без каких‑либо проблем. Гарантии качества и надёжная упаковка
                сделали мой опыт покупки невероятно позитивным
                <h4 className="custom-swiper-slide-author">Анна</h4>
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
                Я уже несколько лет заказываю дизайнерскую одежду из Франции
                через ваш сервис, и он никогда меня не подводил. Важно иметь надёжную
                компанию, которая позаботится о вашем заказе и предоставит
                все необходимые документы для ввоза в Россию
                <h4 className="custom-swiper-slide-author">Алексей</h4>
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
                Ваш сервис действительно изменил мой способ покупок. Я больше не
                переживаю о таможенных вопросах и документах - все у вас в порядке.
                Спасибо за ваше качество и надежность
                <h4 className="custom-swiper-slide-author">Екатерина</h4>
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
                Я заказал редкий антикварный предмет из Японии через ваш сервис, и
                остался впечатлен. Все пришло в отличном состоянии, и ваша гарантия
                качества действительно работает. Спасибо за ваше профессиональное
                обслуживание
                <h4 className="custom-swiper-slide-author">Дмитрий</h4>
            </SwiperSlide>
            <SwiperSlide className="custom-swiper-slide">
                Заказал шикарные часы из Швейцарии, и доставка была невероятно быстрой.
                Ваш сервис делает интернет-шоппинг более доступным и удобным
                <h4 className="custom-swiper-slide-author">Игорь</h4>
            </SwiperSlide>
        </Swiper>
    );
};
export default ReviewsSlider;
