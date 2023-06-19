import React from "react";

import Insight from "./LandingPage/Insight";
import CardOnImage from "./LandingPage/CardOnImage";
import CardProps from "./LandingPage/CardProps";
import WithSpeechBubbles from "./LandingPage/Testimonial";

const Home = () => {
  return (
    <div>
      <CardOnImage />
      <CardProps />
      <Insight />
      <WithSpeechBubbles />
    </div>
  );
};

export default Home;
