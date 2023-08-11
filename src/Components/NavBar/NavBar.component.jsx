import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBarComponent() {
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

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Filtrar Produtos"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Pesquisar</Button>
        </Form>

        <Navbar.Brand href="#">
          <AiOutlineShoppingCart size={"3rem"} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
