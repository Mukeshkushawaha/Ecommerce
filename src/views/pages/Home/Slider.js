import React from "react";
import Sliderr from "react-slick";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import SliderCard from "src/component/SliderCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const nftList = [
  {
    images: "images/man.png",
    text: "Women's were",
    color: "#f1dbe9",
  },
  {
    images: "images/man1.png",
    text: "Women's were",
    color: "#ddd3eb",
  },
  {
    images: "images/man2.png",
    text: "Women's were",
    color: "#d3eaeb",
  },
  {
    images: "images/man3.png",
    text: "Women's were",
    color: "#f1dbe9",
  },
  {
    images: "images/man1.png",
    text: "Women's were",
    color: "#ddd3eb",
  },
  {
    images: "images/man2.png",
    text: "Women's were",
    color: "#d3eaeb",
  },
  {
    images: "images/man3.png",
    text: "Women's were",
    color: "#f1dbe9",
  },
];

function Slider(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    slidesToShow: 6,
    // speed: 3000,
    // slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0px",
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          arrows: true,
          autoplay: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: true,
          autoplay: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: true,
          autoplay: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: true,
          autoplay: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
          autoplay: false,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <Box className="scoreSlider">
          <Grid container spacing={2}>
            <Sliderr
              {...settings}
              className="width100"
              style={{ width: "100%", position: "relative" }}
            >
              {nftList &&
                nftList.map((data, i) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Box mt={2}>
                        <SliderCard data={data} />
                      </Box>
                    </Grid>
                  );
                })}
            </Sliderr>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Slider;
