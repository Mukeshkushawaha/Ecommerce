import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    paddingTop: "50px",
  },
  image: {
    "& .socialmedia": {
      display: "flex",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.15)",
      borderRadius: "40px",
      width: "fit-content",
      padding: "6px 16px 6px 8px",
      position: "absolute",
      top: "10px",
      right: "10px",
      "& p": {
        marginLeft: "5px",
        color: "#000",
      },
    },
  },
  socialmedia: {
    display: "flex",

    "& .MuiIconButton-sizeSmall": {
      display: "flex",
      height: "50px",
      background: "#ffffff",
      borderRadius: "50px",
      width: "fit-content",
      padding: "15px",
      //   position: "absolute",
      top: " 50%",
      left: "10%",
      transform: "translate(-50%, -50%)",
      "& svg": {
        color: "#770015",
      },
    },
  },
  socialsize: {
    "& .MuiIconButton-sizeSmall": {
      color: "grey",
      border: "1px solid #E6E6E6",
      padding: "5px",
      width: "50px",
      height: "35px",
      borderRadius: "5px",
    },
  },
}));
export default function TradingCard(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Box>
      <Box className="overlayy">
        <img src={data?.image} alt="" />
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography
          variant="h6"
          style={{ fontFamily: "'Montserrat'", color: "#1C1C1C" }}
        >
          Men Henley Neck <br /> Full Sleeve Red Wine
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontFamily: "'Montserrat'",
            color: "#000",
            fontWeight: 800,
            fontSize: "18px",
          }}
        >
          ₹399{" "}
          <span
            style={{
              color: "#FF0000",
              fontWeight: 400,
              fontSize: "14px",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            ₹1299
          </span>
        </Typography>
        <Box className={classes.socialsize} pb={2}>
          <IconButton size="small">
            <Typography variant="h6">S</Typography>
          </IconButton>{" "}
          <IconButton size="small">
            <Typography variant="h6">M</Typography>
          </IconButton>{" "}
          <IconButton size="small">
            <Typography variant="h6">L</Typography>
          </IconButton>{" "}
          <IconButton size="small">
            <Typography variant="h6">XL</Typography>
          </IconButton>{" "}
          <IconButton size="small">
            <Typography variant="h6">XXL</Typography>
          </IconButton>{" "}
        </Box>
      </Box>
    </Box>
  );
}
