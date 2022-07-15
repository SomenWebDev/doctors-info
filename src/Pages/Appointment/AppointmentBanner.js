import React from "react";
import chair from "../../assets/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm">
          <img src={chair} class="w-full rounded-lg shadow-2xl" alt="" />
        </div>

        <div className="lg:px-16">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
