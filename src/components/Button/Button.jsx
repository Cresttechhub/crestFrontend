import React from "react";

const Button = ({ size = "md", children = "Contact us", className = "" }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-1 text-[13px]", // Default size
    lg: "px-16 py-2.5 text-lg", // Bigger button
  };

  return (
    <button className={`bg-[#009E65] text-white hover:bg-[#579b85] cursor-pointer rounded-md ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;