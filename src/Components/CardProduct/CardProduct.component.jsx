import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

export default function CardProductComponent({
  image,
  price,
  description,
  callback,
  id,
}) {
  const handleCallBack = () => callback(id);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={handleCallBack}>
        <CardMedia component="img" height={300} image={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            USD {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CardProductComponent.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  callback: PropTypes.func,
  id: PropTypes.number,
};
