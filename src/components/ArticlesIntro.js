import React from "react";
import pic from "../assets/research.jpg";
import { useContext } from "react";
import { LanguageContext } from "../App.js";
const ArticlesIntro = () => {
  const { languageContext } = useContext(LanguageContext);
  return (
    <div
      className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat py-24 
          text-center md:py-32 lg:py-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
      }}
    >
      <div className="flex w-full max-w-[75rem] flex-col items-center gap-6 px-4">
        <h6 className=" text-white">
          {languageContext === "english" ? <>Articles</> : <>Tin Tức</>}
        </h6>
        <h1 className="text-white lg:w-[68%]">
          {languageContext === "english" ? (
            <>Revolutionizing Medical Science</>
          ) : (
            <>Cách Mạng Hóa Ngành Y Tế</>
          )}
        </h1>
        <p className="text-white lg:w-[68%]">
          {languageContext === "english" ? (
            <>
              Discover how groundbreaking research, innovative technologies, and
              cutting-edge treatments are shaping the future of medicine.
            </>
          ) : (
            <>
              Khám phá cách nghiên cứu đột phá, công nghệ tiên tiến và phương
              pháp điều trị tiên tiến đang định hình tương lai của y học.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default ArticlesIntro;
