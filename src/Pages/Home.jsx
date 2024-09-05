import React, { useEffect, useState } from 'react';
import '../App.css'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch the products data from the JSON file
  useEffect(() => {
    fetch('/assests/data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const existingOrder = orders.find(order => order.id === product.id);
    if (existingOrder) {
      // Increase quantity if already in cart
      setOrders(orders.map(order =>
        order.id === product.id ? { ...order, quantity: order.quantity + 1 } : order
      ));
    } else {
      // Add new product to cart
      setOrders([...orders, { ...product, quantity: 1, status: 'في السلة' }]);
    }
  };

  const updateOrderQuantity = (id, delta) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, quantity: order.quantity + delta } : order
    ).filter(order => order.quantity > 0)); // Remove product if quantity is 0
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const handleStatusChange = (id, event) => {
    updateOrderStatus(id, event.target.value);
  };
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Add the new product to the existing list
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <div>
      <h1>إدارة مبيعات السوبر ماركت</h1>
      {/* Display Available Products */}
      <h2>المنتجات المتاحة</h2>
      <table>
        <thead>
          <tr>
            <th>اسم المنتج</th>
            <th>السعر</th>
            <th>المخزون</th>
            <th>إضافة إلى السلة</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => addToCart(product)}>إضافة إلى السلة</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display Cart and Orders */}
      <h2>الطلبات الحالية</h2>
      {orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>اسم المنتج</th>
              <th>السعر</th>
              <th>الكمية</th>
              <th>الحالة</th>
              <th>تعديل الكمية</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.productName}</td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e)}
                  >
                    <option value="في السلة">في السلة</option>
                    <option value="مدفوع">مدفوع</option>
                    <option value="تم التوصيل">تم التوصيل</option>
                    <option value="ملغي">ملغي</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => updateOrderQuantity(order.id, 1)}>+</button>
                  <button onClick={() => updateOrderQuantity(order.id, -1)}>-</button>
                </td>
                <td>
                  <button onClick={() => updateOrderStatus(order.id, 'ملغي')}>إلغاء</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>لا توجد طلبات حاليًا</p>
      )}
     
    </div>
  );
};

export default Home;
