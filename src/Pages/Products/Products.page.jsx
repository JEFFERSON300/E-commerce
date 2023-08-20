import { useEffect, useState } from "react";
import { ServiceAPI } from "../../services/Products.service";
import SpaceProductsComponent from "../../Components/SpaceProducts/SpaceProducts.component";
import NavBarComponent from "../../Components/NavBar/NavBar.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

export const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  const { productsCart, setProductsCart } = useContext(CartContext);

  const callback = (payload) => {
    setProductsCart((arr) => [...arr, payload]);
  };

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <div>
      {products && (
        <NavBarComponent
          itemCount={productsCart.length > 0 ? productsCart.length : null}
          allProducts={products}
        />
      )}

      <div style={{ display: "flex", flexDirection: "row" }}>
        {products && (
          <SpaceProductsComponent allProducts={products} callback={callback} />
        )}
      </div>
    </div>
  );
};
