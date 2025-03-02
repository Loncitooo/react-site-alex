import React from "react";

export const BriefCard = ({ icon, title, text }) => {
  return (
    <div className="w-full rounded-2xl bg-white px-2 flex gap-4 flex-col shadow-xl p-4">
      {icon && <div className="text-2xl">{icon}</div>}
      <h1 className="text-lg font-semibold text-left text-black">{title}</h1>
      <span className="text-base text-justify text-gray-500">{text}</span>
    </div>
  );
};