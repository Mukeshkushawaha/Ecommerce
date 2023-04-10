import React, { useContext, useState } from "react";
import { Box, Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  maintop: {
    padding: "50px 0 50px",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "120px 0",
    },
  },
}));

function Loose() {
  const classes = useStyles();

  return (
    <Box className={classes.maintop}>
      <img
        src="images/banner2.png"
        alt=""
        width="100%"
        className="bannerImgBox"
      />
    </Box>
  );
}

export default Loose;
