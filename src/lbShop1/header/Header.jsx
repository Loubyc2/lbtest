import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

import "./Header.css"
import { useStateValue } from '../StateProvider';

function Header() {

    const [show, handleShow] = useState(true)

    const [{ basket }] = useStateValue()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(false);
            } else {
                handleShow(true);
            }
        });
    }, []);

    return (
        <div className="header">
            <div className="header__top">
                <Link to="/">
                    <h1 className="header__top-logo">Lb Design <strong>fashion</strong></h1>
                </Link>
                <div className="header__top-right">
                    <Link to="/">
                        <div className="header__top-account">
                            <FiIcons.FiUser color="" size={20} />
                            <span>Cuenta</span>
                        </div>
                    </Link>
                    <Link to="/" style={{ display: 'flex' }}>
                        <div className="header__top-cart">
                            <FiIcons.FiShoppingCart size={20} />
                            <span >Carro</span>
                        </div>
                        <span className="cart-items">{basket.length}</span>
                    </Link>

                </div>
            </div>
            <div className={show ? 'header__bottom' : "onScroll"}>
                <nav className="header__bottom-nav">
                    <Link className="header-logo" to="/">
                        <h1 className="header__top-logo bottom">Lb Design <strong>fashion</strong></h1>
                    </Link>
                    <ul className="header__bottom-links">
                        <NavLink to="/"><li>Inicio</li></NavLink>
                        <NavLink to="/shop"><li>Tienda</li></NavLink>
                        <NavLink to="/pages"><li>Paginas</li></NavLink>
                        <NavLink to="/contact"><li>Contactos</li></NavLink>
                    </ul>
                </nav>
                <div className={show ? "header__bottom-right" : "header__bottom-right active"}>
                    <Link to="/">
                        <div className="header__bottom-account">
                            <FiIcons.FiUser color="" size={20} />
                            <span>Cuenta</span>
                        </div>
                    </Link>
                    <Link to="/" style={{ display: 'flex' }}>
                        <div className="header__bottom-cart">
                            <FiIcons.FiShoppingCart size={20} />
                            <span >Carro</span>
                        </div>
                        <span className="cart-bottom-items">{basket.length}</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Header
