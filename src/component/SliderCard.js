import React from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  maintop: {
    width: "200px",
    height: "200px",
    "& .colorbox": {
      width: "200px",
      height: "200px",
      objectFit: "contain",
    },
  },
  mainbox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function SliderCard({ data }) {
  const classes = useStyles();

  return (
    <Box className={classes.mainbox}>
      <Box className={classes.maintop}>
        <Avatar
          src={data?.images}
          className="colorbox"
          style={{ background: data?.color }}
          alt="user"
        />
      </Box>
      <Box mt={2} textAlign="center">
        <Typography variant="h6" color="primary">
          {data?.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default SliderCard;
