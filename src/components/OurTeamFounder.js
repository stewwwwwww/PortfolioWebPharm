import React from "react";
import pic from "../assets/ceo.jpg";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { useContext } from "react";
import { LanguageContext } from "../App";

const OurTeamFounder = () => {
  const { languageContext } = useContext(LanguageContext);
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
      className="shadowContainer relative mx-4 mt-16 flex flex-col gap-10 rounded-[0.625rem] border-2 pb-5 
      pt-10 md:mt-20 lg:mt-24 lg:flex-row lg:gap-20 lg:px-0 lg:pl-12 
    lg:pr-5 lg:pt-6 xl:mx-auto xl:mt-36 xl:max-w-[75rem]"
    >
      <div
        className="flex flex-col items-center gap-5 px-5 pt-6 lg:mr-0 lg:w-[56rem] 
      lg:items-start lg:text-start"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">
          {languageContext === "english" ? <>Founder</> : <>Nhà Sáng Lập</>}
        </h6>
        <h2 className="font-medium">Fake Person 1</h2>
        <p>
          {languageContext === "english" ? (
            <>
              Get to know the exceptional and highly qualified professionals who
              make up our medical laboratory team. Each member brings a wealth
              of expertise and a deep commitment to delivering accurate and
              reliable results.
            </>
          ) : (
            <>
              Những chuyên gia xuất sắc và có trình độ cao, những người tạo nên
              đội ngũ phòng thí nghiệm y tế của chúng tôi. Mỗi thành viên đều
              mang đến một kho tàng kiến thức chuyên môn và một sự cam kết sâu
              sắc đối với việc cung cấp kết quả chính xác và đáng tin cậy.
            </>
          )}
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${pic})` }}
        className="mx-5 flex h-[20rem]  w-auto flex-col justify-between rounded bg-cover bg-center
         bg-no-repeat text-start md:mx-[12%] lg:m-0 lg:h-[32.25rem] lg:w-full"
      >
        <div
          className="mt-6 flex flex-col items-start pl-7"
          ref={animationRef2}
        >
          <h2 className="font-semibold text-white">300+</h2>
          <h6 className="text-white">
            {languageContext === "english" ? <>Certificate</> : <>Chứng Chỉ</>}
          </h6>
          <h2 className="font-semibold text-white">300+</h2>
          <h6 className="text-white">
            {languageContext === "english" ? <>Achievement</> : <>Thành Tụu</>}
          </h6>
        </div>
        <div className="flex h-[25%] items-center pl-7 backdrop-blur-sm">
          <h6 className="text-white">
            {languageContext === "english" ? (
              <>Achived countless achievements in Medicines</>
            ) : (
              <>Đạt vô số thành tựu trong ngành Dược</>
            )}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default OurTeamFounder;
