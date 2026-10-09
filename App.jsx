import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <h1 className="landing-title">Paradise Nursery</h1>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>Where Greens Meet Serenity</p>
          <button className="get-started-btn" onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
