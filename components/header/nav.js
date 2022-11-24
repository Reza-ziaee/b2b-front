import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const Nav = () => {
  return (
    <header className="w-screen  [&>*]:px-5 bg-indigo-800 text-white flex flex-col font-serif">
      <Section1 />
      <Section2 />
      <Section3 />
    </header>
  );
};

export default Nav;
