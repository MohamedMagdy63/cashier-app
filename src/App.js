import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">إدارة المنتجات</Link></li>
            <li><Link to="/update-product">تحديث منتج</Link></li>
            <li><Link to="/add-product">إضافة منتج</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
