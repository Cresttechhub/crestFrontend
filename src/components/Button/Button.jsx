import React from "react";

const Button = ({ size = "md", children = "", className = "", icon }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-[13px]",
    lg: "px-[35px] py-[15px] text-lg p-3 rounded-[15px]",
  };

  return (
    <button className={`bg-[#009E65] text-white hover:bg-[#579b85] cursor-pointer flex items-center gap-2  ${sizeClasses[size]} ${className}`}>
      {icon && <img src={icon} alt="icon" />}
      {children}
    </button>
  );
};

export default Button;