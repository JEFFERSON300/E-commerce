import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardSumProductsComponent = () => {
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
            Total
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
