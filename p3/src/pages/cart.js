import React from 'react';
import { useCart } from '../CartContext';
import data from './data.json';
import './Cart.css'
const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();

  const itemsInCart = data.data.filter((item) => cart[item.id]);

  const grandTotal = itemsInCart.reduce((sum, item) => {
    return sum + item.unitPrice * cart[item.id];
  }, 0);

  return (
    <>
      <div className='cartPage'></div>
        <h1>Cart</h1>
        {itemsInCart.length === 0 ? (
          <p className='empty_message'>Your cart is empty.</p>
        ) : (
          <div className='cartblock'>
            {itemsInCart.map((item) => (
              
              <div key={item.id} className='itemblock'>
                <div>
                  <img src={item.imageUrl} alt='pizza_image' />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.unitPrice}</p>
                  <div className='cartbutton'>
                    <button onClick={() => decreaseQty(item.id)} className="qty-button">−</button>
                    <span>{cart[item.id]}</span>
                    <button onClick={() => increaseQty(item.id)} className="qty-button">+</button>
                  </div>
                  <p>Subtotal: ${item.unitPrice * cart[item.id]}</p>
                </div>
              </div>
            ))}
            <h2>Total: ${grandTotal}</h2>
          </div>
        )}
      
    </>
  );
};

export default Cart;
