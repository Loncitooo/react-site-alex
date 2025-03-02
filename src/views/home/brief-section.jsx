import React from "react";
import BriefCard from "../../components/brief/brief-card";
import { FaCar } from "react-icons/fa";

export const Brief = () => {
  return (
    <div className="w-full z-10 flex flex-col items-center justify-center gap-4">
      <h1 className="text-center font-bold text-orange-500 text-3xl ">Brief</h1>
      <div className="w-full h-[2px] bg-orange-400 mb-7"></div>
      <BriefCard
        icon={<FaCar />}
        title="Expert in the Mexican Auto Industry"
        text="Top expert on the Mexican Auto Industry, its management and labor transitions"
      />
    </div>
  );
};