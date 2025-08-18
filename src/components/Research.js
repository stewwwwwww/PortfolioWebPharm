import React from "react";
import { isDesktop } from "react-device-detect";
import classNames from "classnames";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { useContext } from "react";
import { LanguageContext } from "../App.js";
import { Link } from "react-router-dom";

const Research = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const animationRef = useAnimateContainer();
  return (
    <div className="flex flex-col items-center pt-16 text-center md:pt-20 lg:pt-24 xl:pt-36">
      <div
        className="flex flex-col items-center gap-5 pb-10 "
        ref={animationRef}
      >
        <h6 className="text-[#00378A]">
          {languageContext === "english" ? <>Researches</> : <>Nghiên Cứu</>}
        </h6>
        <h2 className="max-w-[50rem]">
          {languageContext === "english" ? (
            <>
              Our latest and most trusted researches to show effectiveness as
              well as efficacy.
            </>
          ) : (
            <>
              Những nghiên cứu lâm sàng để chứng minh độ hiệu quả của sản phẩm.
            </>
          )}
        </h2>
      </div>
      <div
        className="mx-4 flex max-w-[75rem] flex-col flex-wrap gap-8 
      md:flex-row md:items-center  md:justify-between md:gap-6 lg:justify-between 
      lg:gap-2 xl:gap-6"
      >
        {data.slice(0, 3).map((item, i) => {
          return (
            <div
              className={classNames(
                "shadowContainer mx-4 flex h-[36rem] flex-col items-start gap-5 rounded-[0.625rem] border-2 p-5 text-start sm:p-8 md:mx-0 md:w-[48%] lg:w-[31.2%] lg:p-5",
                { containerHover: isDesktop },
                {
                  "md:left-1/2 md:translate-x-1/2 lg:left-0 lg:translate-x-0":
                    i === 2,
                },
              )}
            >
              <img
                src={item.img}
                className=" h-[20rem] w-full rounded object-cover"
              />
              <h4 className="text-[#00378A]">
                {languageContext === "english"
                  ? item.name.english
                  : item.name.vietnamese}
              </h4>
              <p className="text-ellipsis text-[#838B93]">
                {languageContext === "english"
                  ? item.description.english
                  : item.description.vietnamese}
              </p>
              <Link
                to={`/Insights/Researches/${item.name.english.replaceAll(/\s/g, "-")}`}
                className="text-[#00378A]"
                state={item}
              >
                {languageContext === "english" ? (
                  <>Learn more</>
                ) : (
                  <>Tìm Hiểu Thêm</>
                )}
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
