import React from "react";
import heroDoc from "../assets/hero-doc.png";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import Marquee from "react-fast-marquee";

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

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
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
            <div className="h-1/4 py-0.5 text-gray-600">Gender</div>
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

export default Home;
