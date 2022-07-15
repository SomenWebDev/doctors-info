import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="max-w-7xl px-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
