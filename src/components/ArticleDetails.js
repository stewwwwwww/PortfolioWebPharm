import React from "react";
import pic from "../assets/research.jpg";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import { useContext } from "react";
import { LanguageContext } from "../App.js";
const ArticleDetails = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  console.log(data);
  return (
    <div>
      <div
        className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat 
        py-40 md:py-48 lg:py-56 xl:py-64"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${pic})`,
        }}
      >
        <div
          className="flex w-full max-w-[75rem] flex-col items-center gap-7 px-4
         lg:items-start lg:text-start"
          ref={animationRef1}
        >
          <h1 className="max-w-[44rem] text-white">
            {languageContext === "english"
              ? data.name.english
              : data.name.vietnamese}
          </h1>
          <h5 className="text-white">
            {languageContext === "english"
              ? data.description.english
              : data.description.vietnamese}
          </h5>
        </div>
      </div>
      <div
        className="mx-4 flex max-w-[75rem] flex-col gap-9 py-16 text-start
       md:py-20 lg:py-24 xl:mx-auto xl:py-36"
        ref={animationRef2}
      >
        {data.components &&
          data.components.map((item) => {
            switch (item.type) {
              case "header":
                return (
                  <h4>
                    {languageContext === "english"
                      ? item.content.english
                      : item.content.vietnamese}
                  </h4>
                );
              case "description":
                return (
                  <h6 className="mb-9 text-[#838B93]">
                    {" "}
                    {languageContext === "english"
                      ? item.content.english
                      : item.content.vietnamese}
                  </h6>
                );
              case "paragraph":
                return (
                  <h6>
                    {languageContext === "english"
                      ? item.content.english
                      : item.content.vietnamese}
                  </h6>
                );
              case "point":
                return (
                  <h6 className="text-[#0037A8]">
                    &#128898; &nbsp;{" "}
                    {languageContext === "english"
                      ? item.content.english
                      : item.content.vietnamese}
                  </h6>
                );
              case "image":
                return (
                  <img
                    src={
                      languageContext === "english"
                        ? item.content.english
                        : item.content.vietnamese
                    }
                  />
                );
              case "linebreak":
                return Array(
                  Number(
                    languageContext === "english"
                      ? item.content.english
                      : item.content.vietnamese,
                  ),
                )
                  .fill(<br />)
                  .map((item) => {
                    return item;
                  });
              default:
                return;
            }
          })}
      </div>
    </div>
  );
};

export default ArticleDetails;
