import { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? "in-cart" : ""}>
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <span className="category">{category}</span>
      </div>
      <button 
        className={inCart ? "in-cart-btn" : ""}
        onClick={() => setInCart(!inCart)}
      >
        {inCart ? "✓ In Cart" : "+ Add to Cart"}
      </button>
    </li>
  );
}

export default Item;