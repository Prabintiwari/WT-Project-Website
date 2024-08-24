import React from "react";
import image from "../images/Smart Health-Care.png";
import image1 from "../images/doctor.png";
import image2 from "../images/calander.png";
import image3 from "../images/Health.png";
import About from "./About";

const Home = () => {
  const icons = [
    { name: "fa-heart-pulse" },
    { name: "fa-suitcase-medical" },
    { name: "fa-stethoscope" },
    { name: "fa-receipt" },
    { name: "fa-syringe" },
    { name: "fa-comment-medical" },
  ];

  return (
    <div className=" w-full font-[Poppins] h-auto">
      {/* First Row */}

      <div className="bg-orange-300 group/item md:flex mt-14 md:mt-16 p-8   items-center justify-between">
        <div className="flex flex-col justify-center  items-center ">
          <h1 className="items-center text-gray-800 font-semibold  md:text-3xl xl:text-5xl ">
            All your health concerns <br />
            <span className="leading-relaxed">in a single platform;</span>{" "}
          </h1>

          <h1 className="items-center text-blue-900 mt-1 md:mt-3 font-bold text-xl md:text-3xl xl:text-5xl">
            Smart Health-Care!
          </h1>
        </div>

        <div className="flex items-center justify-between gap-0 mt-10 md:mt-0">
          <div className=" grid grid-cols-2 ml-10 items-center  text-xl md:text-3xl ">
            {icons.map((icon) => (
              <li className=" list-none text-emerald-500 my-0 cursor-pointer mx-5 md:mx-0">
                <i
                  className={`fa-solid ${icon.name} p-2 space-x-8 lg:p-4 `}
                ></i>
              </li>
            ))}
          </div>
          <div>
            <img
              className=" w-1/2 md:w-[200px] lg:w-[300px] mx-8 md:ml-1"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End of first row */}

      {/* Second Row */}

      <div className="lg:flex justify-evenly md:px-10  lg:p-10">
        <div className=" lg:w-[30%] rounded-xl shadow-md m-14 hover:shadow-neutral-400 hover:scale-105  duration-500">
          <img
            className="w-full h-48 sm:h-[500px] lg:h-60 rounded-xl bg-sky-100 hover:bg-gray-200 duration-500"
            src={image1}
            alt=""
          />

          <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-2xl px-6 mt-6 font-semibold text-gray-800">
              Find a Doctor
            </h1>
            <p className="text-gray-600 sm:text-xl lg:text-base font-medium px-6 my-1">
            Finding doctors near you made easy with us.
            </p>
          </div>
          <div className="p-6">
            <button className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-900 hover:scale-105 duration-500">
              Find Doctor
            </button>
          </div>
        </div>

        <div className="lg:h-1/2 lg:w-[30%] rounded-xl shadow-md m-14 hover:shadow-neutral-400 hover:scale-105 duration-500">
          <img
            className="w-full h-48 sm:h-[500px] lg:h-60 rounded-xl bg-sky-100 hover:bg-gray-200 duration-500"
            src={image3}
            alt=""
          />

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl px-6 mt-6 font-semibold text-gray-800">
              Health Packages
            </h1>

            <p className="text-gray-600 sm:text-xl lg:text-base font-medium px-6 my-1">
              Buy best health packages at an affordable rate.
            </p>
          </div>

          <div className="p-6">
            <button className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-900 hover:scale-105 duration-500">
            Buy now
            </button>
          </div>
        </div>

        <div className="lg:h-1/2 lg:w-[30%] rounded-xl shadow-md m-14 hover:shadow-neutral-400 hover:scale-105  duration-500">
          <img
            className="w-full h-48 sm:h-[500px] lg:h-60 rounded-xl bg-sky-100 hover:bg-gray-200 duration-500"
            src={image2}
            alt=""
          />

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-2xl px-6 mt-6 font-semibold text-gray-800">
              Book an Appointments
            </h1>

            <p className="text-gray-600 sm:text-xl lg:text-base font-medium px-6">
              Appointment with the best doctors of your choice
            </p>
          </div>

          <div className="p-7">
            <button className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-900 hover:scale-105 duration-500">
              Schedule now
            </button>
          </div>
        </div>
      </div>

      {/* End of second row */}

      {/* Third Row */}

      <div className="bg-slate-200 p-10 md:p-20">
        <div className="lg:flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Consult with the best doctors of your choice.
            </h1>
            <p className="text-gray-600 my-3 md:text-lg lg:text-xl">
              Consult with the best doctors of your choice regarding your health issue at an affordable
              rate.
            </p>
          </div>

          <div>
            <button className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-900 hover:scale-105 duration-500">
              Consult now
            </button>
          </div>
        </div>
      </div>

      {/* End of third row */}

      {/* Fourth Row */}

      <div className="bg-slate-200 p-10 md:p-20">
        <div className="lg:flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
              Book an appointment with the best doctors of your choice.
            </h1>
            <p className="text-gray-600 my-3 md:text-lg lg:text-xl">
              Book an appointment with the best doctors of your choice at an affordable rate.
            </p>
          </div>

          <div className="">
            <button className="bg-indigo-700 text-white p-2  rounded hover:bg-indigo-900 hover:scale-105 duration-500">
              Book now
            </button>
          </div>
        </div>
      </div>

        {/* End of fourth row */}

        {/* Fifth row */}

        <div className="bg-slate-200 p-10 md:p-20">
            <div className="lg:flex items-center justify-between">
              <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
                  Get the best health tips from the best doctors.
                </h1>
                <p className="text-gray-600 my-3 md:text-lg lg:text-xl">
                  Get the best health tips from the best doctors and stay healthy.
                </p>
              </div>

              <div className="">
                <button className="bg-indigo-700 text-white p-2 rounded hover:bg-indigo-900 hover:scale-105 duration-500">
                  Get tips
                </button>
              </div>
            </div>
          </div>

          {/* end of fifth row */}      

          <About /> 

    </div>
  );
};

export default Home;
