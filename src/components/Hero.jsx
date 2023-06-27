import React from "react";
import Image from "../functions/Image";
import curvyDark from "../images/bg-curvy-dark-mode.svg";
import curvyLight from "../images/bg-curvy-light-mode.svg";

const Hero = ({ theme }) => {

  const backGrounds = {
    dark: curvyDark,
    light: curvyLight,
  };

  return (
    <section
      id="#hero"
      style={{ backgroundImage: `url(${backGrounds[theme]})` }}
      className="bg-no-repeat bg-contain bg-bottom"
    >
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <Image name="intro" type="image" />
        <h1 className="mx-auto max-w-2xl mb-10 text-3xl font-bold leading-normal mt-14 mdtext-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="p-3 rounded-full w-52 bg-accentCyan hover:scale-95">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
