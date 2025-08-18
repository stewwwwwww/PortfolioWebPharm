import React from "react";
import pic from "../assets/doctor.jpg";
import { useState } from "react";
import { useAnimateContainer } from "../hooks/useAnimateContainer";
import validator from "validator";
import classNames from "classnames";
import { useContext } from "react";
import { LanguageContext } from "../App";
const Contact = () => {
  const { languageContext } = useContext(LanguageContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [noticeErr, setNoticeErr] = useState(false);

  const [notice, setNotice] = useState("");

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
  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName) {
      setNoticeErr(true);
      setNotice({
        english: "First Name is required",
        vietnamese: "Yêu cầu điền Tên",
      });
      return;
    }
    if (!lastName) {
      setNoticeErr(true);
      setNotice({
        english: "Last Name is required",
        vietnamese: "Yêu cầu điền Họ",
      });
      return;
    }
    if (!phoneNumber) {
      setNoticeErr(true);
      setNotice({
        english: "Phone Number is required",
        vietnamese: "Yêu cầu điền Số Điện Thoại",
      });
      return;
    }
    if (email && !validator.isEmail(email)) {
      setNoticeErr(true);
      setNotice({
        english: "Email entered is not valid",
        vietnamese: "Email không hợp lệ",
      });
      return;
    }
    if (!validator.isMobilePhone(phoneNumber) || phoneNumber.length < 9) {
      setNoticeErr(true);
      setNotice({
        english: "Phone Number is not valid",
        vietnamese: "Số Điện Thoại không hợp lệ",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://pharmabackend.onrender.com/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            message: message,
            status: "Pending",
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to post contact");
      setNoticeErr(false);
      setNotice({
        english: "Your message has been sent!",
        vietnamese: "Tin nhắn của bạn đã được gửi",
      });
    } catch (err) {
      setNoticeErr(true);
      setNotice({
        english: "You can only submit 2 messages a minute!",
        vietnamese: "Bạn chỉ có thể gửi 2 tin nhắn trong 1 phút",
      });
      console.error("Failed to post contact", err);
    }
  };

  const animationRef1 = useAnimateContainer();
  const animationRef2 = useAnimateContainer();
  return (
    <div
      className="mt-16 flex flex-col items-center bg-[#00378A] py-16 md:mt-20 md:py-20 lg:mt-24 
    lg:flex-row lg:items-stretch lg:py-0 lg:text-start xl:mt-36"
    >
      <div
        className="flex w-full flex-col gap-5 px-4 sm:w-[90%] lg:w-[50%] lg:py-24 lg:pr-6 
      xl:py-36 xl:pl-[calc(50%-37.5rem)] 2xl:w-[56%] 2xl:pr-10"
        ref={animationRef1}
      >
        <h6 className="text-white">
          {languageContext === "english" ? <>Contact Us</> : <>Liên Hệ</>}
        </h6>
        <h2 className="text-white">
          {languageContext === "english" ? (
            <>Get In Touch To Get More Information!</>
          ) : (
            <>Tìm Hiểu Thêm Thông Tin</>
          )}
        </h2>
        <form
          className="flex flex-col"
          ref={animationRef2}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="mt-6 flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem]
            border-white bg-[rgba(255,255,255,.1)] px-7
             text-[1.25rem] text-white 
             placeholder-white outline-0 lg:font-medium"
              type="text"
              name="customerName"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder={
                languageContext === "english" ? "First Name *" : "Tên *"
              }
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
             text-white placeholder-white 
             outline-0 lg:font-medium"
              type="text"
              name="customerName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder={
                languageContext === "english" ? "Last Name *" : "Họ *"
              }
            />
          </div>
          <div className="flex flex-col gap-x-5 xl:flex-row">
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
            border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
             text-white placeholder-white 
             outline-0 lg:font-medium"
              type="tel"
              name="customerPhoneNum"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder={
                languageContext === "english"
                  ? "Phone Number *"
                  : "Số Điện Thoại *"
              }
            />
            <input
              className="mb-5 h-16 w-full rounded-lg border-[0.0625rem] 
           border-white bg-[rgba(255,255,255,.1)] px-7 text-[1.25rem]
           text-white placeholder-white 
            outline-0 lg:font-medium"
              type="email"
              name="customerEmail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>
          <textarea
            className="h-36 resize-none overflow-hidden rounded-lg border-[0.0625rem] border-white 
            bg-[rgba(255,255,255,.1)] px-7 pt-3 text-[1.25rem] text-white placeholder-white outline-0 lg:font-medium"
            type="textarea"
            name="customerMessage"
            value={message}
            onChange={handleMessageChange}
            placeholder={languageContext === "english" ? "Message" : "Lời Nhắn"}
          />
          <div
            className="mt-10 flex flex-col items-center gap-5 lg:items-start xl:flex-row-reverse 
        xl:justify-end"
          >
            <p
              className={classNames(
                "lg:max-w-36 xl:ml-6 xl:max-w-48 xl:text-end",
                { "text-red-500": noticeErr },
                { "text-green-500": !noticeErr },
              )}
            >
              {languageContext === "english"
                ? notice.english
                : notice.vietnamese}
            </p>
            <div className="flex flex-row xl:flex-col">
              <p className="text-white">
                {languageContext === "english" ? "Call us at" : "Gọi chúng tôi"}{" "}
                &nbsp;
              </p>
              <p className="text-white">(+647) 647 647 6474</p>
            </div>
            <input
              type="submit"
              value={languageContext === "english" ? "Send" : "Gửi"}
              className="h-16 w-[12rem] cursor-pointer rounded-[2rem] border-[0.1rem] border-white bg-white
            font-[Inter,sans-serif] text-[1.25rem] text-[#00378A] transition-colors duration-300 ease-in-out
        hover:bg-[#00378A] hover:text-white lg:font-medium"
            />
          </div>
        </form>
      </div>
      <div className="flex min-h-full justify-center lg:w-[50%] 2xl:w-[44%]">
        <img
          src={pic}
          className="mt-14 object-cover px-4 sm:w-[85%] md:w-[95%] lg:mt-0 lg:h-full lg:w-full lg:px-0"
        ></img>
      </div>
    </div>
  );
};

export default Contact;
