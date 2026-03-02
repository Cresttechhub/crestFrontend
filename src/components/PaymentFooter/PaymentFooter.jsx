
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const PaymentFooter = () => {
  return (
    <footer className="p-8 md:px-24 md:py-12 flex justify-between items-center text-[#6D737A] text-[14px] md:text-[16px]">
      <p>&copy; 2025 CrestTech Hub. All rights reserved.</p>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com/profile.php?id=61559970860204"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-[#6D737A] text-2xl hover:text-[#009E65] cursor-pointer w-[10px]" />
        </a>
        <a
          href=" https://x.com/cresttechhub "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-[#6D737A] text-2xl hover:text-[#009E65] cursor-pointer w-[17px]" />
        </a>
        <a
          href=" https://instagram.com/cresttechhub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-[#6D737A] text-2xl hover:text-[#009E65] cursor-pointer w-[15px]" />
        </a>
      </div>
    </footer>
  );
};

export default PaymentFooter;
