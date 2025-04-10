import React from 'react';

import Icon from "../../images/mainIcon.svg"

const PaymentHeader = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center">
            <nav className="container mx-auto flex justify-between items-center px-4 md:py-3 py-1 border-b md:border-none border-[#D6D6D6] mt-9 bg-white md:rounded-[20px] md:pb-10">
                <div className="flex items-center pr-3 ml-1">
                    <img src={Icon} alt="Icon" className="h-10" />
                    <span className="font-bold text-2xl">CrestTech Hub</span>
                </div>
                <div className='flex items-center pr-3 space-x-1'>
                    <p className="bg-[#9747FF] font-[400] text-[23px] text-white rounded-full w-8 h-8 flex items-center justify-center "> K</p>
                    <span className="text-[14px] font-[400] text-[#1E1E1E] ">KashMoniee@...</span>
                </div>
            </nav>
        </header>
    );
}


export default PaymentHeader;