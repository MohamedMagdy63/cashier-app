import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import SignUp from './Pages/SignUp';
import Login from './Pages/LoginPage';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">إدارة المنتجات</Link></li>
            <li><Link to="/update-product">تحديث منتج</Link></li>
            <li><Link to="/add-product">إضافة منتج</Link></li>
            <li><Link to="/sign-up">تسجيل حساب</Link></li>
            <li><Link to="/login">تسجيل الدخول</Link></li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
