import React from "react";
import Hero from "./Hero";
import FeaturedServices from "./FeaturedServices";
import Statistics from "./Statistics";
import RecentProject from "./RecentProject";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedServices />
      <Statistics />
      <RecentProject />
      <Testimonial />
    </div>
  );
};

export default Home;
