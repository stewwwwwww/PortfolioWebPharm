import React from "react";
import pic from "../assets/chevron-down.png";
import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "../App";

const JoinUsPositions = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const [visible, setVisible] = useState(Array(data.length).fill(false));
  const handleExpandDropdown = (index) => {
    const newVisible = visible.map((item, i) => {
      if (index === i) {
        return !item;
      } else {
        return false;
      }
    });
    setVisible(newVisible);
  };
  return (
    <div className="flex flex-col items-center gap-12 px-4 pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex max-w-[35rem] flex-col text-center lg:max-w-[46rem]">
        <h6 className="text-[#00378A]">
          {languageContext === "english" ? (
            <>Positions List</>
          ) : (
            <>Vị Trí Tuyển Dụng</>
          )}
        </h6>
        <h2 className="mt-2">
          {languageContext === "english" ? <>Join us</> : <>Tham gia công ty</>}
        </h2>
        <p className="mt-7 text-[#838B93]">
          {languageContext === "english" ? (
            <>
              Join our team and help us create innovative solutions that make a
              difference. We offer a dynamic work environment, opportunities for
              growth, and the chance to work on exciting projects with a
              talented group of professionals. Explore our open positions and
              find the role that's right for you.
            </>
          ) : (
            <>
              Tham gia đội ngũ của chúng tôi và cùng tạo ra những giải pháp sáng
              tạo mang lại sự khác biệt. Chúng tôi cung cấp một môi trường làm
              việc năng động, nhiều cơ hội phát triển và cơ hội tham gia vào các
              dự án thú vị cùng với nhóm chuyên gia tài năng. Khám phá các vị
              trí tuyển dụng và tìm vai trò phù hợp với bạn.
            </>
          )}
        </p>
      </div>
      <div className="w-full max-w-[75rem]">
        <div className="flex flex-col gap-6">
          {data.slice(0, data.length).map((item, i) => (
            <div className="shadowContainer flex flex-col gap-4 rounded-lg px-8 py-5">
              <div className="flex items-center justify-between">
                <h4 className="text-[#00378A]">
                  {languageContext === "english"
                    ? item.position.english
                    : item.position.vietnamese}
                </h4>
                <h4 className="rounded-2xl bg-[#00378A] px-4 py-2 text-white">
                  {languageContext === "english"
                    ? item.location.english
                    : item.location.vietnamese}
                </h4>
              </div>
              <p>
                {languageContext === "english"
                  ? item.description.english
                  : item.description.vietnamese}
              </p>
              <div
                className="flex w-[9rem] cursor-pointer items-center"
                onClick={() => handleExpandDropdown(i)}
              >
                <h6 className="w-[90%]">Learn More</h6>
                <img
                  src={pic}
                  className={classNames(
                    " w-[24px] transition-transform duration-500",
                    {
                      "-rotate-180 ": visible[i],
                    },
                  )}
                />
              </div>
              <div
                className={classNames(
                  "flex flex-col gap-6 overflow-hidden transition-[max-height] duration-500",
                  { "max-h-[20rem]": visible[i] },
                  { "max-h-0": !visible[i] },
                )}
              >
                <p className="text-[#838B93]">
                  {languageContext === "english"
                    ? item.insight.english
                    : item.insight.vietnamese}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUsPositions;
