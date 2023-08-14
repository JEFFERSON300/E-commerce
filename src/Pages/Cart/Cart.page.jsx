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

  const callback = (id, numberItems, itemsCount) => {
    if (itemsCount < numberItems) {
      let remove = id;
      let cont = 0;
      for (let i = productsCart.length - 1; i >= 0; i--) {
        if (productsCart[i] === remove) {
          productsCart.splice(i, 1);
          cont = cont + 1;
          if (cont === numberItems - itemsCount) {
            setProductsCart((arr) => [...arr]);
            break;
          }
        }
      }
    } else {
      setProductsCart((arr) => [...arr, id]);
    }
  };

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
              callback={callback}
            />
          )}
        </div>
        <div style={{ width: "25vw", height: "100vh" }}>
          {productsCart && products && (
            <CardSumProductsComponent
              productsCart={productsCart}
              allProducts={products}
            />
          )}
        </div>
        {console.log(productsCart)}
      </div>
    </>
  );
};

CartPage.propTypes = {
  itemCount: PropTypes.number,
};
