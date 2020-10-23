import React from 'react';
import "./Shop.css"

function Shop() {
    return (
        <div className="shop">
            <div className="shop__banner">
                <div className="shop__banner-left ">
                    <img className="shop__banner-img" src={require("./img/banner-5.jpg")} alt="" />
                </div>
                <div className="shop__banner-center">
                    <h1 className=" text-primary">Tienda</h1>
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
                    <div className="aside__filter">
                        <h6>Filtrar</h6>
                        <p>Por Productos</p>
                        <p>Por Precio</p>
                    </div>

                    <div className="aside__categoria">
                        <h6>Categoria</h6>
                        <div>
                            <input type="checkbox" name="" id="" />
                            <span>Todos</span>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span>Mujeres</span>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span>Hombres</span>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span>Niños</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="shop__right">
                    hello
                </div>
            </div>
        </div>
    )
}

export default Shop
