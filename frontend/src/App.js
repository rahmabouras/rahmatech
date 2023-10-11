import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [category, setCategory] = useState('Electronics');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null); 
    axios.get(`http://localhost:8080/products/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError('An error occurred while fetching data');
      });
  }, [category]);

  return (
    <div className="app-container">
      <header>
        <h1>Awesome Product List</h1>
      </header>
      <div className="content">
        <div className="category-input">
          <label>
            Select Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>
        <div className="product-list">
          {error ? (
            <p className="error">Error: {error}</p>
          ) : products.length === 0 ? (
            <p className="no-products">No products available</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li key={product.id} className="product-item">
                  <span className="product-name">{product.name}</span> -
                  <span className="product-stock">{product.stock} available</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
