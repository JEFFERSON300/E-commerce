import PropTypes from "prop-types";
import CardCartProductComponent from "../CardCartProduct/CardCartProduct.component";

export const SpaceCartProductsComponents = ({ productsCart, allProducts }) => {
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

    return (
      <>
        {informationProductsCart &&
          Array(numberItens.length)
            .fill(true)
            .map((_, i) => (
              <CardCartProductComponent
                key={i}
                image={informationProductsCart[i].images[0]}
                price={informationProductsCart[i].price}
                description={informationProductsCart[i].description}
                numberItens={numberItens[i]}
              />
            ))}
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {productsCart.length > 0 ? getNumberItens() : <p>Nenhum Produto</p>}
    </div>
  );
};

SpaceCartProductsComponents.propTypes = {
  allProducts: PropTypes.object,
  productsCart: PropTypes.array,
};
