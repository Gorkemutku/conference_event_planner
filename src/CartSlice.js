import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, category } = action.payload;
      const existingItem = state.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          id,
          name,
          price,
          image,
          category,
          quantity: 1
        });
      }
    },
    
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    
    clearCart: (state) => {
      return [];
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = CartSlice.actions;

export default CartSlice.reducer;
