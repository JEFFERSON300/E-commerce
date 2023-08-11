import PropTypes from "prop-types";
import CardProductComponent from "../CardProduct/CardProduct.component";

function SpaceProductsComponent({ allProducts }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "2rem",
        margin: "8rem 2rem",
      }}
    >
      {allProducts.products.length > 0 ? (
        Array(allProducts.products.length)
          .fill(true)
          .map((_, i) => (
            <CardProductComponent
              key={allProducts.products[i].id}
              image={allProducts.products[i].images[0]}
              price={allProducts.products[i].price}
              description={allProducts.products[i].description}
            />
          ))
      ) : (
        <p>Nenhum Produto</p>
      )}
    </div>
  );
}

SpaceProductsComponent.propTypes = {
  allProducts: PropTypes.object,
};

export default SpaceProductsComponent;
