import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi'


import "./Home.css"
import HomeProducts from './HomeProducts';

function Home() {


    return (
        <div className="home">
            <div className="home__fasion">
                <div
                    style={{
                        backgroundImage: `url(${require("../img/banner-4.jpg")})`,
                        backgroundPosition: 'center center'
                    }}
                    className="home__fashion-women"
                >
                    <div className="home__fasion-women-text">
                        <h1 className="home__fashion-title">women’s fashion</h1>
                        <Link to="/" className="home__fashion-link">
                            <span className="home__fasion-btn">comprar</span>
                        </Link>
                    </div>
                </div>
                <div className="home__fasion-bottom">
                    <div
                        style={{
                            backgroundImage: `url("http://demo2.joomshaper.com/2019/arino/images/2019/07/17/kids_img01.jpg")`
                        }}
                        className="home__fashion-kids"
                    >
                        <div className="home__fasion-text">
                            <h1 className="home__fashion-title">kids’ fashion</h1>
                            <Link to="/" className="home__fashion-link">
                                <span className="home__fasion-btn">comprar</span>
                            </Link>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${require("../img/banner-1.jpg")})`,
                            marginLeft: '10px'
                        }}
                        className="home__fashion-men">
                        <div className="home__fasion-text">
                            <h1 className="home__fashion-title">Men’s fashion</h1>
                            <Link to="/" className="home__fashion-link">
                                <span className="home__fasion-btn">comprar</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <HomeProducts />
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

export default Home
