import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Register from './components/Account/Register';
import Dummy from './components/Dummy';
import Login from './components/Account/Login';
import Product from './components/Products/Product';
import Cart from './components/Cart';
import User from './components/Account/User';
import Details from './components/Account/Details';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/details" element={<Details />} />
        <Route path="/products/:_id" element={<Product />} />


        <Route path="/cart/:userId" element={<Cart />} />
        <Route path="/dummy" element={<Dummy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
