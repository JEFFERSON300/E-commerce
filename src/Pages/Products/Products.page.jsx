import { useEffect, useState } from "react";
import { ServiceAPI } from "../../services/Products.service";
import SpaceProductsComponent from "../../Components/SpaceProducts/SpaceProducts.component";

export const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {products && <SpaceProductsComponent allProducts={products} />}
    </div>
  );
};
