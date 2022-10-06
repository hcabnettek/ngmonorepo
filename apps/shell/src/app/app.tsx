import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const About = React.lazy(() => import('about/Module'));

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Foam</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Foam</h1>} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
