import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Register from './components/Account/Register';
import Dummy from './components/Dummy';
import Login from './components/Account/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />


        <Route path="/dummy" element={<Dummy/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
