import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Divider,
  IconButton,
  Link,
} from "@material-ui/core";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  baseSection: {
    display: "flex",
    justifyContent: "center",
    background: " #000",
    color: "#fff",
    padding: "20px",
    "& p": {
      color: theme.palette.text.textfooter,
      fontSize: "16px",
      // fontWeight: "400",
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.dull,
    },
    "@media(max-width:565px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  privacy: {
    display: "flex",
    "@media(max-width:565px)": {
      marginTop: "1.5rem",
    },
  },
  subpart: {
    "& .footerimgBox": {
      position: "absolute",
      maxWidth: "330px",
      width: "auto",
      right: "50px",
      bottom: "10%",
      zIndex: "-1",
    },
    background: "rgba(255, 255, 255, 0.02)",
    position: "relative",
    zIndex: 1,
    // padding: "0px 0px 40px",
    overflow: "hidden",
    "& h5": {
      color: "rgba(255, 255, 255, 0.6)",
      width: "100%",
      maxWidth: "252px",
      marginBottom: "12px",
      fontWeight: "300",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "100%",
        maxWidth: "100%",
        marginBottom: "10px",
      },
    },
    "@media(max-width:599px)": {
      padding: "20px 10px 24px 10px",
    },
    "& h2": {
      fontSize: "35px",
      fontWeight: "500",
      lineHeight: "46px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
        lineHeight: "31px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        marginBottom: "0px",
      },
    },
    "& h4": {
      fontSize: "20px",
      fontWeight: "400",
    },
  },

  listbox: {
    background: "none",
    border: "none",
    margin: "0px",
    "& a": {
      color: "rgba(255, 255, 255, 0.6)",
      display: "block",
      fontSize: "14px",
      fontWeight: "300",
      paddingTop: "4px",
      fontFamily: "'Sora', sans-serif",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
      "&:hover": {
        color: "none",
      },
    },
  },
  contactbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "-10px",
    marginLeft: "-10px",
    marginTop: "4px",
    "& a": {
      color: "rgba(255, 255, 255, 0.6)",
      fontFamily: "'Sora', sans-serif",
      fontSize: "14px",
      fontWeight: "300",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    "& svg": {
      color: "#3F3E41",
      fontSize: "18px",
    },
  },

  buttonbox: {
    marginTop: "10px",
    "& button": {
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
    },
  },
  subfooter: {
    paddingTop: "40px",
    paddingBottom: "32px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "16px",
    },
  },
  leftbox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "130px",
    marginTop: "30px",
    "& .dot": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      backgroundColor: "#1077f0",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
  icon: {
    margin: "0px 4px",
    color: "#fff",
    cursor: "pointer",
    width: "20px",
    "&:hover": {
      color: "#FF2676",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Box className={classes.subfooter}>
        <Divider style={{ backgroundColor: "#E0DFDE" }} />
      </Box>
      <Box className={classes.subpart}>
        <div className="footerleft"></div>
        <img className="footerimgBox" src="images/footerimg.png" alt="" />
        <Box>
          <Container>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Box mt={1} mb={1}>
                    <Typography variant="body2" style={{ maxWidth: "300px" }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries....
                    </Typography>{" "}
                  </Box>
                  <Box className={classes.leftbox}>
                    <Link target="_blank" href="https://twitter.com/">
                      <Box className="dot">
                        <TwitterIcon className={classes.icon} />
                      </Box>
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/">
                      <Box className="dot">
                        <RiInstagramLine className={classes.icon} />
                      </Box>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/">
                      <Box className="dot">
                        <LinkedInIcon className={classes.icon} />
                      </Box>
                    </Link>
                    <Link target="_blank" href="https://www.discord.com/">
                      <Box className="dot">
                        <RiDiscordFill className={classes.icon} />
                      </Box>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <Typography variant="h4">ONLINE SHOPPING</Typography>
                  <List className={classes.listbox}>
                    <ListItem>Men’s T-Shirts</ListItem>
                    <ListItem>Women’s Wear</ListItem>
                    <ListItem>Hooded T-Shirts</ListItem>
                    <ListItem>Streetwear Collections</ListItem>
                  </List>{" "}
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <Typography variant="h4">CUSTOMER POLICIES</Typography>
                  <List className={classes.listbox}>
                    <ListItem>Men’s T-Shirts</ListItem>
                    <ListItem>Women’s Wear</ListItem>
                    <ListItem>Hooded T-Shirts</ListItem>
                    <ListItem>Streetwear Collections</ListItem>
                  </List>{" "}
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <Typography variant="h4">STORE INFORMATION</Typography>
                  <Box
                    className={classes.contactbox}
                    style={{ cursor: "pointer" }}
                  >
                    <IconButton>
                      <LocationOnIcon />
                    </IconButton>
                    <Typography variant="h6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Typography>
                  </Box>
                  <Box
                    className={classes.contactbox}
                    style={{ cursor: "pointer" }}
                  >
                    <IconButton>
                      <LocalPhoneIcon />
                    </IconButton>
                    <Typography variant="h6">Call Us: 1234567890</Typography>
                  </Box>
                  <Box
                    className={classes.contactbox}
                    style={{ cursor: "pointer" }}
                  >
                    <IconButton>
                      <AiOutlineMail />
                    </IconButton>
                    <Typography variant="h6">
                      Email Us: info@yourmail.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box pt={2}></Box>
          <Container>
            <Box className={classes.baseSection}>
              <Typography variant="body1">
                Copyright©2023. Created with love by mukesh
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
