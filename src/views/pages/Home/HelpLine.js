import React, { useContext, useState } from "react";
import { Box, Typography, Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  maintop: {
    padding: "50px 0 50px",
  },
  mainboxline: {
    background: "#f5f4f2",
    padding: "40px",
    position: "relative",
    "& .shape5": {
      position: "absolute",
      left: "-3%",
      bottom: "-80px",
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        left: "-3%",
        bottom: "-80px",
      },
    },
    "& .shape4": {
      position: "absolute",
      right: "-5%",
      bottom: "55px",
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        right: "-5%",
        bottom: "55px",
      },
    },
  },
  rightline1: {
    borderRight: "1px solid #FFC7D1",
    height: "100px",
    "& img": {
      width: "100%",
      maxWidth: "60px",
    },
  },
}));

function HelpLine() {
  const classes = useStyles();

  return (
    <Box className={classes.maintop}>
      <Box className={classes.mainboxline}>
        <img src="images/ellips.png" className="shape5 moveTop" />
        <img src="images/ellips1.png" className="shape4 moveTop" />
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Box className={classes.rightline1}>
                <img src="images/vector.png" alt="img" />
              </Box>
              <Typography variant="h5">7 Days Return</Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Box className={classes.rightline1}>
                <img src="images/vector1.png" alt="img" />
              </Box>
              <Typography variant="h5">Quality Products</Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Box className={classes.rightline1}>
                <img src="images/vector2.png" alt="img" />
              </Box>
              <Typography variant="h5">7 Days Return</Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={3}
              sm={6}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <Box className={classes.rightline}>
                <img src="images/vector3.png" alt="img" />
              </Box>
              <Typography variant="h5">7 Days Return</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HelpLine;
