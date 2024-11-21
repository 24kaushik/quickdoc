import React from "react";
import Marquee from "react-fast-marquee";

import { FaUserDoctor } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { FaLightbulb } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

import img1 from "../assets/hospital-logos/1.jpg";
import img2 from "../assets/hospital-logos/2.jpg";
import img3 from "../assets/hospital-logos/3.jpg";
import img4 from "../assets/hospital-logos/4.jpg";
import img5 from "../assets/hospital-logos/5.jpg";
import img6 from "../assets/hospital-logos/6.jpg";
import img7 from "../assets/hospital-logos/7.jpg";
import img8 from "../assets/hospital-logos/8.jpg";
import img9 from "../assets/hospital-logos/9.jpg";
import img10 from "../assets/hospital-logos/10.jpg";
import img11 from "../assets/hospital-logos/11.jpg";
import img12 from "../assets/hospital-logos/12.jpg";

import heroDoc from "../assets/hero-doc.png";
import s4Hero from "../assets/s4-hero.png";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <About />
      <Contact />
    </div>
  );
};

const Section1 = () => {
  return (
    <div className="h-screen flex relative">
      <div className="w-[45%] flex flex-col justify-center px-5 ">
        <h1 className="font-noto-semi text-[3.5rem] leading-[1.5] -mt-28 text-gray-800 ">
          Find your doctor and make an appointment
        </h1>
        <p className="font-noto text-xl text-gray-400 my-3">
          Select a preferred doctor and time slot to book an appointment or
          consultation
        </p>
      </div>
      <div className="w-[55%] px-3 flex justify-center items-center">
        <img src={heroDoc} className="mt-5 rounded-lg" alt="" />
      </div>
      <div className="absolute bottom-28 left-20">
        <HoverBook />
      </div>
    </div>
  );
};

