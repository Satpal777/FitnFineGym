import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/gym.json";
import areaMap from "../../public/area-map.json";
import locationPointer from "../../public/location-pointer.json";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
function About() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center  md:flex-row flex-col-reverse justify-between p-4 md:mt-0 mt-24">
        <div className=""></div>
        <div className="text-center flex flex-col gap-y-10">
          <div>
            <h1 className=" transform duration-300 border-transparent hover:border-b-orange-500 border-4 border-spacing-4 text-4xl font-semibold tracking-wider mb-2 w-fit m-auto">
              Fit N Fine
            </h1>
            <p className="text-slate-200">
              Ultimate Destination for healthy life!
            </p>
          </div>
          <fieldset className="flex border border-cyan-500 md:gap-x-10 item-center justify-center p-6 pt-4 md:flex-nowrap flex-wrap gap-y-10">
            <legend className="p-4 text-center text-2xl border border-cyan-500">
              Fitness Tip
            </legend>
            <div className="bg-white md:h-full shadow-lg rounded-lg shadow-orange-500/[0.5]">
              <div className="md:max-w-sm md:static relative rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 md:static absolute backdrop-blur-sm top-0">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="md:text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white md:h-full shadow-lg rounded-lg shadow-orange-500/[0.5]">
              <div className="md:max-w-sm md:static relative rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 md:static absolute backdrop-blur-sm top-0">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="md:text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="md:w-1/2 ">
          <Lottie
            animationData={animationData}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
      <div className="min-h-screen pt-14 flex flex-col">
        <div className="h-full flex flex-col flex-1">
          <h1 className="text-center text-3xl font-semibold tracking-wider">
            Locate us!
          </h1>
          <div className="flex items-center sm:flex-row flex-col-reverse justify-evenly flex-1">
            <div className="relative w-full">
              <Lottie
                className="w-1/2 m-auto"
                animationData={locationPointer}
                width={"50%"}
              />
              <div className="absolute  -bottom-12  sm:bottom-5 sm:-left-4 left-0 w-full ">
                <h1 className="border w-fit m-auto bg-white/[0.2] p-2 rounded  border-white shadow-md shadow-cyan-500">
                  AA-33 XYZ Heights , Ahmedabad, Gujarat, India
                </h1>
                <div className="flex justify-between items-center w-1/2 m-auto mt-5">
                  <a
                    href=""
                    className="hover:bg-cyan-100 hover:scale-105 transform duration-300 h-12 w-12 overflow-hidden rounded-full bg-white"
                  >
                    <FaFacebookF className="text-blue-600 m-auto h-full" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-cyan-100 hover:scale-105 transform duration-300 h-12 w-12 overflow-hidden rounded-full bg-white"
                  >
                    <FaInstagram className="text-pink-500  m-auto w-full p-2 h-full" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-cyan-100 hover:scale-105 transform duration-300 h-12 w-12 overflow-hidden rounded-full bg-white"
                  >
                    <CiMail className="text-red-500 m-auto w-full p-2 h-full" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-cyan-100 hover:scale-105 transform duration-300 h-12 w-12 overflow-hidden rounded-full bg-white"
                  >
                    <BiPhoneCall className="text-green-500 m-auto w-full p-2 h-full" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Lottie
                animationData={areaMap}
                className="w-1/2 m-auto"
                width={"50%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
