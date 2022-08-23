import './App.css';
import Accessories from './components/Accessories';
import Nav from './components/Nav';
import {Routes , Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './Cart';
import {CartProvider} from "react-use-cart"
import { useState } from 'react';

function App() {
  const [cart , setCart] = useState(false);
  return (
    <div className="App">
      <CartProvider>
      <Nav/>
      <i class="fa-solid fa-user-vneck-hair"></i>
      <button onClick={()=>setCart(true)} className='cart'><i class="fa-solid fa-cart-arrow-down"></i>cart</button>
      {cart ?<Cart/>: null}
      <Routes>
        <Route path='/'  element={<Home/>}/>
      <Route path='/store/Accessories'  element={<Accessories/>}/>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
