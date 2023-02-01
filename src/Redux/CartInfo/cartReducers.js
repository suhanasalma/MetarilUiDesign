import { ADDTOCART } from "./cartConstance";

const initialCarts = [
  //   { id: 3, name: "Dell E1916HV 18.5 Inch", quantity: 35, price: 9300 }
];

export const cartReducers = (state = initialCarts, action) => {
  switch (action.type) {
    case ADDTOCART:
      const item = state.find((product) => product.id === action.payload.id);
      if (!item) {
        const newProduct = {...action.payload}
        newProduct.quantity = 1
        return [...state, newProduct];
      } else {
        item.quantity = item.quantity += 1;
        return [...state];
      }
    // ;

    default:
      return state;
  }
};
