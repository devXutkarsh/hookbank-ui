import React from "react";

function Navbar() {
  return (
    <>
    <div className="flex justify-between items-center p-20">
      <div>
        <img
          src="https://business-website-template.onrender.com/assets/logo-efc6c435.svg"
          alt=""
        />
        <p>
          A new way to make the payments easy, <br></br>reliable and secure.
        </p>
      </div>
     <div className="flex justify-between items-center w-1/2">
     <div className="">
        <h1  className="text-xl font-semibold">Useful Links</h1>
        <p>Content</p>
        <p>How it Works</p>
        <p>create</p>
        <p>explor</p>
        <p>terms & services</p>
      </div>
     <div className="">
        <h1  className="text-xl font-semibold">Useful Links</h1>
        <p>Content</p>
        <p>How it Works</p>
        <p>create</p>
        <p>explor</p>
        <p>terms & services</p>
      </div>
     <div className="">
        <h1  className="text-xl font-semibold">Useful Links</h1>
        <p>Content</p>
        <p>How it Works</p>
        <p>create</p>
        <p>explor</p>
        <p>terms & services</p>
      </div>
     
     </div>
   
    </div>

    <div className="border-gray-700 border-t-2 flex justify-between items-center w-full">
      <p className="text-xl font-semibold">2023 HooBank. All Rights Reserved.</p>
     </div>
     <div className="flex">
      <img src="https://business-website-template.onrender.com/assets/instagram-a54e883a.svg" alt="" />
      <img src="https://business-website-template.onrender.com/assets/facebook-b1172216.svg" alt="" />
      <img src="https://business-website-template.onrender.com/assets/twitter-8f349e28.svg" alt="" />
      <img src="https://business-website-template.onrender.com/assets/linkedin-3be30c66.svg" alt="" />
     </div>
    </>
  );
}

export default Navbar;
