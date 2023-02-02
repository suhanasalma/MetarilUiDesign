import { ADDTOCART, DECREASEFROMCART, INCREASEFROMCART, REMOVEITEM } from "./cartConstance";


const carts = localStorage.getItem('mycart')!==null?JSON.parse(localStorage.getItem('mycart')):[]
// const initialCarts = [
//   //   { id: 3, name: "Dell E1916HV 18.5 Inch", quantity: 35, price: 9300 }
// ];
console.log(carts);
const initialCarts = carts

export const cartReducers = (state = initialCarts, action) => {
  switch (action.type) {
    case ADDTOCART:
      const item = state.find((product) => product.id === action.payload.id);
      if (!item) {
        const newProduct = {...action.payload}
        newProduct.quantity = 1
        const cartProducts =  [...state, newProduct]
        localStorage.setItem('mycart',JSON.stringify(cartProducts))
        return [...state, newProduct];
        
      } else {

        item.quantity = item.quantity += 1;
        const newCart = [...state]
        localStorage.setItem ('mycart',JSON.stringify(newCart))
        return [...state];
       
      }
      case DECREASEFROMCART:
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
    
      const newCart =  state.filter(item=>item.id!==action.payload.id)
      localStorage.setItem ('mycart',JSON.stringify(newCart))
      return newCart
      
    

    default:
      return state;
  }
};
