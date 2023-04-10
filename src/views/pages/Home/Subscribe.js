import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  InputBase,
  Button,
  FormControl,
  InputAdornment,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  maintop: {
    padding: "50px 0 50px",
  },
  backgroundcss: {
    background: "linear-gradient(97.3deg, #AB001E -6.23%, #770015 105.09%)",
    textAlign: "center",
    padding: "40px",
    position: "relative",
    overflow: "hidden",
    "& .shape5": {
      position: "absolute",
      left: "-3%",
      bottom: "-11px",
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        left: "-3%",
        bottom: "-11px",
      },
    },
    "& .shape4": {
      position: "absolute",
      right: "-3%",
      bottom: "-20px",
      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        right: "-3%",
        bottom: "-11px",
      },
    },
  },
  textFild: {
    position: "relative",
    "& .MuiInputBase-root": {
      border: "0px solid transparent",
    },
    "& button": {
      position: "absolute",
      top: 0,
      right: -10,
      height: "100%",
      background: "#fff",
      minWidth: "140px",
      fontSize: "16px",
      fontWeight: "400",
      color: "#000",
      borderRadius: "5px",

      [theme.breakpoints.down("xs")]: {
        minWidth: "100px",
      },
    },
    iconhandle: {
      "& button": {
        "& a": {
          "& svg": {
            color: "#000",
          },
        },
      },
    },
  },
  inputfield: {
    "& .inputfield": {
      width: "100%",
      borderRadius: "10px",
      padding: "20px",
      backgroundColor: "#b45263",
    },
    "& input": {
      color: "#000 !important",
      fontSize: "12px",
      minWidth: "500px",
    },
  },
}));

function Subscribe() {
  const classes = useStyles();

  return (
    <Box className={classes.maintop}>
      <Container>
        <Box className={classes.backgroundcss}>
          <img src="images/vectorr.png" className="shape5 moveLeft" />
          <img src="images/vectorr1.png" className="shape4 moveLeft" />
          <Typography
            style={{
              fontFamily: "Playfair Display",
              fontStyle: "normal",
              fontSize: "36px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Subscribe to get updates on exciting offers <br /> & deals
          </Typography>
          <Box display="flex" justifyContent="center">
            <Box pt={2} pb={2}>
              <Box className={classes.textFild}>
                <FormControl fullWidth className={classes.inputfield}>
                  <InputBase
                    className="inputfield"
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    placeholder="Your e-mail address"
                    name="email"
                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="contained" color="primary">
                          Subscribe{" "}
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Subscribe;
