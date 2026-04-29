import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [addedItems, setAddedItems] = useState({});

  const plants = [
    // Succulents
    {
      id: 1,
      name: 'Jade Plant',
      price: 15.99,
      category: 'Succulents',
      image: '🌿',
      description: 'Low-maintenance succulent with thick, glossy leaves'
    },
    {
      id: 2,
      name: 'Aloe Vera',
      price: 12.99,
      category: 'Succulents',
      image: '🌵',
      description: 'Perfect for healing and air purification'
    },
    {
      id: 3,
      name: 'Echeveria',
      price: 10.99,
      category: 'Succulents',
      image: '🌹',
      description: 'Beautiful rosette-shaped succulent'
    },
    // Tropical Plants
    {
      id: 4,
      name: 'Monstera Deliciosa',
      price: 29.99,
      category: 'Tropical Plants',
      image: '🌴',
      description: 'Large, striking leaves with natural splits'
    },
    {
      id: 5,
      name: 'Pothos',
      price: 13.99,
      category: 'Tropical Plants',
      image: '🌱',
      description: 'Fast-growing vine, great for beginners'
    },
    {
      id: 6,
      name: 'Philodendron',
      price: 22.99,
      category: 'Tropical Plants',
      image: '🌿',
      description: 'Heart-shaped leaves, easy to care for'
    },
    // Low-Light Plants
    {
      id: 7,
      name: 'Snake Plant',
      price: 18.99,
      category: 'Low-Light Plants',
      image: '🏜️',
      description: 'Extremely hardy, thrives in low light'
    },
    {
      id: 8,
      name: 'Peace Lily',
      price: 19.99,
      category: 'Low-Light Plants',
      image: '🤍',
      description: 'Elegant white flowers, loves humidity'
    },
    {
      id: 9,
      name: 'ZZ Plant',
      price: 24.99,
      category: 'Low-Light Plants',
      image: '💚',
      description: 'Glossy leaves, extremely resilient'
    }
  ];

  const categories = ['Succulents', 'Tropical Plants', 'Low-Light Plants'];

  const handleAddToCart = (plant) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
      category: plant.category
    }));
    
    setAddedItems(prev => ({
      ...prev,
      [plant.id]: true
    }));
  };

  const isItemInCart = (plantId) => {
    return cart.some(item => item.id === plantId) || addedItems[plantId];
  };

  return (
    <div className="product_list_container">
      <div className="product_header">
        <h1>🌺 Paradise Nursery - Plant Collection</h1>
        <p>Discover our beautiful selection of indoor plants</p>
      </div>

      {categories.map(category => (
        <div key={category} className="category_section">
          <h2 className="category_title">{category}</h2>
          <div className="products_grid">
            {plants.filter(plant => plant.category === category).map(plant => (
              <div key={plant.id} className="product_card">
                <div className="product_image">{plant.image}</div>
                <h3 className="product_name">{plant.name}</h3>
                <p className="product_description">{plant.description}</p>
                <div className="product_price">${plant.price.toFixed(2)}</div>
                <button
                  className={`add_to_cart_btn ${isItemInCart(plant.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isItemInCart(plant.id)}
                >
                  {isItemInCart(plant.id) ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
