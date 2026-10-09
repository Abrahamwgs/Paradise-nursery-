import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

/**
 * Displays one plant in the shopping cart.
 * Expected item shape: { id, name, price, thumbnail, quantity }
 */
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const handleQuantityChange = (quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  const subtotal = Number(item.price) * Number(item.quantity);

  return (
    <article style={styles.item}>
      <img src={item.thumbnail} alt={item.name} style={styles.image} />

      <div style={styles.details}>
        <h3 style={styles.name}>{item.name}</h3>
        <p style={styles.price}>${Number(item.price).toFixed(2)} each</p>

        <div style={styles.quantityRow}>
          <span style={styles.quantityLabel}>Quantity:</span>
          <button
            type="button"
            onClick={() => handleQuantityChange(Number(item.quantity) - 1)}
            disabled={Number(item.quantity) <= 1}
            aria-label={`Decrease ${item.name} quantity`}
            style={styles.quantityButton}
          >
            −
          </button>
          <span aria-live="polite" style={styles.quantity}>{item.quantity}</span>
          <button
            type="button"
            onClick={() => handleQuantityChange(Number(item.quantity) + 1)}
            aria-label={`Increase ${item.name} quantity`}
            style={styles.quantityButton}
          >
            +
          </button>
        </div>

        <p style={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</p>
      </div>

      <button
        type="button"
        onClick={() => dispatch(removeItem(item.id))}
        aria-label={`Remove ${item.name} from cart`}
        style={styles.removeButton}
      >
        Remove
      </button>
    </article>
  );
};

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    marginBottom: '12px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    flexWrap: 'wrap',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0,
  },
  details: { flex: '1 1 180px' },
  name: { margin: '0 0 6px', color: '#245b2a' },
  price: { margin: '0 0 10px', color: '#555' },
  quantityRow: { display: 'flex', alignItems: 'center', gap: '10px' },
  quantityLabel: { fontSize: '14px', color: '#444' },
  quantityButton: {
    width: '30px',
    height: '30px',
    border: '1px solid #2e7d32',
    borderRadius: '5px',
    backgroundColor: '#f1f8f1',
    color: '#2e7d32',
    fontSize: '18px',
    cursor: 'pointer',
  },
  quantity: { minWidth: '18px', textAlign: 'center', fontWeight: 'bold' },
  subtotal: { margin: '10px 0 0', fontWeight: 'bold', color: '#222' },
  removeButton: {
    border: 'none',
    borderRadius: '5px',
    padding: '9px 12px',
    backgroundColor: '#c62828',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default CartItem;
