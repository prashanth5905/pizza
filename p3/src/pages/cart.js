// import React from 'react';
// import { useCart } from '../CartContext';
// import data from './data.json';
// import './Cart.css'
// const Cart = () => {
//   const { cart, increaseQty, decreaseQty } = useCart();

//   const itemsInCart = data.data.filter((item) => cart[item.id]);

//   const grandTotal = itemsInCart.reduce((sum, item) => {
//     return sum + item.unitPrice * cart[item.id];
//   }, 0);

//   return (
//     <>
//       <div className='cartPage'></div>
//         <h1>Cart</h1>
//         {itemsInCart.length === 0 ? (
//           <p className='empty_message'>Your cart is empty.</p>
//         ) : (
//           <div className='cartblock'>
//             {itemsInCart.map((item) => (
              
//               <div key={item.id} className='itemblock'>
//                 <div>
//                   <img src={item.imageUrl} alt='pizza_image' />
//                 </div>
//                 <div>
//                   <h3>{item.name}</h3>
//                   <p>Price: ${item.unitPrice}</p>
//                   <div className='cartbutton'>
//                     <button onClick={() => decreaseQty(item.id)} className="qty-button">−</button>
//                     <span>{cart[item.id]}</span>
//                     <button onClick={() => increaseQty(item.id)} className="qty-button">+</button>
//                   </div>
//                   <p>Subtotal: ${item.unitPrice * cart[item.id]}</p>
//                 </div>
//               </div>
//             ))}
//             <h2>Total: ${grandTotal}</h2>
//           </div>
//         )}
      
//     </>
//   );
// };

// export default Cart;
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import data from './data.json';
import FeedbackForm from './feedback';
import './Cart.css';

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const [showFeedback, setShowFeedback] = useState(false);

  const itemsInCart = data.data.filter((item) => cart[item.id]);

  const grandTotal = itemsInCart.reduce((sum, item) => {
    return sum + item.unitPrice * cart[item.id];
  }, 0);

  return (
    <>
      <div className='cartPage'>
        <h1 className='title'>Cart</h1>
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
        {/* Feedback shortcut button */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button className="feedback-shortcut" onClick={() => setShowFeedback(true)}>
            Give Feedback
          </button>
        </div>
        {/* Feedback modal */}
        {showFeedback && (
          <div className="feedback-modal">
            <div className="feedback-modal-content">
              <button className="close-modal" onClick={() => setShowFeedback(false)}>X</button>
              <h2>We value your feedback!</h2>
              <FeedbackForm />
            </div>
            <div className="feedback-modal-backdrop" onClick={() => setShowFeedback(false)}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
