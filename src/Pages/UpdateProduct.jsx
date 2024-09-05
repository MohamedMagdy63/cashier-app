import React, { useState } from 'react';
import '../App.css'

const UpdateProduct = ({ products, onUpdateProduct }) => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');

  // Handle product selection
  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProductId(productId);

    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
      setProductName(product.productName);
      setPrice(product.price);
      setStock(product.stock);
      setError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price || !stock) {
      setError('يجب ملء جميع الحقول');
      return;
    }

    const updatedProduct = {
      id: parseInt(selectedProductId),
      productName,
      price: parseFloat(price),
      stock: parseInt(stock)
    };

    onUpdateProduct(updatedProduct);

    // Clear the form
    setProductName('');
    setPrice('');
    setStock('');
    setSelectedProductId('');
  };

  return (
    <div className="update-product-container">
      <h2>تحديث المنتج</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>اختر المنتج لتحديثه:</label>
          <select value={selectedProductId} onChange={handleProductSelect}>
            <option value="">اختر المنتج</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.productName}
              </option>
            ))}
          </select>
        </div>

        {selectedProductId && (
          <>
            <div className="form-group">
              <label>اسم المنتج:</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>السعر:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
              />
            </div>
            <div className="form-group">
              <label>المخزون:</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                min="0"
              />
            </div>
            <button type="submit">تحديث المنتج</button>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateProduct;
