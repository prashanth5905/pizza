import { CartProvider } from './CartContext';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Menu from './pages/menu'
import Cart from './pages/cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
