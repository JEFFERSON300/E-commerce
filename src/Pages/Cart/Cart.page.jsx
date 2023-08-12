import NavBarCartComponent from "../../Components/NavBarCart/NavBarCart.component";
import { TestCartComponent } from "../../Components/testeCart/testCart.component";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const CartPage = () => {
  const location = useLocation();
  const fromProductPage = location.state?.fromProductPage;

  return (
    <>
      <NavBarCartComponent itemCount={fromProductPage} />
      <TestCartComponent />
      {console.log(fromProductPage)}
    </>
  );
};

CartPage.propTypes = {
  itemCount: PropTypes.number,
};
