import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

function NavBarCheckoutComponent({ itemCount }) {
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
      </Container>
    </Navbar>
  );
}

NavBarCheckoutComponent.propTypes = {
  itemCount: PropTypes.number,
};
export default NavBarCheckoutComponent;
