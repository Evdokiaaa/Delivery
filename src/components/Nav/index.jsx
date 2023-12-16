import React from "react";
import {Link} from "react-router-dom";
import UIButton from "../UI/UIButton/UIButton";
import ShippingInfoList from "../ShippingInfoList";
import {menuItems} from "@/features/utils/utils.js";
import "./nav.scss";

const Nav = ({mobileActive}) => {
    const mobileMenu = `nav ${mobileActive ? "nav__active" : ""}`;
    return (
        <nav className={mobileMenu}>
            <div className="nav__container">
                <ul className="nav__menu-items">
                    {menuItems.map((menuItem) => (
                        <li className="nav__menu-item" key={menuItem.id}>
                            <Link to={menuItem.link}>{menuItem.text}</Link>
                        </li>
                    ))}
                </ul>
                <UIButton text="Оставить заявку"/>
            </div>
            <div className="nav__mobile">
                <ShippingInfoList className={["nav__mobile-text"]}/>
            </div>
        </nav>
    );
};

export default Nav;
