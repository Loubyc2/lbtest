import React from 'react';
import "./Shop.css"

function Shop() {
    return (
        <div>
            <div className="shop__banner">
                <div className="shop__banner-left mr-2">
                    <img className="shop__banner-img" src={require("./img/banner-5.jpg")} alt="" />
                </div>
                <div className="shop__banner-center">
                    <div className="banner__top">
                        <h1 className="mt-3">Tiendas</h1>
                    </div>
                    <div className="banner__bottom">
                        <img className="shop__banner-img-bottom" src={require("./img/banner-7.jpg")} alt="" />
                    </div>
                </div>
                <div className="shop__banner-right ml-2">
                    <img className="shop__banner-img" src={require("./img/banner-8.jpg")} alt="" />
                </div>
            </div>
            <div>
                <div className="shop__aside"></div>
                <div className="shop__main"></div>
            </div>
        </div>
    )
}

export default Shop
