import NavBarCartComponent from "../../Components/NavBarCart/NavBarCart.component";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Cart.context";
import { ServiceAPI } from "../../services/Products.service";
import { SpaceCartProductsComponents } from "../../Components/SpaceCartProducts/SpaceCartProducts.components";
import { CardSumProductsComponent } from "../../Components/CardSumProducts/CardsSumProducts.component";

export const CartPage = () => {
  const [products, setProducts] = useState();
  const { productsCart, setProductsCart } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <>
      <NavBarCartComponent itemCount={productsCart.length} />
      <div style={{ display: "flex", margin: "8rem 2rem" }}>
        <div style={{ width: "75vw", height: "100vh" }}>
          {productsCart && products && (
            <SpaceCartProductsComponents
              productsCart={productsCart}
              allProducts={products}
            />
          )}
        </div>
        <div style={{ width: "25vw", height: "100vh" }}>
          <CardSumProductsComponent />
        </div>
      </div>
    </>
  );
};

CartPage.propTypes = {
  itemCount: PropTypes.number,
};
