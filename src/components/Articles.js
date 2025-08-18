import React from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import classNames from "classnames";
import { isDesktop } from "react-device-detect";
import { useContext } from "react";
import { LanguageContext } from "../App.js";
import { Link } from "react-router-dom";

const Articles = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div className="pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div
        className="flex flex-col items-center gap-5 pb-10 text-center"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">
          {languageContext === "english" ? <>Articles</> : <> Tin Tức</>}
        </h6>
        <h2 className="max-w-[50rem]">
          {languageContext === "english" ? (
            <> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
          ) : (
            <>Tin tức và sự kiện nổi bật của tập đoàn</>
          )}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-8" ref={animationRef2}>
        {data.slice(0, 3).map((item) => {
          return (
            <div
              className={classNames(
                "shadowContainer mx-4 flex max-w-[75rem] flex-col justify-between gap-6 rounded-[0.625rem] border-2 p-5 sm:p-8 md:flex-row md:text-start lg:gap-0 lg:p-5",
                { containerHover: isDesktop },
              )}
            >
              <img
                src={item.img}
                className="h-[23  rem] rounded-md object-cover md:w-[40%]"
              />
              <div className="flex flex-col gap-6 md:w-[54%]">
                <h2 className="text-[#00378A]">
                  {languageContext === "english"
                    ? item.name.english
                    : item.name.vietnamese}
                </h2>
                <h5 className="text-[#838B93]">
                  {" "}
                  {languageContext === "english"
                    ? item.description.english
                    : item.description.vietnamese}
                </h5>
                <Link
                  to={`/Insights/Articles/${item.name.english}`.replaceAll(
                    /\s/g,
                    "-",
                  )}
                  className="text-[#00378A] mt- 16"
                  state={item}
                >
                  {languageContext === "english" ? <>Learn More</>: <>Xem Thêm</>}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
