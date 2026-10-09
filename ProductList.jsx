import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import AboutUs from './AboutUs';

const plantCatalog = [
  {
    category: 'Air Purifying',
    plants: [
      { id: 1, name: 'Snake Plant', price: 15, thumbnail: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200' },
      { id: 2, name: 'Spider Plant', price: 12, thumbnail: 'https://images.unsplash.com/photo-1512428813824-f713c2411abb?w=200' },
      { id: 3, name: 'Peace Lily', price: 18, thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?w=200' },
      { id: 4, name: 'Aloe Vera', price: 10, thumbnail: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=200' },
      { id: 5, name: 'Boston Fern', price: 14, thumbnail: 'https://images.unsplash.com/photo-1517178304245-6320df6e680a?w=200' },
      { id: 6, name: 'English Ivy', price: 11, thumbnail: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=200' }
    ]
  },
  {
    category: 'Low Maintenance',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 22, thumbnail: 'https://images.unsplash.com/photo-1632207191173-62d7e5595c5c?w=200' },
      { id: 8, name: 'Pothos', price: 13, thumbnail: 'https://images.unsplash.com/photo-1598880940375-4a4eafb0e70a?w=200' },
      { id: 9, name: 'Cast Iron Plant', price: 25, thumbnail: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=200' },
      { id: 10, name: 'Chinese Evergreen', price: 16, thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
      { id: 11, name: 'Jade Plant', price: 14, thumbnail: 'https://images.unsplash.com/photo-1509423424749-3741cbb14a70?w=200' },
      { id: 12, name: 'Succulent Mix', price: 8, thumbnail: 'https://images.unsplash.com/photo-1509233631037-bee7a315cbd3?w=200' }
    ]
  },
  {
    category: 'Aromatic & Flowering',
    plants: [
      { id: 13, name: 'Lavender', price: 16, thumbnail: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=200' },
      { id: 14, name: 'Jasmine', price: 20, thumbnail: 'https://images.unsplash.com/photo-1508747703725-719ae257c26a?w=200' },
      { id: 15, name: 'Orchid', price: 30, thumbnail: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=200' },
      { id: 16, name: 'Gardenia', price: 24, thumbnail: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200' },
      { id: 17, name: 'Rosemary', price: 12, thumbnail: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e2?w=200' },
      { id: 18, name: 'Mint Plant', price: 9, thumbnail: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=200' }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#2e7d32', color: '#fff', borderRadius: '8px' }}>
        <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '18px' }}>
          <span>Home</span>
          <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Plants</span>
          <span>Cart ({totalItemsCount})</span>
        </div>
      </nav>

      <AboutUs />

      {/* Catalog Display */}
      {plantCatalog.map((cat, idx) => (
        <div key={idx} style={{ marginTop: '40px' }}>
          <h3 style={{ borderBottom: '2px solid #2e7d32', color: '#2e7d32', paddingBottom: '5px' }}>{cat.category}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px', marginTop: '20px' }}>
            {cat.plants.map(plant => {
              const isInCart = cartItems.some(item => item.id === plant.id);
              return (
                <div key={plant.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  <img src={plant.thumbnail} alt={plant.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                  <h4 style={{ margin: '10px 0 5px 0' }}>{plant.name}</h4>
                  <p style={{ fontWeight: 'bold', margin: '0 0 15px 0' }}>${plant.price}</p>
                  <button 
                    disabled={isInCart} 
                    onClick={() => handleAddToCart(plant)}
                    style={{
                      backgroundColor: isInCart ? '#cccccc' : '#4caf50',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: isInCart ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
