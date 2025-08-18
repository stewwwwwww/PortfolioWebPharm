import React from "react";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const ResearchList = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="mx-4 max-w-[75rem] xl:mx-auto">
      <div className="flex flex-col items-center gap-20 py-16 pb-10 md:py-20 lg:py-24 xl:py-36">
        <h6 className="text-[#00378A]">Research</h6>
        <div className="flex flex-col items-center justify-between md:col-span-2 md:col-start-1 lg:md:col-span-3 lg:flex-row">
          <h1 className="self-start leading-none">
            {languageContext === "english" ? (
              <>Recent Researches</>
            ) : (
              <>Nghiên Cứu Gần Đây</>
            )}
          </h1>
          <p className="text-[#838B93] md:w-[68%] lg:w-[33%] lg:text-end">
            {languageContext === "english" ? (
              <>
                Our latest and most trusted researches to show effectiveness as
                well as efficacy.
              </>
            ) : (
              <>
                Những nghiên cứu lâm sàng để chứng minh độ hiệu quả của sản
                phẩm.
              </>
            )}
          </p>
        </div>
      </div>
      <div
        className="flex flex-col flex-wrap gap-8 md:flex-row md:items-center
    md:justify-between md:gap-6  lg:grid lg:grid-cols-3 lg:gap-6 lg:gap-y-10"
      >
        {data.map((research) => {
          return (
            <div
              className={classNames(
                "shadowContainer flex h-[36rem] flex-col items-start gap-5 rounded-[0.625rem] border-2 p-5 text-start sm:p-8 md:w-[48%] lg:w-full lg:p-5",
                { containerHover: isDesktop },
              )}
            >
              <img
                src={research.img}
                className=" h-[20rem] w-full rounded object-cover"
              />
              <h4 className="text-[#00378A]">
                {languageContext === "english"
                  ? research.name.english
                  : research.name.vietnamese}
              </h4>
              <p className="text-ellipsis text-[#838B93]">
                {languageContext === "english"
                  ? research.description.english
                  : research.description.vietnamese}
              </p>
              <Link
                to={`${research.name.english.replaceAll(/\s/g, "-")}`}
                className="text-[#00378A]"
                state={research}
              >
                {languageContext === "english" ? (
                  <>Learn more</>
                ) : (
                  <>Tìm Hiểu Thêm</>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResearchList;
