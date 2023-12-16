import React from "react";
import "./button.scss";
import {Link} from "react-router-dom";

const UIButton = ({text, additionClass}) => {
    return (
        <>
            <button className={`btn ${additionClass}`}>
                <Link to="/">{text}</Link>
            </button>
        </>
    );
};

export default UIButton;
