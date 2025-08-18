import React from "react";
import pic from "../assets/research.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";
const OurTeamIntro = () => {
  const { languageContext } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center gap-16 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">
              {languageContext === "english" ? <>Our Team</> : <>Đội Ngũ</>}
            </h6>
            <h1>
              {languageContext === "english" ? (
                <>Meet Our Profesional Team</>
              ) : (
                <>Gặp Gỡ Đội Ngũ Chuyên Nghiệp</>
              )}
            </h1>
          </div>
          <p className="flex items-end text-[#838B93] lg:w-[33%] lg:text-end lg:self-end">
            {languageContext === "english" ? (
              <>
                Get to know the exceptional and highly qualified professionals
                who make up our medical laboratory team. Each member brings a
                wealth of expertise and a deep commitment to delivering accurate
                and reliable results.
              </>
            ) : (
              <>
                Những chuyên gia xuất sắc và có trình độ cao, những người tạo
                nên đội ngũ phòng thí nghiệm y tế của chúng tôi. Mỗi thành viên
                đều mang đến một kho tàng kiến thức chuyên môn và một sự cam kết
                sâu sắc đối với việc cung cấp kết quả chính xác và đáng tin cậy.
              </>
            )}
          </p>
        </div>
      </div>
      <img
        src={pic}
        className="lg: h-[25rem] w-full rounded-xl object-cover sm:h-[19rem] md:h-[31rem] xl:max-w-[75rem]"
      />
    </div>
  );
};

export default OurTeamIntro;
