import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="w-full  flex items-center justify-between gap-30 ">
        <div className="left w-1/2 pl-20">
          <div className="flex w-fit capitalize items-center bg-gray-800  rounded-lg pr-5 ">
            <img
              src="https://business-website-template.onrender.com/assets/Discount-61d9dc08.svg"
              alt=""
              className="w-10"
            />
            <p className="text-xl">20% discount for 1 mnth account</p>
          </div>
          <div className="">
            <h1 className="text-[5.1rem] font-semibold font-mono capitalize leading-tight ">
              the next <br></br>
              <span className="text-cyan-500">generation</span> <br></br>
              <span>payment method.</span>
            </h1>

            <p className="text-[1.4rem] text-gray-500">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div className="right w-1/2">
          <img
            src="https://business-website-template.onrender.com/assets/robot-352cd501.png"
            alt=""
            className="w-[90%] ml-[75px]"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-20 uppercase">
        <p className="text-5xl font-bold">
          3000+{" "}
          <span className="text-gray-500 text-[1.5rem] ">User Active</span>{" "}
        </p>
        <p className="text-5xl font-bold">
          230+{" "}
          <span className="text-gray-500 text-[1.5rem] ">
            {" "}
            Trusted By Company
          </span>{" "}
        </p>
        <p className="text-5xl font-bold">
          $230M+{" "}
          <span className="text-gray-500 text-[1.5rem]  ">Transction</span>{" "}
        </p>
      </div>
    </div>
  );
}
<font-3></font-3>;

export default Hero;
