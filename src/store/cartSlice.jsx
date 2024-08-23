import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (array, id) =>
  array.findIndex((existingItem) => existingItem.id === id)


const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items:[],
    wishlist:[],
  },
  
reducers: {
    // add(state, action) {
    //   const existingItem = state.find(item => item.id === action.payload.id);
    //   if (existingItem) {
    //     // If item already exists in the cart, increase the quantity
    //     existingItem.quantity += 1;
    //   } else {
    //     // Otherwise, add new item with quantity 1
    //     state.push({ ...action.payload, quantity: 1 });
    //   }
    // },
    add(state, action){
     
     const existingItemIndex = findItemIndex(state.items, action.payload.id)
      if (existingItemIndex !== -1) 
        state.items[existingItemIndex].quantity += 1;
      else 
      state.items.push({...action.payload, quantity: 1})
    },

    remove(state, action) {
    
      state.items= state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action){
    
      const item =state.items.find(item => item.id === action.payload);
      if(item){
        item.quantity +=1;
      }
    },
    decreaseQuantity(state,action){
  
      const item = state.items.find(item =>item.id===action.payload);
      if(item && item.quantity>1){
        item.quantity -= 1;
      }
    },
    addWishList(state,action){
      
      const existingItem = state.wishlist.find(item => item.id === action.payload.id);
      if(!existingItem){
        state.wishlist.push(action.payload)
      }
      
    },
    removeWishList(state,action){

      state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
    },
  
    addToCart(state,action){
      const existingItemIndex = findItemIndex(state.items, action.payload.id)
      if(existingItemIndex !== -1){
        state.items[existingItemIndex].quantity +=1;
        }
      else{
        state.items.push({...action.payload, quantity:1})
      }
      state.wishlist= state.wishlist.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { add, remove ,increaseQuantity, decreaseQuantity,addWishList,removeWishList,addToCart } = cartSlice.actions;
export default cartSlice.reducer;
