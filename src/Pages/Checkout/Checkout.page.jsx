import NavBarCheckoutComponent from "../../Components/NavBarCheckout/NavBarChekout.component";
import { CardCheckoutComponent } from "../../Components/CardCheckout/CardCheckout.component";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/Cart.context";
import { ServiceAPI } from "../../services/Products.service";
import { useEffect, useState, useContext } from "react";

export const CheckoutPage = () => {
  const { productsCart, setProductsCart } = useContext(CartContext);
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      const res = await ServiceAPI.GetpProducts();
      setProducts(res);
    })();
  }, []);
  const getNumberItens = () => {
    const countMoreOneProduct = {};

    productsCart.forEach((element) => {
      countMoreOneProduct[element] = (countMoreOneProduct[element] || 0) + 1;
    });

    let informationProductsCart = [];
    let numberItens = [];

    products && Object.keys(countMoreOneProduct).forEach(showCartProducts);

    function showCartProducts(key) {
      const tempNumberItens = countMoreOneProduct[key];
      numberItens.push(tempNumberItens);
      const tempProduct = products.products.find((item) => item.id == key);
      informationProductsCart.push(tempProduct);
    }
    let totalPrice = 0;
    numberItens.map(
      (x, index) =>
        (totalPrice = totalPrice + x * informationProductsCart[index].price)
    );
    return <> {totalPrice}</>;
  };

  return (
    <>
      <NavBarCheckoutComponent />
      {console.log(productsCart)}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "75vw",
            height: "100vh",
            padding: "8rem 12rem",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>Como você prefere pagar?</h2>
          <CardCheckoutComponent name="Cartão de Crédito" option={1} />
          <CardCheckoutComponent name="Cartão de Débito" option={2} />
          <CardCheckoutComponent name="Pix" option={3} />
          <CardCheckoutComponent name="Boleto" option={4} />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              style={{
                width: "300px",
                height: "50px",
                marginTop: "2rem",
                alignItems: "end",
              }}
            >
              Realizar Pagamento
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "25vw",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#b6b7b9",
            padding: "8rem 0",
          }}
        >
          <div>
            <h5>Quantidade: {productsCart && productsCart.length} </h5>
            <hr
              style={{ width: "80%", margin: "auto", marginTop: "2rem" }}
            ></hr>
            <hr
              style={{ width: "80%", margin: "auto", marginTop: "1.5rem" }}
            ></hr>
            <h3 style={{ marginTop: "1.5rem" }}>
              Valor Total: USD{" "}
              {productsCart.length > 0 ? getNumberItens() : null}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
