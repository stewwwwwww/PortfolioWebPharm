import React from "react";
import video from "../assets/introVideo.mp4";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { LanguageContext } from "../App.js";
import { useContext } from "react";
const Intro = ({ onVideoLoaded }) => {
  const { languageContext } = useContext(LanguageContext);
  const animateRef = useAnimateContainer();
  // Video load event handler
  const handleVideoLoaded = () => {
    onVideoLoaded(true); // Notify the parent component that the video has loaded
  };
  return (
    <div className="relative mb-[3.75rem] flex items-center lg:justify-center">
      <video
        loop
        preload="auto"
        muted
        playsInline
        autoPlay
        className="relative h-[46.5rem] w-auto min-w-full object-cover brightness-75
        lg:h-[53.5rem] 2xl:h-[61.5rem]"
        onCanPlay={handleVideoLoaded}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className="absolute z-10 flex max-w-[75rem]  flex-col 
        items-center justify-center gap-7 px-4 lg:w-full 
        lg:items-start lg:text-start"
        ref={animateRef}
      >
        <h6 className="text-white">
          {languageContext === "english"
            ? "Lorem ipsum dolor sit amet consectetur"
            : "Dược Xanh Cho Sức Khỏe Mọi Nhà"}
        </h6>
        <h1 className="max-w-[48rem] text-white">
          {languageContext === "english"
            ? "Duke Do Health Care"
            : "Phòng Khám Sức Khỏe"}
        </h1>
        <div className="h-[0.0625rem] w-[90%] bg-[#838b93] md:w-[630px]"></div>
        <p className="text-white lg:w-[24rem]">
          {languageContext === "english"
            ? "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque id. Placerat in id cursus mi pretium tellus duis. Pretium tellus ."
            : "Chuyên nhập khẩu, phân phối Thuốc, Thực Phẩm Chức Năng, Mỹ Phẩm của các hãng dược hàng đầu Châu Âu. Tất cả sản phẩm ddeuf được nghiên cứu lâm sàng về hiệu quả điều trị và tính an toàn."}
        </p>
      </div>
    </div>
  );
};

export default Intro;
