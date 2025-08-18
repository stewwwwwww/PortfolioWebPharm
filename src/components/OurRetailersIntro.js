import React from "react";
import pic from "../assets/research.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App";
const OurRetailersIntro = () => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">
              {languageContext === "english" ? (
                <>Our Retailers</>
              ) : (
                <>Chi Nhánh Phân Phối</>
              )}
            </h6>
            <h1>
              {languageContext === "english" ? (
                <>Find Out Where To Get Our Products</>
              ) : (
                <>Sản Phẩm trên Thị Trường</>
              )}{" "}
            </h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              {languageContext === "english" ? (
                <>
                  Our retailers provide a wide range of quality products at
                  convenient locations throughout Vietnam. Each is dedicated to
                  excellent customer service and a seamless shopping experience.
                  Find a trusted retailer near you.
                </>
              ) : (
                <>
                  Các nhà bán lẻ của chúng tôi cung cấp đa dạng sản phẩm chất
                  lượng tại các địa điểm thuận tiện trên khắp Việt Nam. Mỗi nhà
                  bán lẻ cam kết dịch vụ khách hàng xuất sắc và trải nghiệm mua
                  sắm liền mạch. Tìm nhà bán lẻ đáng tin cậy gần bạn.
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

export default OurRetailersIntro;
