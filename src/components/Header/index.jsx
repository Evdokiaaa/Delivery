import React from "react";
import Nav from "@/components/Nav";
import logo from "@/assets/images/logo.svg";
import {Link} from "react-router-dom";
import "./header.scss";
import ShippingInfoList from "@/components/ShippingInfoList";

const Header = () => {
    const [active, setActive] = React.useState(false);

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__top">
                    <div className="header__logo-block">
                        <Link to="/" className="header__logo-block-link">
                            <img src={logo} alt="logo"/>
                            <p className="header__logo-block-text">FromBoard Delivery</p>
                        </Link>
                    </div>
                    <div className="header__info">
                        <div className="header__price">
                            <ShippingInfoList className={"header__price-text"}/>
                        </div>
                        <div className="header__phone">
                            <p className="header__phone-tel">+7 (800-12) 3-45-67</p>
                            <p className="header__phone-desc">Звонки по России бесплатны</p>
                        </div>
                        <div className="burger" onClick={() => setActive(!active)}>
                            <span className="burger__line"></span>
                        </div>
                    </div>
                </div>
                <Nav mobileActive={active}/>
            </div>
        </header>
    );
};

export default Header;
