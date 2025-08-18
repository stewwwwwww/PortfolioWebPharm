import React from "react";
import pic from "../assets/research1.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const JoinUsIntro = () => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">
              {languageContext === "english" ? (
                <>Join Us</>
              ) : (
                <>Tham Gia Chúng Tôi</>
              )}
            </h6>
            <h1>
              {languageContext === "english" ? (
                <>Be a part of our Team</>
              ) : (
                <>Tham gia đội ngũ</>
              )}
            </h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              {languageContext === "english" ? (
                <>
                  We’re seeking passionate individuals to join our team. If
                  you’re ready for new challenges and want to contribute to
                  meaningful projects, explore our job openings. 
                </>
              ) : (
                <>
                  Chúng tôi đang tìm kiếm những cá nhân đam mê để gia nhập đội
                  ngũ. Nếu bạn sẵn sàng cho những thách thức mới và muốn đóng
                  góp vào các dự án ý nghĩa, hãy khám phá các vị trí tuyển dụng
                  của chúng tôi.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <img
        src={pic}
        className="lg: h-[25rem] w-full rounded-xl object-cover sm:h-[19rem] md:h-[31rem] md:h-[32.5rem] xl:max-w-[75rem]"
      />
    </div>
  );
};

export default JoinUsIntro;
