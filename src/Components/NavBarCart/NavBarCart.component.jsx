import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBarCartComponent() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo.png"
            width="100"
            height="80"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Brand href="#">
          <AiOutlineShoppingCart size={"3rem"} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarCartComponent;
