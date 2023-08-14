import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardSumProductsComponent = ({ productsCart, allProducts }) => {
  const getNumberItens = () => {
    const countMoreOneProduct = {};

    productsCart.forEach((element) => {
      countMoreOneProduct[element] = (countMoreOneProduct[element] || 0) + 1;
    });

    let informationProductsCart = [];
    let numberItens = [];

    Object.keys(countMoreOneProduct).forEach(showCartProducts);

    function showCartProducts(key) {
      const tempNumberItens = countMoreOneProduct[key];
      numberItens.push(tempNumberItens);
      const tempProduct = allProducts.products.find((item) => item.id == key);
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
      <Card
        style={{ display: "flex", flexDirection: "column" }}
        sx={{ width: "400px", height: "300px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Resumo da Compra
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Total USD
            {productsCart.length > 0 ? getNumberItens() : null}
          </Typography>
        </CardContent>

        <Link style={{ margin: "1rem" }} to={"/produtos"}>
          <Button
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Continuar Comprando
          </Button>
        </Link>

        <Link style={{ margin: "1rem" }} to={"/checkout"}>
          <Button
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            Finalizar a Compra
          </Button>
        </Link>
      </Card>
    </>
  );
};

CardSumProductsComponent.propTypes = {
  productsCart: PropTypes.array,
  allProducts: PropTypes.object,
};
