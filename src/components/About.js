import React from "react";
import pic from "../assets/pharmacist.jpg";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const About = () => {
  const { languageContext } = useContext(LanguageContext);
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
      className="shadowContainer relative mx-4 mt-16  flex flex-col gap-10 rounded-[0.625rem] border-2 pb-5 
      pt-10 md:mt-20 lg:mt-24 lg:flex-row lg:gap-20 lg:px-0 lg:pl-12 
    lg:pr-5 lg:pt-6 xl:mx-auto xl:mt-36 xl:max-w-[75rem]"
    >
      <div
        className="flex flex-col items-center gap-5 px-5 pt-6 lg:mr-0 lg:w-[56rem] lg:items-start 
      lg:text-start"
        ref={animationRef1}
      >
        <h6 className="text-[#00378A]">
          {languageContext === "english" ? "About Us" : "Giới Thiệu"}
        </h6>
        <h2 className="font-medium">
          {languageContext === "english" ? (
            <>Over 20 Years if Experience</>
          ) : (
            <>Hơn 20 Năm Kinh Nghiệm trong Ngành</>
          )}
        </h2>
        <p>
          {languageContext === "english" ? (
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing
              elit quisque faucibus ex sapien vitae pellentesque. Vitae
              pellentesque sem placerat in id cursus mi. Cursus mi pretium
              tellus duis convallis tempus leo. Tempus leo eu aenean sed diam
              urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec
              metus.
            </>
          ) : (
            <>
              Các sản phẩm liên quan đến con người phải “Hoàn hảo”. Vì vậy chúng
              tôi lựa chọn các công ty đầu tư liên tục vào nghiên cứu nhằm cải
              thiện tính an toàn, hiệu quả cho từng sản phẩm trước khi ra đời.
              Do đó, tất cả các sản phẩm chúng tôi phân phối về Việt Nam đều có
              đầy đủ nghiên cứu lâm sàng.
            </>
          )}
        </p>
        <Link
          to="/AboutUs"
          className="shadowContainer p-auto mt-12 flex h-16 items-center justify-center rounded-[2rem] border-[0.1rem] px-8 transition-colors duration-300
        ease-in-out hover:bg-[#00378A] hover:text-white"
        >
          {languageContext === "english" ? <>Learn More</> : <>Xem Thêm</>}
        </Link>
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
            {languageContext === "english" ? <>Certificates</> : <>Chứng Chỉ</>}
          </h6>
          <h2 className="font-semibold text-white">300+</h2>
          <h6 className="text-white">
            {languageContext === "english" ? <>Awards</> : <>Giải Thưởng</>}
          </h6>
        </div>
        <div className="flex h-[25%] items-center pl-7 backdrop-blur-sm">
          <h6 className="text-white">
            {languageContext === "english" ? (
              <>We always value our customers</>
            ) : (
              <>Chúng tôi luôn đặt khác hàng lên đầu</>
            )}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
