import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const CartContext = createContext({
  productsCart: [],
  setProductsCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ productsCart, setProductsCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
