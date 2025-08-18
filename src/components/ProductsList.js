import React from "react";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import pic from "../assets/research2.jpg";
import classNames from "classnames";
import { useContext } from "react";
import { CartContext } from "../App.js";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LanguageContext } from "../App.js";

const ProductsList = ({ data }) => {
  const { languageContext } = useContext(LanguageContext);
  const { CategoryId } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const categoryRefs = useRef({});

  const [isReadyToScroll, setIsReadyToScroll] = useState(false);

  // Assign refs to categories
  useEffect(() => {
    data.forEach((category) => {
      const normalizedCategory = category.category.english.replaceAll(
        /\s/g,
        "-",
      );
      if (!categoryRefs.current[normalizedCategory]) {
        categoryRefs.current[normalizedCategory] = React.createRef();
      }
    });

    // Indicate that refs are set up
    setIsReadyToScroll(true);
  }, [data]);

  // Scroll to the specific category after refs and data are ready
  useEffect(() => {
    if (isReadyToScroll && CategoryId) {
      const targetRef = categoryRefs.current[CategoryId];
      if (targetRef && targetRef.current) {
        const elementPosition = targetRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 120;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [CategoryId, isReadyToScroll]);

  const handleAddItem = (e) => {
    const currentProductCart = JSON.parse(localStorage.getItem("productCart"));
    if (
      !localStorage
        .getItem("productCart")
        .includes(e.target.getAttribute("data-productId"))
    ) {
      const newItem = {
        itemQuantity: 1,
        itemId: e.target.getAttribute("data-productId"),
        itemNameEnglish: e.target.getAttribute("data-productNameEnglish"),
        itemNameVietnamese: e.target.getAttribute("data-productNameVietnamese"),
        itemSubtotal: e.target.getAttribute("data-productPrice"),
        itemTotal: e.target.getAttribute("data-productPromotionPrice"),
        itemImg: e.target.getAttribute("data-productImg"),
      };
      currentProductCart.cartList.push(newItem);
    } else {
      const updatedItem = currentProductCart.cartList.find(
        ({ itemId }) => itemId === e.target.getAttribute("data-productId"),
      );

      const updatedIdx = currentProductCart.cartList.findIndex(
        ({ itemId }) => itemId === e.target.getAttribute("data-productId"),
      );
      currentProductCart.cartList[updatedIdx].itemQuantity =
        updatedItem.itemQuantity + 1;
    }
    currentProductCart.quantity += 1;
    currentProductCart.total =
      Number(currentProductCart.total) +
      Number(e.target.getAttribute("data-productPromotionPrice"));
    currentProductCart.subtotal =
      Number(currentProductCart.subtotal) +
      Number(e.target.getAttribute("data-productPrice"));
    handleAddToCart(currentProductCart);

    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center gap-20 py-16 md:py-20 lg:py-24 xl:py-36">
      <h6 className="text-[#00378A]">
        {languageContext === "english" ? <>Products</> : <>Sản Phẩm</>}
      </h6>
      {data.sort().map((category) => {
        return (
          <div
            key={category.category.english}
            ref={
              categoryRefs.current[
                category.category.english.replaceAll(/\s/g, "-")
              ]
            }
            className="mx-4 flex max-w-[75rem] flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            <div className="flex flex-col items-center justify-between md:col-span-2 md:col-start-1 lg:md:col-span-3 lg:flex-row">
              <h1 className="self-start leading-none">
                {languageContext === "english"
                  ? category.category.english
                  : category.category.vietnamese}
              </h1>
              <p className="text-[#838B93] md:w-[68%] lg:w-[33%] lg:text-end">
                {languageContext === "english"
                  ? category.categoryDescription.english
                  : category.categoryDescription.vietnamese}
              </p>
            </div>
            {category.productList.map((product, j) => {
              return (
                <div
                  className="group relative flex h-[26rem] flex-col items-center
                   justify-center rounded-[1.25rem] border-[0.0625rem] bg-cover
                   bg-center bg-no-repeat px-0 py-8 lg:h-[28rem]"
                  style={{
                    backgroundImage: `url(${pic})`,
                  }}
                >
                  <div
                    className={classNames(
                      {
                        "absolute inset-0 rounded-[1.25rem] bg-[#6D52FF] opacity-30 transition-opacity duration-[0.7s] ease-in-out group-hover:opacity-75":
                          isDesktop,
                      },
                      {
                        "absolute inset-0 rounded-[1.25rem] bg-[#6D52FF] opacity-30":
                          !isDesktop,
                      },
                    )}
                  ></div>
                  <div className="z-10 mt-10 flex flex-col items-center">
                    <h4
                      className={classNames("relative text-white", {
                        "translate-y-24 transition-transform duration-500 ease-in-out group-hover:translate-y-0":
                          isDesktop,
                      })}
                    >
                      {languageContext === "english"
                        ? product.name.english
                        : product.name.vietnamese}
                    </h4>
                    <p
                      className={classNames(
                        "sm:h-18 mb-3 mt-5 text-center text-white  lg:max-w-[70%]",
                        {
                          "forwards opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100":
                            isDesktop,
                        },
                      )}
                    >
                      {languageContext === "english"
                        ? product.description.english
                        : product.description.vietnamese}
                    </p>
                    <Link
                      className={classNames("text-white", {
                        "forwards opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100":
                          isDesktop,
                      })}
                      to={`/Products/${category.category.english.replaceAll(/\s/g, "-")}/${product.name.english.replaceAll(/\s/g, "-")}`}
                    >
                      {languageContext === "english" ? (
                        <>Read more</>
                      ) : (
                        <>Tìm hiểu thêm</>
                      )}
                    </Link>

                    <div className="mt-14 flex justify-between gap-2">
                      <h5
                        onClick={handleAddItem}
                        data-productId={product._id}
                        data-productNameEnglish={product.name.english}
                        data-productNameVietnamese={product.name.vietnamese}
                        data-productPrice={product.price}
                        data-productPromotionPrice={product.promotionPrice}
                        data-productImg={product.img}
                        className="cursor-pointer text-nowrap rounded-[0.625rem] px-4 py-[0.375rem] text-white underline"
                      >
                        {languageContext === "english" ? (
                          <>Add To Cart</>
                        ) : (
                          <>Thêm Vào Giỏ</>
                        )}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
