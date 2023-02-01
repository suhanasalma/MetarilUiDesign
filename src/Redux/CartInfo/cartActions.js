import {
  ADDTOCART,
  DECREASEFROMCART,
  INCREASEFROMCART,
  REMOVEITEM,
} from "./cartConstance";


const addToCart = (item) => {
  return {
    type: ADDTOCART,
    payload: item,
  };
};

const decreaseFromCart = (item) => {
  return {
    type: DECREASEFROMCART,
    payload: item,
  };
};
const increaseFromCart = (item) => {
  return {
    type: INCREASEFROMCART,
    payload: item,
  };
};

const removeItem = (item) => {
  return {
    type: REMOVEITEM,
    payload: item,
  };
};

export { addToCart, decreaseFromCart, increaseFromCart, removeItem };
