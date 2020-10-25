import React from 'react';
import "./Shop.css"

import * as ImIcons from 'react-icons/im'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'

function Shop() {
    return (
        <div className="shop">
            <div className="shop__banner">
                <div className="shop__banner-left ">
                    <img className="shop__banner-img" src={require("./img/banner-5.jpg")} alt="" />
                </div>
                <div className="shop__banner-center">
                    <h1>Tienda</h1>
                    <img className="shop__banner-img-bottom" src={require("./img/banner-7.jpg")} alt="" />
                </div>
                <div className="shop__banner-right">
                    <img className="shop__banner-img" src={require("./img/banner-8.jpg")} alt="" />
                </div>
            </div>
            <div className="shop__main">
                <div className="shop__aside">
                    <div className="aside__search">
                        <h6>Buscar</h6>
                        <input type="text" />
                        <span>ir</span>
                    </div>
                    <div className="aside__categoria">
                        <h6>Categorias</h6>
                        <p>Mujeres</p>
                        <p>Niños</p>
                        <p>Hombres</p>
                    </div>

                    <div className="aside__filter">
                        <h6>Filtrar por talla</h6>
                        <form className="form-inline justify-content-center d-flex md-form form-sm my-2">
                            <input className="form-control form-control-sm  w-75" type="tex" id='input' aria-label="Search" />
                            <label htmlFor='input'><FiIcons.FiSearch style={{ marginLeft: '5px' }} size={20} /></label>
                        </form>
                        <div className='aside__filter-size'>
                            <p>X (10)</p>
                            <p>L (3)</p>
                            <p>M (7)</p>
                            <p>S (13)</p>
                            <p>XL (8)</p>
                        </div>
                    </div>

                </div>
                <div className="shop__right">
                    <div className="shop__right-header"><ImIcons.ImHome className="shop__right-header-icon" />/<span>Tienda</span></div>
                    <div className="shop__product">
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <img className="shop__product-img" src={require("./img/products/product-20.jpg")} alt="" />
                            <img className="shop__product-img" src={require("./img/products/product-21.jpg")} alt="" />
                            <img className="shop__product-img" src={require("./img/products/product-22.jpg")} alt="" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <img className="shop__product-img" src={require("./img/products/product-23.jpg")} alt="" />
                            <img className="shop__product-img" src={require("./img/products/product-24.jpg")} alt="" />
                            <img className="shop__product-img" src={require("./img/products/product-25.jpg")} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer">
                <footer>
                    <div className="footer-left">
                        <h4>Nuestras Redes Sociales</h4>
                        <div className="footer-icons">
                            <FaIcons.FaFacebookSquare size={26} color="#f5f5f5" />
                            <FaIcons.FaTwitterSquare size={26} color="#f5f5f5" />
                            <FaIcons.FaInstagramSquare size={26} color="#f5f5f5" />
                        </div>
                    </div>
                    <div className="footer-center">
                        <div style={{ display: 'flex' }}>
                            <div
                                style={{ marginRight: '10px' }}>
                                <h6 style={{ marginBottom: '0' }}>Email</h6>
                                <span>loubyc2@gmail.com</span>
                            </div>
                            <FiIcons.FiMail size={42} color="#b8b8b8" />
                        </div>
                        <div style={{ display: 'flex', marginLeft: '35px' }}>
                            <div
                                style={{ marginRight: '10px' }}>
                                <h6 style={{ marginBottom: '0' }}>Phone</h6>
                                <span>+56 9 6767 8890</span>
                            </div>
                            <FiIcons.FiPhone size={42} color="#b8b8b8" />
                        </div>
                    </div>
                    <div className="footer-right">
                        <h4>Nuestro Newsletter</h4>
                        <form className="footer-search" netlify>
                            <input type="text" placeholder="Ingresa tu e-mail" />
                            <span>Enviar</span>
                        </form>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Shop
