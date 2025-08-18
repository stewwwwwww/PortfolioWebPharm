import React from "react";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "../App";
const OurTeamMembers = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-10 px-4 pt-16 text-center md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex flex-col gap-5 ">
        <h6 className="text-[#00378A]">
          {" "}
          {languageContext === "english" ? "Core Team" : "Thành Viên Chính"}
        </h6>
        <h2>
          {languageContext === "english"
            ? "Leading Members of Our Company"
            : "Đội Ngũ Chỉ Đạo"}
        </h2>
      </div>
      <div className="flex max-w-[75rem] grid-cols-2 flex-col gap-10 sm:grid">
        {data.map((item, i) => {
          return (
            <div
              className={classNames("flex flex-col gap-3 px-4 sm:px-0", {
                "sm:left-1/2 sm:translate-x-1/2":
                  i + 1 === data.length && i % 2 === 0,
              })}
            >
              <img
                src={item.img}
                className="aspect-[4/3] rounded object-cover"
              />
              <h5 className=" text-[#00378A]">{item.name}</h5>
              <p className="text-[#838B93">
                {languageContext === "english"
                  ? item.description.english
                  : item.description.vietnamese}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeamMembers;
