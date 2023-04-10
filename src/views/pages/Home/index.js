import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Slider from "./Slider";
import Winter from "./Winter";
import Trading from "./Trading";
import Feature from "./Feature";
import Fashion from "./Fashion";
import BestSelling from "./BestSelling";
import Collection from "./Collection";
import Loose from "./Loose";
import Hurry from "./Hurry";
import HelpLine from "./HelpLine";
import Subscribe from "./Subscribe";
function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
        <Banner />
        <Slider />
        <Winter />
        <Trading />
        <Feature />
        <Fashion />
        <BestSelling />
        <Collection />
        <Loose />
        <Hurry />
        <HelpLine />
        <Subscribe />
      </Box>
    </Page>
  );
}

export default Home;
