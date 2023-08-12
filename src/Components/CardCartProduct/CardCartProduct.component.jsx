import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

export default function CardCartProductComponent({
  image,
  price,
  description,
  numberItens,
}) {
  const [itemCount, setItemCount] = useState(numberItens);

  return (
    <>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "2rem",
        }}
        sx={{ maxWidth: "60%" }}
      >
        <CardMedia
          sx={{ width: "20%" }}
          component="img"
          height={200}
          image={image}
          alt=""
        />
        <CardContent sx={{ width: "35%" }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <div style={{ width: "15%" }}>
          <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <TextField sx={{ width: "30%" }} size={"small"} value={itemCount} />
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <CardContent sx={{ width: "20%" }}>
          <Typography gutterBottom variant="h5" component="div">
            USD {price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

CardCartProductComponent.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  numberItens: PropTypes.number,
};
