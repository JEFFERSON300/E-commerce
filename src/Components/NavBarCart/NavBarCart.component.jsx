import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";

function NavBarCartComponent({ itemCount }) {
  return (
    <Navbar className="bg-body-tertiary" fixed="top" expand="lg">
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

        <Navbar.Brand style={{ marginRight: "2rem" }}>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon fontSize="large" />{" "}
          </Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

NavBarCartComponent.propTypes = {
  itemCount: PropTypes.number,
};
export default NavBarCartComponent;
