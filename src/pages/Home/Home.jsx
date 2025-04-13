import React from "react";
import Hero from "./Hero";
import Statistics from "../../components/Statistics/Statistics";
import About from "../../components/About/About";
import Program from "../../components/Program/Program";
import Choice from "../../components/Choice/Choice";
import Tracks from "../../components/Tracks/Tracks";
// import Testimonial from "../../components/Testimonial/Testimonial";
import How from "../../components/How/How";
import Blog from "../../components/Blog/Blog";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Statistics />
      <About />
      <Program />
      <Choice />
      <Tracks />
      {/* <Testimonial /> */}
      <How />
      <Blog />
    </div>
  );
};

export default Home;
