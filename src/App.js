import React from "react";
import Herosection from "./Components/Herosection";
import Partners from "./Components/Partners";
import Satisfaction from "./Components/Satisfaction";
import Template from "./Components/Templates";
import Review from "../src/Components/Review";

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
    </section>
  );
};

export default App;
