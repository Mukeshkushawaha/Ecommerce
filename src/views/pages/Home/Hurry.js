import React from "react";
import { Grid, Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CollectionCard from "src/component/CollectionCard";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  bgcolor: {
    background: "#CCCEA7",
  },
  bgcolor1: {
    background: "#d6bebe",
  },
  imagesize: {
    margin: "auto",
    maxWidth: "150px",
    padding: "20px",
    "& img": {
      width: "100%",
    },
  },
  imagesize1: {
    margin: "auto",
    maxWidth: "241px",
    padding: "0px",
    "& img": {
      width: "100%",
    },
  },
}));

export default function Hurry() {
  const classes = useStyles();

  return (
    <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xs={12}>
            <Box className={classes.bgcolor}>
              <Box className={classes.imagesize}>
                <img src="images/dimond.png" alt="img" />
                <Box>
                  <Typography variant="h1">Hurry Up!</Typography>
                </Box>
              </Box>
              <Box className={classes.imagesize1}>
                <img src="images/dimond1.png" alt="img" />
                <Box textAlign="center" pt={2} pb={2}>
                  <Typography variant="h4" style={{ fontSize: "40px" }}>
                    Sale
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" pb={3}>
                <Button variant="outlined" color="primary">
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <Box className={classes.bgcolor1}>
              <Box className={classes.imagesize}>
                <img src="images/tag.png" alt="img" />
                <Box>
                  <Typography variant="h1">Hurry Up!</Typography>
                </Box>
              </Box>
              <Box className={classes.imagesize1}>
                <img src="images/teg1.png" alt="img" />
                <Box textAlign="center" pt={2} pb={2}>
                  <Typography variant="h4" style={{ fontSize: "40px" }}>
                    Sale
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" pb={3}>
                <Button variant="outlined" color="primary">
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
