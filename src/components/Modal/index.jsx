import React from "react";
import "./modal.scss";

const Modal = ({message, onClose}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{message}</h2>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default Modal;
