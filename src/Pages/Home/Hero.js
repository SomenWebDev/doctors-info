import React from "react";
import chair from "../../assets/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Hero = () => {
  return (
    <div className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg overflow-hidden lg:px-16">
          <img src={chair} className="w-full" alt="" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 max-w-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
