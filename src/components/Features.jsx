import React from "react";

function Features() {
  return (
    <div>
      <div className=" w-full h-screen flex justify-between items-center gap-10">
        <div className="w-1/2 px-20">
          <h1 className="text-5xl font-bold">
            {" "}
            You do the business,<br></br> we'll handle the money.
          </h1>
          <p className="text-2xl text-gray-400 mt-5">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="mt-5 capitalize text-black text-[1.5rem] bg-cyan-600 py-1 px-3 rounded-sm">
            get started
          </button>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-between items-center ">
            <img
              src="https://business-website-template.onrender.com/assets/Star-b8bf87ea.svg"
              className="bg-gray-900 p-3 rounded-full"
            />
            <div className="p-10">
              <h1 className="text-xl font-bold">Rewards</h1>
              <p className="text-xl text-gray-400">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <img
              src="https://business-website-template.onrender.com/assets/Send-454b3199.svg"
              className="bg-gray-900 p-3 rounded-full"
            />
            <div className="p-10">
              <h1 className="text-xl font-bold">100% Secured</h1>
              <p className="text-xl text-gray-400">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <img
              src="https://business-website-template.onrender.com/assets/Shield-6d9e87e5.svg"
              className="bg-gray-900 p-3 rounded-full"
            />
            <div className="p-10">
              <h1 className="text-xl font-bold">Balance Transfer</h1>
              <p className="text-xl text-gray-400">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards flex justify-between items-center w-full gap-20 p-20">
        <img
          src="https://business-website-template.onrender.com/assets/bill-fd47dad8.png"
          className="w-1/2"
        />
        <div className="mr-30">
          <h1 className="text-6xl font-semibold capitalize leading-normal">
            easily control your <br></br> billing & invoicing.
          </h1>
          <p className="text-gray-400 text-2xl py-7">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex gap-20  items-center">
            <img
              src="https://business-website-template.onrender.com/assets/apple-994d47a8.svg"
              alt=""
            />
            <img
              src="https://business-website-template.onrender.com/assets/google-3035153f.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-deals flex w-full justify-between items-center px-20 gap-20">
        <div className="gap-5">
          <h1 className="text-5xl font-semibold capitalize">
            find a better card deal <br></br>in few easy steps.
          </h1>
          <p className="text-xl text-gray-400 py-5">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <button className="bg-cyan-400 py-2 px-4 text-black rounded-sm">
            get started
          </button>
        </div>

        <div>
          <img
            src="https://business-website-template.onrender.com/assets/card-af071def.png"
            className="w-[100%]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center w-full  p-36   gap-36">
        <div className="">
          <h1 className="text-5xl font-bold">
            What people are saying about us
          </h1>
        </div>
        <div>
          <p className="text-xl text-gray-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center px-40 gap-10">
        <div className="w-1/5 ">
          <img
            src="https://business-website-template.onrender.com/assets/quotes-a87d5e6d.svg"
            alt=""
          />
          <p className="text-xl text-gray-400 py-10 ">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center justify-between gap-2">
            <img
              src="https://business-website-template.onrender.com/assets/people01-a772086b.png"
              alt=""
            />
            <p className="">
              <span className="text-2xl font-bold">Herman Jensen</span>{" "}
              <br></br>
              <span className="text-gray-400 capitalize">founder & leader</span>
            </p>
          </div>
        </div>
        <div className="w-1/5 ">
          <img
            src="https://business-website-template.onrender.com/assets/quotes-a87d5e6d.svg"
            alt=""
          />
          <p className="text-xl text-gray-400 py-10 px-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center justify-between px-2 gap-10">
            <img
              src="https://business-website-template.onrender.com/assets/people01-a772086b.png"
              alt=""
            />
            <p className="">
              <span className="text-2xl font-bold">Herman Jensen</span>{" "}
              <br></br>
              <span className="text-gray-400 capitalize">founder & leader</span>
            </p>
          </div>
        </div>
        <div className="w-1/5 ">
          <img
            src="https://business-website-template.onrender.com/assets/quotes-a87d5e6d.svg"
            alt=""
          />
          <p className="text-xl text-gray-400 py-10 px-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex items-center justify-between px-2 gap-10">
            <img
              src="https://business-website-template.onrender.com/assets/people01-a772086b.png"
              alt=""
            />
            <p className="">
              <span className="text-2xl font-bold">Herman Jensen</span>{" "}
              <br></br>
              <span className="text-gray-400 capitalize">founder & leader</span>
            </p>
          </div>
        </div>
      </div>

      <div className="brands flex justify-between items-center px-20 pt-20 ">
        <img
          src="https://business-website-template.onrender.com/assets/airbnb-ac0ba47e.png"
          alt=""
          className="w-[18%]"
        />
        <img
          src="https://business-website-template.onrender.com/assets/binance-ef218256.png"
          alt=""
          className="w-[18%]"
        />
        <img
          src="https://business-website-template.onrender.com/assets/dropbox-fb49a0e9.png"
          alt=""
          className="w-[18%]"
        />
        <img
          src="https://business-website-template.onrender.com/assets/coinbase-fd06c89f.png"
          className="w-[18%]"
        />
      </div>

      <div className="flex justify-center items-center  bg-gray-900 w-[80%] ml-40 mt-10 gap-20 rounded-lg py-10">
        <div className=" ">
          <h1 className="text-7xl font-bold">Let's try our service now!</h1>
          <p className="text-xl text-gray-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="capitalize bg-cyan-400 rounded-sm p-2 text-black">get started</button>
      </div>
    </div>
  );
}

export default Features;
