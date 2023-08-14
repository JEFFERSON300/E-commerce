import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";

export const CardCheckoutComponent = ({ name, option }) => {
  if (option === 1 || option === 2) {
    return (
      <div>
        <Card
          sx={{
            width: "100%",
            height: "20%",
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FormControl
            sx={{
              width: "10%",
              marginLeft: "2rem",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="creditecard" control={<Radio />} />
            </RadioGroup>
          </FormControl>

          <CardMedia
            sx={{ width: "10%" }}
            component="img"
            width={"40px"}
            image={"mastercard.jpeg"}
            alt=""
          />
          <CardContent sx={{ width: "50%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
  if (option === 3) {
    return (
      <div>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FormControl
            sx={{
              width: "10%",
              marginLeft: "2rem",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="pix" control={<Radio />} />
            </RadioGroup>
          </FormControl>

          <CardMedia
            sx={{ width: "10%" }}
            component="img"
            image={"pix.jpg"}
            alt=""
          />
          <CardContent sx={{ width: "50%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
  if (option === 4) {
    return (
      <div>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FormControl
            sx={{
              width: "10%",
              marginLeft: "2rem",
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="boleto" control={<Radio />} />
            </RadioGroup>
          </FormControl>

          <CardMedia
            sx={{ width: "10%" }}
            component="img"
            width={"40px"}
            image={"boleto.jpg"}
            alt=""
          />
          <CardContent sx={{ width: "50%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
};

CardCheckoutComponent.propTypes = {
  name: PropTypes.string,
  option: PropTypes.number,
};