function HoverBook() {
  return (
    <form className="w-[62vw] h-40 shadow-xl border-2 border-gray-100 bg-white rounded-lg p-4">
      <div className="flex h-2/5">
        <div className="text-2xl w-1/3 font-outfit font-semibold px-2 ">
          Book Appointment Now
        </div>
        <div className="w-2/3 flex px-5 justify-evenly font-outfit text-lg text-gray-600 font-normal">
          <label className="cursor-pointer">
            <input
              className="hidden peer"
              defaultChecked
              type="radio"
              name="doctor"
            />
            <span className="peer-checked:text-blue-500 peer-checked:border-blue-500 border-b-[3px] border-transparent">
              General
            </span>
          </label>
          <label className="cursor-pointer">
            <input className="hidden peer" type="radio" name="doctor" />
            <span className="peer-checked:text-blue-500 peer-checked:border-blue-500 border-b-[3px] border-transparent">
              Pediatric
            </span>
          </label>
          <label className="cursor-pointer">
            <input className="hidden peer" type="radio" name="doctor" />
            <span className="peer-checked:text-blue-500 peer-checked:border-blue-500 border-b-[3px] border-transparent">
              Dentist
            </span>
          </label>
          <label className="cursor-pointer">
            <input className="hidden peer" type="radio" name="doctor" />
            <span className="peer-checked:text-blue-500 peer-checked:border-blue-500 border-b-[3px] border-transparent">
              ENT Specialist
            </span>
          </label>
        </div>
      </div>
      <div className="h-3/5 flex">
        <div className="w-4/12 h-full border-2 rounded-lg mx-2 flex">
          <div className="w-1/4 h-full text-3xl flex items-center justify-center">
            <span className="bg-yellow-300 rounded-full p-2">
              <IoLocationOutline color="#fff" />
            </span>
          </div>
          <div className="w-3/4 h-full">
            <div className="h-1/4 py-0.5 text-gray-600">Location</div>
            <div className="h-3/4 py-3 pr-3 flex items-center">
              <select
                name="location"
                id="location"
                className="h-full w-full p-0 px-1 border-gray-300"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-3/12 h-full border-2 rounded-lg mx-2 flex">
          <div className="w-1/4 h-full text-3xl flex items-center justify-center">
            <span className="bg-emerald-500 rounded-full p-2">
              <SlCalender color="#fff" />
            </span>
          </div>
          <div className="w-3/4 h-full">
            <div className="h-1/4 py-0.5 text-gray-600">Appointment Date</div>
            <div className="h-3/4 py-3 pr-3 flex items-center">
              <input
                type="date"
                name="date"
                id="date"
                className="h-full w-full border border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="w-3/12 h-full border-2 rounded-lg mx-2 flex">
          <div className="w-1/4 h-full text-3xl flex items-center justify-center">
            <span className="bg-blue-500 rounded-full p-2">
              <GoPerson color="#fff" />
            </span>
          </div>
          <div className="w-3/4 h-full">
            <div className="h-1/4 py-0.5 text-gray-600">Who</div>
            <div className="h-3/4 py-3 pr-3 flex items-center">
              <select
                name="gender"
                id="gender"
                className="h-full w-full border border-gray-300 p-0 px-2"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="child">Child</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-2/12 h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}

const Section2 = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-center font-noto-semi text-5xl text-gray-400">
        Our Partners
      </h1>
      <Marquee className="my-10">
        <img className="h-24 mx-7" src={img1} alt="hospital 1" />
        <img className="h-24 mx-7" src={img2} alt="hospital 2" />
        <img className="h-24 mx-7" src={img3} alt="hospital 3" />
        <img className="h-24 mx-7" src={img4} alt="hospital 4" />
        <img className="h-24 mx-7" src={img5} alt="hospital 5" />
        <img className="h-24 mx-7" src={img6} alt="hospital 6" />
        <img className="h-24 mx-7" src={img7} alt="hospital 7" />
        <img className="h-24 mx-7" src={img8} alt="hospital 8" />
        <img className="h-24 mx-7" src={img9} alt="hospital 9" />
        <img className="h-24 mx-7" src={img10} alt="hospital 10" />
        <img className="h-24 mx-7" src={img11} alt="hospital 11" />
        <img className="h-24 mx-7" src={img12} alt="hospital 12" />
      </Marquee>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className='bg-[url("./s3-bg.png")] h-80 mx-28 my-16 rounded-2xl flex p-14 relative shadow-lg'>
      <div className="w-5/12 text-5xl font-noto-semi text-gray-800 p-2">
        Easy steps to make your solution
      </div>
      <div className="w-4/12 py-5 text-gray-800">
        Easily Make Appointment With Our Best Doctor For your Families In The
        Same Day Or The Next Day
      </div>
      <div className="w-3/12 flex justify-center items-start pt-5">
        <button
          type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Make an Appointment
        </button>
      </div>
      <div className="absolute w-[90%] left-1/2 -translate-x-1/2 -bottom-28 flex justify-evenly space-x-5">
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
    </div>
  );
};

const Card = ({ icon, title, desc, className }) => {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-lg">
      <div className="flex justify-center text-4xl">
        <div className={`p-3 rounded-2xl ${className} `}>{icon}</div>
      </div>
      <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
        {desc}
      </p>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="flex mt-40 mb-32 mx-32">
      <div className="w-1/2">
        <img src={s4Hero} alt="section 4 hero" />
        <div className="text-gray-400 mx-10 text-lg">
          We only partner with the best quality hospitals to provide you
          services
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-[37.5%] px-10 mt-10 mb-4 text-4xl leading-[3.5rem] font-noto-semi">
          We Always Ensure The Best Medical Treatment For Your Health
        </div>
        <ul className="h-[35%] px-10 text-2xl font-outfit text-gray-600">
          <li className="my-3 flex items-center">
            <IoMdCheckmarkCircle color="#faca15" />
            &nbsp; Top specialist doctors
          </li>
          <li className="my-3 flex items-center">
            <IoMdCheckmarkCircle color="#faca15" />
            &nbsp; Make appointments fast
          </li>
          <li className="my-3 flex items-center">
            <IoMdCheckmarkCircle color="#faca15" />
            &nbsp; Best hospitals tailored to your needs
          </li>
          <li className="my-3 flex items-center">
            <IoMdCheckmarkCircle color="#faca15" />
            &nbsp; Top notch service
          </li>
        </ul>
        <div className="h-[27.5%] flex justify-center items-start">
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export { HoverBook, Card };
export default Home;
