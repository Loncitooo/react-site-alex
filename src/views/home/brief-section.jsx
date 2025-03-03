import React from "react";
import BriefCard from "../../components/brief/brief-card";
import {
  FaCar,
  FaHandshake,
  FaCogs,
  FaChargingStation,
  FaTrophy,
  FaNetworkWired,
} from "react-icons/fa";

export const Brief = () => {
  return (
    <div className="relative w-full z-10 flex flex-col items-end gap-4 ">
      <div className=" absolute -left-10 w-max h-auto bg-orange-500 px-10 py-2 flex justify-end md:w-1/2 md:justify-start ">
      <h1 className=" text-center uppercase font-bold text-white text-3xl tracking-widest ">Brief</h1>
      </div>
      {/* <div className="w-full h-[2px] bg-orange-400 mb-7"></div> */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-20">
        <BriefCard
          icon={<FaCar />}
          title="Expert in the Mexican Auto Industry"
          text="Top expert on the Mexican Auto Industry, its management and labor transitions"
        />
        <BriefCard
          icon={<FaHandshake />}
          title="Specialist in Labor Relations and Just Transitions"
          text="Top expert on industrial and labor relations systems changes, labor relations and just transition "
        />
        <BriefCard
          icon={<FaCogs />}
          title="Specialist in Socio-Technical and Energy Transitions"
          text="Socio-technical, energy and industrial transition specialist "
        />
        <BriefCard
          icon={<FaChargingStation />}
          title="Specialist in Transport Electrification and Sustainable Mobility"
          text="Transport electrification and sustainable mobilities specialist "
        />
        <BriefCard
          icon={<FaTrophy />}
          title="National Researcher Level III (Highest Rank)"
          text="Highest rank as Mexican National Research –Level III "
        />
        <BriefCard
          icon={<FaNetworkWired />}
          title="Leader in National and International Research Networks"
          text="Leadership in creating and promoting national and international research networks"
        />
      </div>
    </div>
  );
};