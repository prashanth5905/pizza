import React from 'react';
import data from './data.json';
import './menu.css';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate();
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();

  return (
    <>
     <div className="menu-bg"></div>
     <div className='menuPage'>
        <h1>Menu</h1>
        <div className='button_container'>
          <button className="go-to-cart" onClick={() => navigate('/cart')}>
            Go to Cart
          </button>
        </div>

        <div className='items'>
          {data.data.map((item) => (
            <div className='prash' key={item.id}>
              <div className='pizzaimage'>
                <img src={item.imageUrl} alt='pizza_image' />
              </div>
              <div className='details'>
                <div className='name'>
                  <h3>{item.name}</h3>
                  <p className='ingredients'>Ingredients: {item.ingredients.join(', ')}</p>
                  <p>{item.soldOut ? 'Sold Out' : `$${item.unitPrice}.00`}</p>

                  {cart[item.id] ? (
                    <div className="quantity-control">
                      <button onClick={() => decreaseQty(item.id)} className="qty-button">−</button>
                      <div className="quantity">{cart[item.id]}</div>
                      <button onClick={() => increaseQty(item.id)} className="qty-button">+</button>
                    </div>
                  ) : (
                    <button className="order-button" onClick={() => addToCart(item)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
