import React from 'react';
import { useCart } from '../CartContext';
import data from './data.json';

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();

  const itemsInCart = data.data.filter((item) => cart[item.id]);

  const grandTotal = itemsInCart.reduce((sum, item) => {
    return sum + item.unitPrice * cart[item.id];
  }, 0);

  return (
    <>
      <h1>Cart</h1>
      {itemsInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ padding: '20px' }}>
          {itemsInCart.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.unitPrice}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => decreaseQty(item.id)} className="qty-button">−</button>
                <span>{cart[item.id]}</span>
                <button onClick={() => increaseQty(item.id)} className="qty-button">+</button>
              </div>
              <p>Subtotal: ${item.unitPrice * cart[item.id]}</p>
            </div>
          ))}
          <h2>Total: ${grandTotal}</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
