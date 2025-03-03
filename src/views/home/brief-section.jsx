import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="relative w-full z-10 flex flex-col items-end gap-4 p-4 md:p-6 ">
      <div className=" absolute -left-10 w-max h-auto bg-orange-500 px-10 py-2 flex justify-end md:w-1/2 md:justify-start ">
      <h1 className=" pl-10 text-center uppercase font-bold text-white text-3xl tracking-widest "> {t("brief")}</h1>
      </div>
      {/* <div className="w-full h-[2px] bg-orange-400 mb-7"></div> */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-20">
        <BriefCard
          icon={<FaCar />}
          title={t("briefCard.briefTitle1")}
          text={t("briefCard.briefDescription1")}
        />
        <BriefCard
          icon={<FaHandshake />}
          title={t("briefCard.briefTitle2")}
          text={t("briefCard.briefDescription2")}
        />
        <BriefCard
          icon={<FaCogs />}
          title={t("briefCard.briefTitle3")}
          text={t("briefCard.briefDescription3")}
        />
        <BriefCard
          icon={<FaChargingStation />}
          title={t("briefCard.briefTitle4")}
          text={t("briefCard.briefDescription4")}
        />
        <BriefCard
          icon={<FaTrophy />}
          title={t("briefCard.briefTitle5")}
          text={t("briefCard.briefDescription5")}
        />
        <BriefCard
          icon={<FaNetworkWired />}
          title={t("briefCard.briefTitle6")}
          text={t("briefCard.briefDescription6")}
        />
      </div>
    </div>
  );
};