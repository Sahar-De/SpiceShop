import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,

};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem)
      const existingItem = state.items.find(item => item.idMeal === newItem.idMeal);

      if (!existingItem) {
        state.items.push({
          idMeal: newItem.idMeal,
          strMeal: newItem.strMeal,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          strMealThumb: newItem.strMealThumb
        });

      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
      console.log(state.items)
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.idMeal === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.idMeal !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.idMeal === id);

      if (existingItem) {
        state.items = state.items.filter(item => item.idMeal !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;  