import React from "react";
import BriefCard from "../../components/brief/brief-card";
import { FaCar } from "react-icons/fa";

export const Brief = () => {
  return (
    <div className="w-full z-10 flex flex-col items-center justify-center gap-4">
      <h1 className="text-center uppercase font-bold text-orange-500 text-2xl ">Brief</h1>
      <div className="w-full h-[2px] bg-orange-400 mb-7"></div>
      <BriefCard
        icon={<FaCar />}
        title="Expert in the Mexican Auto Industry"
        text="Top expert on the Mexican Auto Industry, its management and labor transitions"
      />
            <BriefCard
        icon={<FaCar />}
        title="Specialist in Labor Relations and Just Transitions"
        text="Top expert on industrial and labor relations systems changes, labor relations and just transition "
      />
            <BriefCard
        icon={<FaCar />}
        title="Specialist in Socio-Technical and Energy Transitions"
        text="Socio-technical, energy and industrial transition specialist "
      />
            <BriefCard
        icon={<FaCar />}
        title="Specialist in Transport Electrification and Sustainable Mobility"
        text="Transport electrification and sustainable mobilities specialist "
      />
            <BriefCard
        icon={<FaCar />}
        title="National Researcher Level III (Highest Rank)"
        text="Highest rank as Mexican National Research –Level III "
      />
            <BriefCard
        icon={<FaCar />}
        title="Leader in National and International Research Networks"
        text="Leadership in creating and promoting national and international research networks"
      />
    </div>
  );
};