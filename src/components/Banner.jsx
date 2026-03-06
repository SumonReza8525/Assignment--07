import React from "react";
import bannerImg from "../assets/vector1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16 mt-12">
      <div className="relative h-44 bg-linear-to-r  from-emerald-400 to-teal-700 rounded-xl">
        {/* <img src="" alt="" /> */}
        <img src={bannerImg} className="absolute left-0 top-0 h-full " />

        <img
          src={bannerImg}
          className="absolute right-0 top-0 h-full scale-x-[-1]"
        />

        <div className="relative z-10 text-white text-center flex flex-col justify-center items-center border-2 h-full">
          <p className="text-lg">In Progress</p>
          <p className="text-6xl font-bold">0</p>
        </div>
      </div>
      <div className="relative h-44 bg-linear-to-r from-[#5B2BE0] to-[#8B5CF6] rounded-xl">
        {/* <img src="" alt="" /> */}
        <img src={bannerImg} className="absolute left-0 top-0 h-full " />

        <img
          src={bannerImg}
          className="absolute right-0 top-0 h-full scale-x-[-1]"
        />

        <div className="relative z-10 text-white text-center flex flex-col justify-center items-center border-2 h-full">
          <p className="text-lg">Resolved</p>
          <p className="text-6xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
