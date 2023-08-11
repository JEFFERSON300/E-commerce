import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBarComponent() {
  const change = (event) => {
    const nameSeacrh = event.target.value;
  };

  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "2rem" }} href="#home">
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
            onChange={change}
            type="search"
            placeholder="Filtrar Produtos"
            aria-label="Search"
            size="lg"
          />
          <Button variant="outline-primary">Pesquisar</Button>
        </Form>

        <Navbar.Brand style={{ marginRight: "2rem" }} href="#">
          <AiOutlineShoppingCart size={"3rem"} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
