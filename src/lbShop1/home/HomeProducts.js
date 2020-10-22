import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import "./HomeProducts.css"

function HomeProducts({ id, img, title, price, rating }) {
    const [products] = useState([
        { img: require('../img/products/product-1.png'), title: 'Dry T-shirt', price: 20, rating: 4, id: '1' },
        { img: require('../img/products/product-2.png'), title: 'Amazing Cap', price: 25, rating: 5, id: '2' },
        { img: require('../img/products/product-9.png'), title: 'Chear', price: 31, rating: 3, id: '3' },
        { img: require('../img/products/product-11.png'), title: 'Jacket', price: 17, rating: 2, id: '4' },
        { img: require('../img/products/product-14.png'), title: 'Short-Sleeve', price: 44, rating: 4, id: '5' },
        { img: require('../img/products/product-17.png'), title: 'Milton Jacket', price: 19, rating: 3, id: '6' },
        { img: require('../img/products/product-12.png'), title: 'Green Seat', price: 50, rating: 5, id: '7' },
        { img: require('../img/products/product-4.png'), title: 'Kid’s T-shirt', price: 23, rating: 4, id: '8' },
        { img: require('../img/products/product-3.png'), title: 'Apple Watch', price: 34, rating: 3, id: '9' },
        { img: require('../img/products/product-5.png'), title: 'Addidas Shoes', price: 24, rating: 5, id: '10' },
    ])

    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                img: img,
                title: title,
                price: price,
                rating: rating
            }
        })
        console.log(basket)
    }

    return (
        <div className="homeProduct">
            <div style={{ height: '400px', marginBottom: '60px' }}>
                <figure className="home__banner">
                    <div className="home__banner-text">
                        <h1>Get your discount</h1>
                        <p> <strong> 50% </strong>off</p>
                        <Link to="/" className="home__banner-btn"><span>comprar</span></Link>
                    </div>
                </figure>
            </div>

            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', padding: '10px 55px' }}>
                <h2 className="homeProduct-title">Productos</h2>
                <div style={{ borderBottom: '2px solid grey', width: '80%', marginLeft: '10px', height: '10px', display: 'inline-block' }}></div>
            </div>
            <div className="homeProduct-items">
                {products.map(product => (
                    <div className="homeProduct-item" key={product.id}>
                        <img className="homeProduct__img" src={product.img} alt="" />
                        <div className="homeProduct-info">
                            <h4>{product.title}</h4>
                            <div className="homeProduct-rating" style={{ display: 'flex', justifyContent: 'center', fontSize: '10px' }}>
                                {Array(product.rating).fill().map((_, index) => <div key={index}> <span aria-label="emoji" role='img'>⭐</span></div>)
                                }
                            </div>

                            <span>$ <strong>{product.price}</strong></span>
                        </div>
                        <div className="ToTheCart">
                            <Link onClick={addToBasket} to="/">Agregar al Carro</Link>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default HomeProducts
