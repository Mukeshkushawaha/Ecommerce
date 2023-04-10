import React from "react";
import { Grid, Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CollectionCard from "src/component/CollectionCard";
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
    image: "images/coll.png ",
    color: "#06b8a6",
  },
  {
    image: "images/coll1.png ",
    color: "#80e8ff",
  },
  {
    image: "images/coll2.png ",
    color: "#dc493a",
  },
  {
    image: "images/coll.png ",
    color: "#06b8a6",
  },
  {
    image: "images/coll.png ",
    color: "#06b8a6",
  },
  {
    image: "images/coll1.png ",
    color: "#80e8ff",
  },
  {
    image: "images/coll2.png ",
    color: "#dc493a",
  },
  {
    image: "images/coll.png ",
    color: "#06b8a6",
  },
];
export default function Collection() {
  const classes = useStyles();

  return (
    <Box pt={3}>
      <Container>
        <Grid container spacing={2}>
          {TeamCard.map((data, i) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <CollectionCard data={data} index={i} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
