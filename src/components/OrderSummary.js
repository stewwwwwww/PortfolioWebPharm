import React, { useEffect } from "react";
import { useState } from "react";
import pic from "../assets/research.jpg";
import deleteIcon from "../assets/delete.svg";
import { CartContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
const OrderSummary = () => {
  const {
    cartContext,
    handleRemoveFromCart,
    handleIncrementCartItem,
    handleDecrementCartItem,
    handleResetCart,
  } = useContext(CartContext);
  const [streetAddress, setStreetAddress] = useState("");
  const [ward, setWard] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const [notice, setNotice] = useState("");

  const [alert, setAlert] = useState(
    `You have added ${cartContext.quantity} items.`,
  );
  useEffect(() => {
    setAlert(`You have added ${cartContext.quantity} items.`);
  }, [cartContext.quantity]);

  const handleStreetAddressChange = (e) => {
    e.preventDefault();
    setStreetAddress(e.target.value);
  };
  const handleWardChange = (e) => {
    e.preventDefault();
    setWard(e.target.value);
  };
  const handleDistrictChange = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
  };
  const handleCityChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleNoteChange = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };
  const handleSubmitOrder = async (e) => {
    console.log(phoneNumber.length);

    e.preventDefault();
    if (!streetAddress) {
      setNotice("Street Address is required");
      return;
    }
    if (!district) {
      setNotice("District is required");
      return;
    }
    if (!city) {
      setNotice("City is required");
      return;
    }
    if (!firstName) {
      setNotice("First Name is required");
      return;
    }
    if (!lastName) {
      setNotice("Last Name is required");
      return;
    }
    if (!phoneNumber) {
      setNotice("Phone Number is required");
      return;
    }
    if (email && !validator.isEmail(email)) {
      setNotice("Email entered is not valid");
      return;
    }
    if (!validator.isMobilePhone(phoneNumber) || phoneNumber.length < 9) {
      setNotice("Phone Number entered is not valid");
      return;
    }

    try {
      const products = cartContext.cartList.map((item) => ({
        name: item.itemNameEnglish,
        productPrice: Number(item.itemTotal),
        productPromotionPrice: Number(item.itemSubtotal),
        productSubtotal: item.itemSubtotal * item.itemQuantity,
        productTotal: item.itemTotal * item.itemQuantity,
        productQuantity: item.itemQuantity,
      }));
      console.log(
        JSON.stringify({
          products: products,
          orderInfo: {
            orderSubtotal: cartContext.subtotal,
            orderTotal: cartContext.total,
            orderQuantity: cartContext.quantity,
          },
          shippingAddress: {
            streetAddress: streetAddress,
            ward: ward,
            district: district,
            city: city,
          },
          contactInfo: {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            note: note,
            status: "Pending"
          },
        }),
      );
      const response = await fetch(
        "https://pharmabackend.onrender.com/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            products: products,
            orderInfo: {
              orderSubtotal: cartContext.subtotal,
              orderTotal: cartContext.total,
              orderQuantity: cartContext.quantity,
            },
            shippingAddress: {
              streetAddress: streetAddress,
              ward: ward,
              district: district,
              city: city,
            },
            contactInfo: {
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber,
              email: email,
              note: note,
            },
            status: "Pending",
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to post contact");
      handleResetCart();
      setAlert("You have successfully ordered.");
    } catch (err) {
      setNotice("You can only submit 2 messages a minute!");
      console.error("Failed to post contact", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 px-4 pt-16 md:gap-12 md:pt-20 lg:pt-24 xl:pt-36">
      <h2 className="text-center">Order Summary</h2>
      <h5 className="text-center">{alert}</h5>
      {cartContext.quantity === 0 ? (
        <Link to="/" className="text-[#00378A] underline">
          Go back to Home Page.
        </Link>
      ) : null}
      {cartContext.quantity === 0 ? null : (
        <div className="flex w-full max-w-[75rem] flex-col justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-4 md:w-[66%]">
            {cartContext.cartList.map((item) => {
              return (
                <div className="flex gap-3 rounded-xl border-[0.1rem] border-gray-300  p-2 sm:gap-6 sm:p-4">
                  <img
                    src={pic}
                    className="hidden aspect-square w-28 rounded-md object-cover min-[420px]:block sm:w-48 md:w-40 "
                  />
                  <div className="flex w-full justify-between">
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <h4>{item.English}</h4>
                        {item.itemSubtotal ? (
                          <h6 className="text-red-500 line-through">
                            {item.itemSubtotal.replace(
                              /(\d)(?=(\d{3})+(?!\d))/g,
                              "$1,",
                            )}{" "}
                            VND
                          </h6>
                        ) : null}
                        <h6>
                          {item.itemTotal.replace(
                            /(\d)(?=(\d{3})+(?!\d))/g,
                            "$1,",
                          )}{" "}
                          VND
                        </h6>
                      </div>
                      <div className="flex h-fit w-24 items-start justify-between gap-1 rounded-[0.625rem] border-[0.15rem] border-[#00378A] px-3 py-2">
                        <h6>{item.itemQuantity}</h6>
                        <div className="flex flex-col justify-center gap-[0.35rem]">
                          <div
                            onClick={() => {
                              handleIncrementCartItem(
                                item.itemId,
                                item.itemSubtotal,
                                item.itemTotal,
                              );
                            }}
                            className="h-0 w-0 cursor-pointer border-b-[10.5px] border-l-[7px]
                    border-r-[7px] border-black border-l-transparent border-r-transparent"
                          ></div>
                          <div
                            onClick={() => {
                              handleDecrementCartItem(
                                item.itemId,
                                item.itemSubtotal,
                                item.itemTotal,
                              );
                            }}
                            className="h-0 w-0 cursor-pointer border-l-[7px] border-r-[7px]
                  border-t-[10.5px] border-black border-l-transparent border-r-transparent"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between text-end">
                      <h6>
                        {String(item.itemTotal * item.itemQuantity).replace(
                          /(\d)(?=(\d{3})+(?!\d))/g,
                          "$1,",
                        )}{" "}
                        VND
                      </h6>
                      <img
                        src={deleteIcon}
                        className="w-6 cursor-pointer"
                        onClick={() => {
                          handleRemoveFromCart(
                            item.itemId,
                            item.itemQuantity,
                            item.itemSubtotal,
                            item.itemTotal,
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="flex flex-col gap-4 md:w-[32%]"
            onSubmit={handleSubmitOrder}
          >
            <div className="flex flex-col gap-4 rounded-xl border-[0.1rem] border-gray-300 p-3 sm:p-4">
              <h4>Shipping Address</h4>
              <div className="flex flex-col gap-y-2">
                <h5>
                  Street Address <span className="text-red-500">*</span>:
                </h5>
                <input
                  className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                  type="text"
                  name="orderStreetAddress"
                  value={streetAddress}
                  onChange={handleStreetAddressChange}
                />
                <h5>Ward:</h5>
                <input
                  className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                  type="text"
                  name="orderWard"
                  value={ward}
                  onChange={handleWardChange}
                />
                <h5>
                  District <span className="text-red-500">*</span>:
                </h5>
                <input
                  className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                  type="text"
                  name="orderStreetAddress"
                  value={district}
                  onChange={handleDistrictChange}
                />
                <h5>
                  City <span className="text-red-500">*</span>:
                </h5>
                <input
                  className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                  type="text"
                  name="orderCity"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border-[0.1rem] border-gray-300 p-3 sm:p-4">
              <h4>Contact Information</h4>
              <h5>
                First Name <span className="text-red-500">*</span>:
              </h5>
              <input
                className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                type="text"
                name="orderFirstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <h5>
                Last Name <span className="text-red-500">*</span>:
              </h5>
              <input
                className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                type="text"
                name="orderLastname"
                value={lastName}
                onChange={handleLastNameChange}
              />
              <h5>
                Phone Number <span className="text-red-500">*</span>:
              </h5>
              <input
                className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                type="text"
                name="orderPhoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <h5>Email Adress:</h5>
              <input
                className=" h-10 w-full rounded-md border-[0.1rem]
                px-2 text-[1.25rem] outline-0 lg:font-medium"
                type="text"
                name="orderEmailAddress"
                value={email}
                onChange={handleEmailChange}
              />
              <h5>Note:</h5>
              <textarea
                className=" min-h-24 w-full overflow-hidden rounded-md
                border-[0.1rem] px-2 text-[1.25rem] outline-0 lg:font-medium"
                type="text"
                name="orderNote"
                value={note}
                onChange={handleNoteChange}
              />
            </div>

            <div className="flex flex-col gap-4 rounded-xl border-[0.1rem] border-gray-300 p-3 sm:p-4">
              <h4>Price Summary</h4>
              <div className="flex justify-between">
                <h6>SubTotal:</h6>
                <h6>
                  {String(cartContext.subtotal).replace(
                    /(\d)(?=(\d{3})+(?!\d))/g,
                    "$1,",
                  )}
                </h6>
              </div>
              <div className="flex justify-between">
                <h6>Total:</h6>
                <h6>
                  {String(cartContext.total).replace(
                    /(\d)(?=(\d{3})+(?!\d))/g,
                    "$1,",
                  )}
                </h6>
              </div>

              <input
                type="submit"
                value="Submit Order"
                className={
                  "mt-4 h-12  cursor-pointer rounded-md bg-[#00378A] font-[Inter,sans-serif] text-[1.25rem] text-white lg:font-medium"
                }
              />
              <h6 className="self-center text-center text-red-500">{notice}</h6>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
