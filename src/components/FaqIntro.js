import React from "react";
import pic from "../assets/research.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";
const FaqIntro = () => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-16  px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">FAQ</h6>
            <h1>
              {languageContext === "english" ? (
                <>Have A Question?</>
              ) : (
                <>Câu Hỏi Thường Gặp</>
              )}
            </h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              
              {languageContext === "english" ? (
                <>
                  Our FAQ section provides answers to common questions about the
                  safe and effective use of medicines. Whether you're curious
                  about dosage, side effects, or how to properly store your
                  medications, you'll find helpful information here to ensure
                  you're using your medicines responsibly.
                </>
              ) : (
                <>
                  Chúng tôi cung cấp câu trả lời cho
                  các thắc mắc phổ biến về việc sử dụng thuốc an toàn và hiệu
                  quả. Cho dù bạn muốn biết về liều lượng, tác dụng phụ, hay
                  cách bảo quản thuốc đúng cách, bạn sẽ tìm thấy thông tin hữu
                  ích ở đây để đảm bảo bạn sử dụng thuốc.
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

export default FaqIntro;
