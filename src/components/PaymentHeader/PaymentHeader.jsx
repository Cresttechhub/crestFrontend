import React from "react";
import { useAuth } from "../../contexts/AuthContext"

import Icon from "../../images/MainIcon.svg";

const PaymentHeader = () => {
  const {isLoggedIn, user } = useAuth();
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center px-24 py-8">
      <nav className="w-full flex justify-between items-center px-4 border-b md:border-none border-[#D6D6D6] bg-white md:rounded-[20px]">
        <div className="flex items-center pr-3 ml-1">
          <img src={Icon} alt="Icon" className="h-10" />
          <span className="font-bold text-2xl">CrestTech Hub</span>
        </div>
        {isLoggedIn && user ? (
                  <div className="flex items-center pr-3 space-x-1">
                  <p className="bg-[#9747FF] font-[400] text-[23px] text-white rounded-full w-8 h-8 flex items-center justify-center ">
                  {user?.initials || 'N/A'}
                  </p>
                  <span className="text-[14px] font-[400] text-[#1E1E1E] ">
                  {user?.email?.slice(0, 10)}...
                  </span>
                </div>
        ) : null }

      </nav>
    </header>
  );
};

export default PaymentHeader;
