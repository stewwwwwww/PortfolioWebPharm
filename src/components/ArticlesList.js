import React from "react";
// import { data } from "../data/ArticlesData";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { isDesktop } from "react-device-detect";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const ArticlesList = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const navRef = useRef(null);
  //Numbers of Navigation Bar pivot and Navigation Bar length and each page length
  // (length > pivot)
  const currentPivot = 3;
  let navBarLength = 6;
  const pageLength = 6;
  if (navBarLength >= Math.ceil(data.length / pageLength)) {
    navBarLength = Math.ceil(data.length / pageLength);
  }
  const navList = Array.from(
    { length: Math.ceil(data.length / pageLength) },
    (_, i) => i + 1,
  );

  const [currentNavList, setCurrentNavList] = useState([]);
  const [currentNav, setCurrentNav] = useState(1);
  const handleNavigation = (e) => {
    setCurrentNav(Number(e.target.textContent));
  };
  useEffect(() => {
    if (currentNav <= currentPivot) {
      setCurrentNavList(
        navList
          .slice(0, navBarLength - 1)
          .concat([navList[navList.length - 1]]),
      );
    } else if (currentNav >= navList.length - (navBarLength - currentPivot)) {
      setCurrentNavList(
        [navList[0]].concat(navList.slice(navList.length - navBarLength + 1)),
      );
    } else {
      setCurrentNavList(
        [navList[0]]
          .concat(
            navList.slice(
              currentNav - currentPivot + 1,
              currentNav + (navBarLength - currentPivot) - 1,
            ),
          )
          .concat([navList[navList.length - 1]]),
      );
    }
    return () => {};
  }, [currentNav]);
  return (
    <div className="mx-4 flex max-w-[75rem] flex-col gap-10 pb-10 pt-16 md:pt-20 lg:pt-24 xl:mx-auto xl:pt-36">
      <div className="flex items-center justify-between">
        <h1 className="leading-none self-start">
          {languageContext === "english" ? (
            <>Recent Articles</>
          ) : (
            <>Tin Tức Gần Đây</>
          )}
        </h1>
        <p className="text-[#838B93] md:w-[68%] lg:w-[33%] lg:text-end">
          {languageContext === "english" ? (
            <>
              Nam eget magna arcu. Morbi molestie, quam cursus eleifend
              interdum, lorem ante tempor nibh, efficitur dictum metus arcu vel
              sapien. Vivamus in ligula
            </>
          ) : (
            <>
              Các nhà máy đạt tiêu chuẩn GMP của Guna, 0.F.I… với diện tích lên
              tới 6000m2. hệ thống Quản lý chất lượng tích hợp có cấu trúc đảm
              bảo tiêu chuẩn ISO 9001:2015. 
            </>
          )}
        </p>
      </div>
      <div
        className="flex flex-col flex-wrap gap-8 md:flex-row
        md:items-center md:justify-between  md:gap-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:gap-y-10"
      >
        {data
          .slice((currentNav - 1) * pageLength, currentNav * pageLength)
          .map((article) => {
            return (
              <div
                className={classNames(
                  "shadowContainer h-[36rem] flex flex-col items-start gap-5 rounded-[0.625rem] border-2 p-5 text-start sm:p-8 md:mx-0 md:w-[48%] lg:w-full lg:p-5",
                  { containerHover: isDesktop },
                )}
              >
                <img
                  src={article.img}
                  className=" h-[20rem] w-full rounded object-cover"
                />
                <h4 className="text-[#00378A]">
                  {languageContext === "english"
                    ? article.name.english
                    : article.name.vietnamese}
                </h4>
                <p className="text-[#838B93] text-ellipsis">
                  {languageContext === "english"
                    ? article.description.english
                    : article.description.vietnamese}
                </p>
                <Link
                  to={`/Insights/Articles/${article.name.english}`.replaceAll(
                    /\s/g,
                    "-",
                  )}
                  className="text-[#00378A]"
                  state={article}
                >
                  {languageContext === "english" ? <>Learn More</>: <>Xem Thêm</>}
                </Link>
              </div>
            );
          })}
      </div>
      {currentNavList.length > 1 && (
        <div className="flex justify-center gap-8 lg:self-end" ref={navRef}>
          {currentNavList.map((item) => {
            return (
              <h4
                className={
                  item === currentNav
                    ? "cursor-pointer text-[#00378A]"
                    : "cursor-pointer text-[#838B93]"
                }
                onClick={handleNavigation}
              >
                {item}
              </h4>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
