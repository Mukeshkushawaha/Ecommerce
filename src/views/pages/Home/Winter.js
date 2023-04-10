import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    paddingTop: "50px",
  },
  image: {
    "& img": {
      width: "100%",
    },
  },
}));

function Winter(props) {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box className={classes.mainbox}>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xs={12}>
              <Box className={classes.image}>
                <img src="images/winter.png" ali="img" />
              </Box>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Box className={classes.image}>
                <img src="images/winter1.png" ali="img" />
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className={classes.image}>
                <img src="images/winter2.png" ali="img" />
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className={classes.image}>
                <img src="images/winter3.png" ali="img" />
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className={classes.image}>
                <img src="images/winter4.png" ali="img" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Winter;
