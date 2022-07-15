import React from "react";
import doctor from "../../assets/doctor.png";
import appointment from "../../assets/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="max-w-7xl mx-auto px-12 flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-white">Make an Appointment Today</h2>
        <p className="text-3xl text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          quaerat, mollitia ipsum saepe consequatur a corrupti at laudantium quo
          quas numquam ut quos atque est et recusandae temporibus magni deserunt
          odit ab reprehenderit impedit placeat illo voluptatum. Sint, amet?
          Aliquid?
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
