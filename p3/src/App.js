
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Menu from './pages/menu'
import Cart from './pages/cart'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
