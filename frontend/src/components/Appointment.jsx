import React from "react";
import { Card, HoverBook } from "./Home";
import { FaLightbulb, FaUserDoctor } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const Appointment = () => {
  return (
    <div className="min-h-[80vh] flex justify-start items-center flex-col py-28">
      <h1 className="text-center text-4xl mt-3 mb-12 text-gray-800 font-noto-semi">
        Booking a Doctor's appointment has never been so much easier!
      </h1>
      <div className="flex justify-evenly space-x-5 w-[90%] mb-16">
        {[
          {
            icon: <FaUserDoctor />,
            title: "Search Doctor",
            desc: "Before booking appointment, search doctors by category",
            className: "text-teal-500 bg-teal-100",
          },
          {
            icon: <IoLocationOutline />,
            title: "Choose Your Location",
            desc: "And enter your location so that we will find the nearest doctor to you",
            className: "text-purple-600 bg-purple-100",
          },
          {
            icon: <SlCalender />,
            title: "Schedule Appointment",
            desc: "Then select a date to set an appointment with your doctor",
            className: "text-red-600 bg-red-100",
          },
          {
            icon: <FaLightbulb />,
            title: "Get your solution",
            desc: "We will help ypu find and provide solutions for your health",
            className: "text-yellow-300 bg-yellow-100",
          },
        ].map((i) => {
          return (
            <Card
              icon={i.icon}
              title={i.title}
              desc={i.desc}
              className={i.className}
            />
          );
        })}
      </div>
      <HoverBook />
    </div>
  );
};

export default Appointment;
