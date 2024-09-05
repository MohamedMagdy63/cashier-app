import React, { useState } from 'react';
import '../App.css'

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!productName || !price || !stock) {
      setError('يجب ملء جميع الحقول');
      return;
    }

    const newProduct = {
      id: Date.now(),
      productName,
      price: parseFloat(price),
      stock: parseInt(stock)
    };

    // Call the parent function to add the product
    onAddProduct(newProduct);

    // Clear the form after submission
    setProductName('');
    setPrice('');
    setStock('');
    setError('');
  };

  return (
    <div className="add-product-container">
      <h2>إضافة منتج جديد</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>اسم المنتج:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="أدخل اسم المنتج"
          />
        </div>
        <div className="form-group">
          <label>السعر:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="أدخل السعر"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>المخزون:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="أدخل كمية المخزون"
            min="0"
          />
        </div>
        <button type="submit">إضافة المنتج</button>
      </form>
    </div>
  );
};

export default AddProduct;
