import React, { useState, useEffect } from "react";

const BriefCard = ({ icon, title, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(title);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [title]);

  return (
    <div
      id={title}
      className={`w-full h-auto rounded-2xl bg-white px-5 py-4 flex gap-4 flex-col shadow-lg transition-all duration-700 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {icon && <div className="text-5xl text-amber-500 pb-10">{icon}</div>}
      <h1 className="text-xl font-normal text-left text-black">{title}</h1>
      <span className="text-base text-justify text-gray-500">{text}</span>
    </div>
  );
};

export default BriefCard;