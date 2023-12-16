import React from "react";
import Modal from "@/components/Modal";
import {useForm} from "react-hook-form";

const ContactForm = () => {
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
        setOpenModal(true);
    };
    const onClose = () => {
        setOpenModal(false);
    };
    return (
        <>
            <form
                action="https://jsonplaceholder.typicode.com/posts"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
                className="contact__form"
            >
                <label className="contact__form-label">
                    <input
                        type="text"
                        name="name"
                        className="contact__form-input"
                        placeholder="Имя"
                        {...register("name", {required: true})}
                    />
                    {errors.name && (
                        <p className="contact__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>

                <label className="contact__form-label">
                    <input
                        type="email"
                        name="email"
                        className="contact__form-input"
                        placeholder="Почта"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                    />
                    {errors?.email?.type === "required" && (
                        <p className="contact__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.email?.type === "pattern" && (
                        <p className="contact__form-error">
                            Введите корректный адрес электронной почты
                        </p>
                    )}
                </label>
                <label className="contact__form-label">
                    <input
                        type="tel"
                        name="tel"
                        className="contact__form-input"
                        placeholder="Телефон"
                        {...register("tel", {
                            required: true,
                            pattern: /^\+?[0-9]+$/i,
                            validate: (value) => value.length === 11,
                        })}
                    />
                    {errors?.tel?.type === "required" && (
                        <p className="contact__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                    {errors?.tel?.type === "pattern" && (
                        <p className="contact__form-error">
                            Введите корректный номер телефона
                        </p>
                    )}
                    {errors?.tel?.type === "validate" && (
                        <p className="contact__form-error">
                            Введите корректный номер телефона
                        </p>
                    )}
                </label>
                <label className="contact__form-label">
                    <input
                        type="text"
                        name="about"
                        className="contact__form-input"
                        placeholder="Тема вопроса"
                        {...register("about", {required: true})}
                    />
                    {errors.about && (
                        <p className="contact__form-error">
                            Это поле обязательно для заполнения
                        </p>
                    )}
                </label>
                <label className="contact__form-label contact__form-text">
          <textarea
              name="message"
              className="contact__form-input"
              placeholder="Сообщение..."
          ></textarea>
                </label>
                <button className="contact__form-btn" type="submit">
                    Оставить заявку
                </button>
            </form>
            {openModal && (
                <Modal message="Данные успешно отправлены" onClose={onClose}/>
            )}
        </>
    );
};

export default ContactForm;
