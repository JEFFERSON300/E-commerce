import NavBarCartComponent from "../../Components/NavBarCart/NavBarCart.component";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Cart.context";
import CardCartProductComponent from "../../Components/CardCartProduct/CardCartProduct.component";
import { ServiceAPI } from "../../services/Products.service";

export const CartPage = () => {
  const [products, setProducts] = useState();
  const { productsCart, setProductsCart } = useContext(CartContext);
  const [showProduct, setShowProduct] = useState("");

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);

  const showProducts = () => {
    const countMoreOneProduct = {};

    productsCart.forEach((element) => {
      countMoreOneProduct[element] = (countMoreOneProduct[element] || 0) + 1;
    });

    Object.keys(countMoreOneProduct).forEach(showCartProducts);

    function showCartProducts(key) {
      const numberItens = countMoreOneProduct[key];
      console.log(key);
      console.log(typeof key);
      const ProductCart = products.products.find((item) => item.id == key);
      console.log(numberItens);
      console.log(ProductCart);
      // Criar componente com espaço para os cards
      // Juntar numberItens, price, description, image em um object e salvar em um state
    }

    return (
      <>
        <CardCartProductComponent
          image={""}
          price={13}
          description={"asdasdasdas"}
          numberItens={null}
        />
      </>
    );
  };

  const NothingProducts = () => {
    return <p>Nada</p>;
  };

  return (
    <>
      <NavBarCartComponent itemCount={productsCart.length} />
      <Link style={{ textDecoration: "none" }} to={"/produtos"}>
        <button style={{ marginTop: "10rem" }}>Continuar Comprando</button>
      </Link>
      <p>Produtos no carrinho:{productsCart.length}</p>

      {products && productsCart.length > 0 ? showProducts() : NothingProducts()}
    </>
  );
};

CartPage.propTypes = {
  itemCount: PropTypes.number,
};
