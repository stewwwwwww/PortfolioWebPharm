import React from "react";
import pic from "../assets/companyLogo.png";
import tiktokBlack from "../assets/tiktokblack.svg";
import facebookBlack from "../assets/facebookblack.svg";
import zaloBlack from "../assets/zaloblack.svg";
import { useContext } from "react";
import { LanguageContext } from "../App.js";
const Footer = () => {
  const { languageContext } = useContext(LanguageContext);
  const handleOpenFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  };
  const handleOpenTiktok = () => {
    window.open("  https://www.tiktok.com", "_blank");
  };
  const handleOpenZalo = () => {
    window.open("https://zalo.me", "_blank");
  };
  return (
    <div className="flex flex-col items-center pt-16 md:pt-20 lg:pt-24 xl:pt-36">
      <div className="h-[0.0625rem] w-full max-w-[75rem] bg-[#eaeef3]"></div>
      <div className="mx-4 flex max-w-[75rem] flex-col items-center gap-8 py-12 lg:flex-row">
        <div className="flex flex-col items-center gap-7 md:w-[75%] lg:w-[70%] lg:items-start lg:text-start">
          <img src={pic} className="w-[7rem]" />
          <h2 className="font-medium text-[#00378A]">
            {languageContext === "english" ? <>Inquiries?</> : <>Thắc Mắc?</>}
          </h2>
          <p className="text-[#838B93]">
            {languageContext === "english" ? (
              <>
                Have inquiries or need assistance? We're here to help. Reach out
                to us through our contact form, email, or phone. Our team is
                ready to provide the support you need.
              </>
            ) : (
              <>
                Có thắc mắc hoặc cần hỗ trợ? Chúng tôi luôn sẵn sàng giúp đỡ.
                Liên hệ với chúng tôi qua biểu mẫu liên hệ, email, hoặc điện
                thoại. Đội ngũ của chúng tôi luôn sẵn sàng cung cấp sự hỗ trợ
                bạn cần.
              </>
            )}
          </p>
          <div className={"flex h-8 gap-6"}>
            <img
              className="h-8 w-8 cursor-pointer"
              src={facebookBlack}
              onClick={handleOpenFacebook}
            ></img>
            <img
              className="h-8 w-8 cursor-pointer"
              src={tiktokBlack}
              onClick={handleOpenTiktok}
            ></img>
            <img
              className="h-8 w-8 cursor-pointer"
              src={zaloBlack}
              onClick={handleOpenZalo}
            ></img>
          </div>
        </div>
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:grid-rows-2 md:w-[75%] lg:w-full">
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">
              {languageContext === "english" ? (
                <>Phone Number</>
              ) : (
                <>Số Điện Thoại</>
              )}
            </h4>
            <p className="text-[#838B93]">(+647) 038 667 3836</p>
            <p className="text-[#838B93]">(+647) 123 667 8994</p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">
              {languageContext === "english" ? (
                <>Office Location</>
              ) : (
                <>Địa Chỉ Văn Phòng</>
              )}
            </h4>
            <p className="text-[#838B93]">
              {languageContext === "english" ? (
                <>999A Church Street, Toronto, Ontario, M5A A1A</>
              ) : (
                <>999A Phố Church, Toronto, Ontario, M5A A1A</>
              )}
              999A Tran hung Dao, Phan Chu Trinh Disct, Hanoi, 10000
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">Email</h4>
            <p className="text-[#838B93]">gmailword@gmail.com</p>
            <p className="text-[#838B93]">workgmail@gmail.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-medium text-[#00378A]">
              {languageContext === "english" ? (
                <>Certificates</>
              ) : (
                <>Chứng Chỉ</>
              )}
            </h4>
            <p className="text-[#838B93]">
              {languageContext === "english" ? (
                <>
                  ABCDEF Certificate number 00-111/AAA-BBBB/CC0 issued by
                  Ministry of Health on 32/13/2020
                </>
              ) : (
                <>
                  Giấy Chứng Nhận ABCDEF số 00-111/AAA-BBBB/CC0 do Sở y tế cấp
                  ngày 32/13/2020
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[0.0625rem] w-full max-w-[75rem] bg-[#eaeef3]"></div>
      <div className=" w-full max-w-[75rem] gap-5 px-4 py-6">
        <div className="flex justify-end">
          <p className="text-[#00378A]">Duc Do. &nbsp;</p>{" "}
          <p className="text-[#838B93]">All Rights Reserved 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
