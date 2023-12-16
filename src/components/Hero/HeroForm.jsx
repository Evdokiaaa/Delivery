import React from "react";
import {useForm} from "react-hook-form";
import Modal from "@/components/Modal";

const HeroForm = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onSubmit",
        defaultValues: {
            email: "",
        },
    });
    const onSubmit = (data) => {
        console.log(data);
        //Логика по отправки данных...
        setOpenModal((isOpen) => !isOpen);
    };
    const onClose = () => {
        setOpenModal((isOpen) => !isOpen);
    };

    return (
        <>
            <form
                action="https://jsonplaceholder.typicode.com/posts"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                className="hero__form"
            >
                <label className="hero__form-label">
                    <input
                        type="text"
                        className="hero__form-input"
                        placeholder="Имя"
                        {...register("name", {required: true})}
                    />
                    {errors.name && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="email"
                        name="email"
                        className="hero__form-input"
                        placeholder="Почта"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.email?.type === "pattern" && (
                        <p className="hero__form-error">
                            Введите корректный адрес электронной почты
                        </p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="tel"
                        name="tel"
                        className="hero__form-input"
                        inputMode="tel"
                        placeholder="Телефон"
                        maxLength={11}
                        {...register("tel", {
                            required: true,
                            pattern: /^\+?[0-9]+$/i,
                            validate: (value) => value.length === 11,
                        })}
                    />
                    {errors?.tel?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.tel?.type === "pattern" && (
                        <p className="hero__form-error">
                            Введите корректный номер телефона
                        </p>
                    )}
                    {errors?.tel?.type === "validate" && (
                        <p className="hero__form-error">
                            Введите корректный номер телефона
                        </p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="number"
                        name="area"
                        className="hero__form-input"
                        placeholder="Общая площадь м²"
                        max="9999"
                        {...register("area", {
                            required: true,
                            validate: (value) => Number(value) > 0,
                        })}
                    />
                    {errors?.area?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.area?.type === "validate" && (
                        <p className="hero__form-error">Введите корректные данные</p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="number"
                        name="weight"
                        className="hero__form-input"
                        placeholder="Вес, кг"
                        max="9999"
                        {...register("weight", {
                            required: true,
                            validate: (value) => Number(value) > 0 && value.length <= 3,
                        })}
                    />
                    {errors?.weight?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.weight?.type === "validate" && (
                        <p className="hero__form-error">Введите корректные данные</p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        name="country"
                        type="text"
                        className="hero__form-input"
                        placeholder="Страна"
                        {...register("country", {required: true})}
                    />
                    {errors?.country?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="text"
                        name="city-buy"
                        className="hero__form-input"
                        placeholder="Город покупки"
                        {...register("cityBuy", {required: true})}
                    />
                    {errors?.cityBuy?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>
                <label className="hero__form-label">
                    <input
                        type="text"
                        name="city-del"
                        className="hero__form-input"
                        placeholder="Город доставки"
                        {...register("cityDelivery", {required: true})}
                    />
                    {errors?.cityDelivery?.type === "required" && (
                        <p className="hero__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>
                <button className="hero__form-btn" type="submit">
                    Заказать расчёты
                </button>
            </form>
            {openModal && (
                <Modal message="Данные успешно отправлены" onClose={onClose}/>
            )}
        </>
    );
};

export default HeroForm;
