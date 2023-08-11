import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function CardProductComponent({
  image,
  price,
  description,
  callback,
  id,
}) {
  const handleCallBack = () => callback(id);

  return (
    <>
      <Card
        style={{ display: "flex", flexDirection: "column" }}
        sx={{ width: 300 }}
      >
        <CardMedia component="img" height={300} image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            USD {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" height={70}>
            {description}
          </Typography>
        </CardContent>
        <Button
          style={{
            margin: "1rem",
            textAlign: "center",
            justifyContent: "center",
          }}
          onClick={handleCallBack}
        >
          Adicionar ao Carrinho
        </Button>
      </Card>
    </>
  );
}

CardProductComponent.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  callback: PropTypes.func,
  id: PropTypes.number,
};
