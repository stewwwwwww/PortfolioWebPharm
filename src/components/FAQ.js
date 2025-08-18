import React from "react";
import pic from "../assets/chevron-down.png";
import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "../App";

const FAQ = ({ data }) => {
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
    <div className="flex flex-col items-center gap-10 px-4 pt-16 md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="flex flex-col gap-5 px-4 text-center">
        <h6 className="text-[#00378A]">FAQ</h6>
        <h2>
          {languageContext === "english" ? (
            <>Frequently Asked Questions</>
          ) : (
            <>Câu Hỏi Thường Gặp</>
          )}
        </h2>
      </div>
      <div className="w-full max-w-[75rem] justify-between md:flex">
        <div className="flex flex-col gap-4 md:w-[49%]">
          {data.slice(0, Math.floor(data.length / 2)).map((item, i) => (
            <div className="shadowContainer rounded-lg px-8 py-5">
              <div
                className="flex cursor-pointer items-start justify-between py-5"
                onClick={() => handleExpandDropdown(i)}
              >
                <h6 className="w-[90%]">
                  {languageContext === "english"
                    ? item.question.english
                    : item.question.vietnamese}
                </h6>
                <img
                  src={pic}
                  className={classNames(
                    "w-6 transition-transform duration-500",
                    {
                      "-rotate-180 ": visible[i],
                    },
                  )}
                />
              </div>
              <h6
                className={classNames(
                  "flex overflow-hidden text-[#838B93] transition-[max-height] duration-1000",
                  { "max-h-[20rem]": visible[i] },
                  { "max-h-0": !visible[i] },
                )}
              >
                {languageContext === "english"
                  ? item.answer.english
                  : item.answer.vietnamese}
              </h6>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:w-[49%]">
          {data
            .slice(Math.floor(data.length / 2), data.length)
            .map((item, i) => (
              <div className="shadowContainer rounded-lg px-8 py-5">
                <div
                  className="flex cursor-pointer items-start justify-between py-5"
                  onClick={() =>
                    handleExpandDropdown(Math.floor(data.length / 2) + i)
                  }
                >
                  <h6 className="w-[90%]">
                    {languageContext === "english"
                      ? item.question.english
                      : item.question.vietnamese}
                  </h6>
                  <img
                    src={pic}
                    className={classNames(
                      "w-[24px] transition-transform duration-500",
                      {
                        "-rotate-180 ":
                          visible[i + Math.floor(data.length / 2)],
                      },
                    )}
                  />
                </div>
                <h6
                  className={classNames(
                    "flex overflow-hidden text-[#838B93] transition-[max-height] duration-1000",
                    {
                      "max-h-[20rem]": visible[i + Math.floor(data.length / 2)],
                    },
                    { "max-h-0": !visible[i + Math.floor(data.length / 2)] },
                  )}
                >
                  {languageContext === "english"
                    ? item.answer.english
                    : item.answer.vietnamese}
                </h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
