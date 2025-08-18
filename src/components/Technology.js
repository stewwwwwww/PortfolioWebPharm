import React from "react";
import pic from "../assets/research.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import point from "../assets/point.png";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App.js";
import { useContext } from "react";
const Technology = () => {
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  const { languageContext } = useContext(LanguageContext);
  return (
    <div
      className="relative mt-16 flex w-full flex-col items-center bg-cover 
      bg-no-repeat pt-16 md:mt-20 md:pt-20 lg:mt-24 lg:pt-24 xl:mt-36 xl:pt-36"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div
        className="flex w-full max-w-[75rem] flex-col items-center gap-16 px-4
       lg:items-start lg:text-start"
        ref={animationRef1}
      >
        <h2 className="max-w-[44rem] text-white">
          {languageContext === "english" ? (
            <>Manufacture Technology</>
          ) : (
            <>Công Nghệ Sản Xuất</>
          )}
        </h2>
        <div className="flex flex-col items-start gap-8 text-start">
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </>
              ) : (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                  Vitae pellentesque sem placerat in id cursus mi. Cursus mi
                  pretium tellus duis convallis tempus leo. Tempus leo eu aenean
                  sed diam urna tempor. Urna tempor pulvinar vivamus fringilla
                  lacus nec metus.
                </>
              ) : (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                  Vitae pellentesque sem placerat in id cursus mi. Cursus mi
                  pretium tellus duis convallis tempus leo. Tempus leo eu aenean
                  sed diam urna tempor. Urna tempor pulvinar vivamus fringilla
                  lacus nec metus.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit
                  quisque faucibus ex sapien vitae pellentesque sem. Sem
                  placerat in id cursus mi pretium tellus. Tellus duis convallis
                  tempus leo eu aenean sed. Sed diam urna tempor pulvinar
                  vivamus fringilla lacus. Lacus nec metus bibendum egestas
                  iaculis massa nisl. Nisl malesuada lacinia integer nunc
                  posuere ut hendrerit.
                </>
              ) : (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit
                  quisque faucibus ex sapien vitae pellentesque sem. Sem
                  placerat in id cursus mi pretium tellus. Tellus duis convallis
                  tempus leo eu aenean sed. Sed diam urna tempor pulvinar
                  vivamus fringilla lacus. Lacus nec metus bibendum egestas
                  iaculis massa nisl. Nisl malesuada lacinia integer nunc
                  posuere ut hendrerit.
                </>
              )}
            </h5>
          </div>
          <div className="flex gap-5">
            <img src={point} className="h-6 w-6" />
            <h5 className="text-white">
              {languageContext === "english" ? (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
                  consectetur adipiscing elit quisque faucibus ex sapien.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat.
                  Vitae pellentesque sem placerat in id cursus mi.
                </>
              ) : (
                <>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
                  consectetur adipiscing elit quisque faucibus ex sapien.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat.
                  Vitae pellentesque sem placerat in id cursus mi.
                </>
              )}
            </h5>
          </div>
        </div>
      </div>
      <div
        className="mt-10 flex w-full flex-wrap justify-around gap-2 
         px-2 py-5 backdrop-blur-md backdrop-brightness-[1.15]
         sm:mt-14 sm:gap-9 sm:px-[calc((100%-32rem)/2)] md:mt-16 md:gap-14 
         md:px-[calc((100%-36rem)/2)] lg:mt-24  lg:gap-24 
         lg:px-[calc((100%-48rem)/2)] xl:mt-20"
        ref={animationRef2}
      >
        <img src={partner1} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner2} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner3} className="w-[4rem] sm:w-[6rem]" />
        <img src={partner4} className="w-[6rem] sm:w-[8rem]" />
      </div>
    </div>
  );
};

export default Technology;
