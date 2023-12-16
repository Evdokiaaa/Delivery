import React from "react";
import "./benefits.scss";
import {benefitsData} from '@/features/utils/utils.js'

const BenefitsItem = ({data}) => {
    console.log(data)
    return (
        <li className="benefits__item">
            <img src={data.img} alt={data.title}/>
            <div className="benefits__item-text">
                <h2 className="benefits__item-title">{data.title}</h2>
                <p className="benefits__item-desc">
                    {data.desc}
                </p>
            </div>
        </li>
    )
}
const Benefits = () => {
    return (
        <section className="benefits">
            <div className=" container benefits__container">
                <h2 className="benefits__title">Наши преимущества</h2>
                <ul className="benefits__items">
                    {
                        benefitsData.map((data) => (
                            <BenefitsItem data={data}/>
                        ))
                    }


                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-1.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Растоможка груза</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Мы берём на себя все формальности и бумажную волокиту, связанную*/}
                    {/*      с растаможкой груза*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-2.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Надёжная упаковка</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Мы берём на себя все формальности и бумажную волокиту, связанную*/}
                    {/*      с растаможкой груза*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-3.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Быстро и выгодно</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Мы предлагаем быструю и выгодную доставку, чтобы вы могли*/}
                    {/*      насладиться покупками как можно скорее.*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-4.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Удобный сервис</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Стремимся сделать процесс доставки максимально удобным для вас,*/}
                    {/*      чтобы опыт остался приятным и беззаботным*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-5.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Прозрачность работы</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Мы предоставляем полный контроль над каждым этапом доставки,*/}
                    {/*      от момента заказа до момента прибытия заказа*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                    {/*<li className="benefits__item">*/}
                    {/*  <img src="src\assets\benefits-6.svg" alt="" />*/}
                    {/*  <div className="benefits__item-text">*/}
                    {/*    <h2 className="benefits__item-title">Страхование груза</h2>*/}
                    {/*    <p className="benefits__item-desc">*/}
                    {/*      Наше страхование обеспечивает полную защиту и покрытие почти все*/}
                    {/*      неприятные и неожиданные ситуации*/}
                    {/*    </p>*/}
                    {/*  </div>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </section>
    );
};

export default Benefits;
