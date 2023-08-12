import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
function NavBarComponent({ itemCount }) {
  const change = (event) => {
    const nameSeacrh = event.target.value;
  };

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "2rem" }}>
          <img
            alt=""
            src="logo.png"
            width="100"
            height="80"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Form style={{ width: "40rem" }} className="d-flex">
          <Form.Control
            style={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0px",
            }}
            onChange={change}
            type="search"
            placeholder="Filtrar Produtos"
            aria-label="Search"
            size="lg"
          />
          <button
            style={{
              border: "solid 1px #DEE2E6",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <SearchIcon />
          </button>
        </Form>

        <Navbar.Brand style={{ marginRight: "2rem" }}>
          <Link to="/carrinho" state={{ fromProductPage: itemCount }}>
            <Badge color="secondary" badgeContent={itemCount}>
              <ShoppingCartIcon fontSize="large" />{" "}
            </Badge>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

NavBarComponent.propTypes = {
  itemCount: PropTypes.number,
};
export default NavBarComponent;
