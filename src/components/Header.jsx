import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 pt-4 capitalize">
      <img
        src="https://business-website-template.onrender.com/assets/logo-efc6c435.svg"
        alt=""
        className="w-40"
      />
      <div className="flex items-center gap-9 text-xl font-serif">
        <p>home </p>
        <p>features</p>
        <p>product</p>
        <p>clients</p>
      </div>
    </div>
  );
}

export default Header;
