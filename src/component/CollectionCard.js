import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    // paddingTop: "50px",
  },

  blurebox: {
    marginTop: "-60px",
    padding: " 15px",
    background:
      "linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)",
    backdropFilter: "blur(32px)",
  },
}));
export default function TradingCard(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Box pt={3}>
      <Box className={classes.mainbox} style={{ background: data.color }}>
        <img src={data?.image} alt="" width="100%" />
        <Box textAlign="center" className={classes.blurebox}>
          <Typography
            variant="h6"
            style={{ fontFamily: "'Montserrat'", color: "#fff" }}
          >
            Streetwear Collections
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
