import NavBarCartComponent from "../../Components/NavBarCart/NavBarCart.component";
import { TestCartComponent } from "../../Components/testeCart/testCart.component";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

export const CartPage = () => {
  const { productsCart } = useContext(CartContext);

  return (
    <>
      <NavBarCartComponent itemCount={productsCart.length} />
      <TestCartComponent />
      <Link style={{ textDecoration: "none" }} to={"/produtos"}>
        <button style={{ marginTop: "5rem" }}>Continuar Comprando</button>
      </Link>
      <p>Produtos no carrinho:{productsCart.length}</p>
    </>
  );
};

CartPage.propTypes = {
  itemCount: PropTypes.number,
};
