
import {
  ADDTOCART,
  DECREASEFROMCART,
  INCREASEFROMCART,
  REMOVEITEM,
} from "./cartConstance";
const localCart = localStorage.getItem('cart')!==null?JSON.parse(localStorage.getItem('cart')):[]
const initialCarts = localCart
// [
//   //   { id: 3, name: "Dell E1916HV 18.5 Inch", quantity: 35, price: 9300 }
// ];


export const cartReducers = (state = initialCarts, action) => {
  switch (action.type) {
    case ADDTOCART:
      const item = state.find((product) => product.id === action.payload.id);
      if (!item && action.payload.quantity>0) {
        const newProduct = { ...action.payload };

        newProduct.quantity = 1;
        localStorage.setItem('cart',JSON.stringify([...state, newProduct]))

        return [...state, newProduct];
      } else {
        return [...state];
      }
    case INCREASEFROMCART:
      localStorage.setItem('cart',JSON.stringify(state.map(item=>item.id === action.payload.id?{
        ...item,
        quantity: item.quantity + 1,
      }:item)))
      return state.map((item) => {
        if (item.id === action.payload.id) 
    
        
        { 
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    case DECREASEFROMCART:
      localStorage.setItem('cart',JSON.stringify(state.map(item=>item.id === action.payload.id?{
        ...item,
        quantity: item.quantity - 1,
      }:item)))
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

    case REMOVEITEM:
      localStorage.setItem('cart',JSON.stringify(state.filter((item) => item.id !== action.payload.id)))
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};
