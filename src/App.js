import React from "react";
import Herosection from "./Components/Herosection";
import Partners from "./Components/Partners";
import Satisfaction from "./Components/Satisfaction";
import Template from "./Components/Templates";
import Review from "../src/Components/Review";
import Pricing from "./Components/Pricing";
import Faqs from "./Components/Faqs";
import LatCTA from "./Components/LatCTA";
import Footer from './Components/Footer'

const App = () => {
  return (
    <section>
      <Herosection />
      <section className="w-full flex flex-col items-center justify-center px-[10vw] bg-[#F8FAFC]">
        <Partners />
        <Satisfaction />
        <Template />
      </section>
      <Review />
      <Pricing />
      <Faqs />
      <LatCTA />
      <Footer />
    </section>
  );
};

export default App;
