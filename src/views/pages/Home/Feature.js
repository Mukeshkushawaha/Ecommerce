import React from "react";
import { Grid, Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FeatureCard from "src/component/FeatureCard";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  walletPage: {
    position: "relative",
    zIndex: "9",
    "& h1": {
      fontSize: "40px",
      fontWeight: "600",
      lineHeight: "67px",
      color: "#000",
      [theme.breakpoints.down("lg")]: {
        fontSize: "46px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
  },

  dot: {
    position: "absolute",
    zIndex: "0",
    left: "-20%",
    top: "-24%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
const TeamCard = [
  {
    image: "images/tradman.png ",
  },
  {
    image: "images/tradman1.png ",
  },
  {
    image: "images/tradman2.png ",
  },
  {
    image: "images/tradman.png ",
  },
];
export default function Feature() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        {/* <img src="images/Team/dot.png" className={classes.dot} alt="" /> */}
        <Grid>
          <Box className={classes.walletPage} mb={2} mt={2}>
            <Typography variant="h1" align="center">
              Featured Products
            </Typography>
          </Box>
        </Grid>

        <Grid container spacing={2}>
          {TeamCard.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <FeatureCard data={data} index={i} />
              </Grid>
            );
          })}
        </Grid>
        <Box display="flex" justifyContent="center" pb={1}>
          <Button variant="contained" color="primary">
            View All
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
