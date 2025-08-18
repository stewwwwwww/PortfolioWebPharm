import React from "react";
import pic from "../assets/pharmacist.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";
const ContactUsIntro = () => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">
              {languageContext === "english" ? <>Get in Touch</> : <>Liên Hệ</>}
            </h6>
            <h1>
              {languageContext === "english" ? (
                <>Ask Us Anything</>
              ) : (
                <>Hỏi Chúng Tôi</>
              )}
            </h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              {languageContext === "english" ? (
                <>
                  Have questions or need assistance? We're here to help. Reach
                  out to us through our contact form, email, or phone. Our team
                  is ready to provide the support you need.
                </>
              ) : (
                <>
                  Có câu hỏi hoặc cần hỗ trợ? Chúng tôi luôn sẵn sàng giúp đỡ.
                  Liên hệ với chúng tôi qua biểu mẫu liên hệ, email, hoặc điện
                  thoại. Đội ngũ của chúng tôi luôn sẵn sàng cung cấp sự hỗ trợ
                  bạn cần.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <img
        src={pic}
        className="lg: h-[25rem] w-full rounded-xl object-cover sm:h-[19rem] md:h-[31rem] lg:h-[32.5rem] xl:max-w-[75rem]"
      />
    </div>
  );
};

export default ContactUsIntro;
