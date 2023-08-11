import { useEffect, useState } from "react";
import { ServiceAPI } from "../../services/Products.service";
import SpaceProductsComponent from "../../Components/SpaceProducts/SpaceProducts.component";
import NavBarComponent from "../../Components/NavBar/NavBar.component";

export const ProductsPage = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  const callback = (payload) => {
    setCart((arr) => [...arr, payload]);
  };

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <div>
      <NavBarComponent />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {products && (
          <SpaceProductsComponent allProducts={products} callback={callback} />
        )}
      </div>
    </div>
  );
};
