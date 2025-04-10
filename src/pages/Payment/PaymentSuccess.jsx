import React from "react";

import Mark from "../../images/Mark.svg"
import DownloadIcon from "../../images/DownloadIcon.svg"
import Checkbox1 from "../../images/Checkbox.svg"

import PaymentFooter from "../../components/PaymentFooter/PaymentFooter";
import PaymentHeader from "../../components/PaymentHeader/PaymentHeader";

const PaymentSuccess = () => {
    return (
        <div>
            <PaymentHeader />
            <div className="min-h-screen bg-white text-center mt-60 mb-40  ">
                {/* Progress Bar */}
                <div className="flex items-center justify-center mb-30">
                    <div className="flex items-center space-x-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#00A665] text-white rounded-full w-10 h-10 flex items-center justify-center">
                                1
                            </div>
                            <span className="mt-2 text-[16px] font-[400] text-[#00A665]">Information</span>
                        </div>

                        {/* Line */}
                        <div className="h-1 bg-[#00A665] w-50"></div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#00A665] text-white rounded-full w-10 h-10 flex items-center justify-center">
                                2
                            </div>
                            <span className="mt-2 text-[16px] font-[400] text-[#00A665]">Payment</span>
                        </div>

                        {/* Line */}
                        <div className="h-1 bg-[#00A665] w-50"></div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-[#00A665] text-white rounded-full w-10 h-10 flex items-center justify-center">
                                3
                            </div>
                            <span className="mt-2 text-[16px] font-[400] text-[#00A665] ">Confirmation</span>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                <div className="flex flex-col items-center mb-25">
                    <div className="text-green-500 text-5xl mb-4 rounded-[24px] border-2 border-[00A665] b-[#E4FFF2] p-3 ">
                        <img src={Mark} alt="SuccessMark" />
                    </div>
                    <h2 className="font-[700] text-[#1E1E1E] text-[30px] mb-2">Registration Successful!</h2>
                    <p className="mb-2 text-[16px] font-[400] text-[#6D737A] ">
                        Your payment has been processed and your spot in the <br />
                        4-Week Tech Bootcamp is confirmed.
                    </p>
                    <div className="bg-[#F4F4F4] px-8 py-4 rounded-[12px] mt-2 text-[16px] text-[#6D737A] font-[400]">
                        Payment Confirmation: <span className="text-[#1E1E1E] text-[16px] font-[700] ">#TRX28465701</span>
                    </div>
                </div>

                {/* Purchase Summary */}
                <div className="m-auto w-[50%] rounded-lg mb-8 mt-30">
                    <div className="flex justify-between mb-6 text-left">
                        <div>
                            <p className="font-[600] text-[16px] mb-2 ">Purchase Summary</p>
                            <p className="font-[600] text-[16px] ">4-Week Tech Bootcamp</p>
                            <p className="text-[16px] font-[500] text-[#6D737A] ">Start your tech career journey</p>
                        </div>
                        <div>
                            <p className="font-[500] text-[#6D737A] text-[16px] mb-2 "> One-time payment</p>
                            <p className="font-[600] text-[16px] text-black pl-20 ">N70,000</p>
                        </div>
                    </div>

                    <div className=" border-b-1 border-[#737373]  "></div>
                    <div className="grid grid-cols-2 text-sm text-left gap-2 mt-6">
                        <p className="text-[16px] font-[500] text-[#6D737A] ">Transaction ID:</p>
                        <p className="text-[16px] font-[500] text-[#6D737A] ">Payment Date:</p>

                        <p className="font-[500] text-[16px] text-[#1E1E1E] ">TRX28465701</p>
                        <p className="font-[500] text-[16px] text-[#1E1E1E] ">April 5, 2025</p>

                        <p className="text-[16px] font-[500] text-[#6D737A] mt-4 ">Payment Method:</p>
                        <p className="text-[16px] font-[500] text-[#6D737A] mt-4 ">Payment Status:</p>

                        <p className="font-[500] text-[16px] text-[#1E1E1E] ">Visa...3416</p>
                        <p className="text-[16px] font-[500] text-[#00A665] ">Completed</p>
                    </div>
                    <div className=" border-b-1 border-[#737373] mt-7  "></div>

                    <div className="flex justify-between text-sm font-semibold mt-5">
                        <p className="text-[16px] font-[500] ">Total Paid</p>
                        <p className="text-[16px] font-[600] ">₦70,000</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 mt-10">
                    <button className="border border-[#00A665] text-[#00A665] text-[16px] font-[500] rounded-[15px] py-3 px-18 hover:bg-green-50 transition cursor-pointer flex gap-4">
                        <img src={DownloadIcon} alt="Download Icon" />Download Receipt
                    </button>
                    <button className="bg-[#00A665] rounded-[15px] text-white py-3 px-25 hover:bg-green-700 transition cursor-pointer">
                        Back to Home
                    </button>
                </div>

                {/* What Happens Next */}
                <div className="w-[50%] m-auto text-left">
                    <h1 className="font-[700] text-[#1E1E1E] textt-[24px] mb-8 mt-10">What Happens Next</h1>
                    <p className="flex items-center space-x-4 ">
                        <img src={Checkbox1} alt="checkbox" /> <span className="text-[16px] text-[#1E1E1E] font-[600] ">Welcome Email</span>
                    </p>
                    <p className="pl-9 mt-1 font-[400] text-[#6D737A] text-[16px] ">You'll recieve a welcome email.</p>
                    <p className="flex items-center space-x-4 mt-4 ">
                        <img src={Checkbox1} alt="checkbox" /> <span className="text-[16px] text-[#1E1E1E] font-[600]">Course Start Date</span>
                    </p>
                    <p className="pl-9 mt-1 font-[400] text-[#6D737A] text-[16px]">The Masterclass begins on April 15, 2025. Mark your calendar!</p>
                    <p className="flex items-center space-x-4 mt-4">
                        <img src={Checkbox1} alt="checkbox" /> <span className="text-[16px] text-[#1E1E1E] font-[600]">Platform Access</span>
                    </p>
                    <p className="pl-9 mt-1 font-[400] text-[#6D737A] text-[16px]">You'll get immediate access EE</p>
                    <p className="flex items-center space-x-4 mt-4">
                        <img src={Checkbox1} alt="checkbox" /> <span className="text-[16px] text-[#1E1E1E] font-[600]">Orientation session</span>
                    </p>
                    <p className="pl-9 mt-1 font-[400] text-[#6D737A] text-[16px]">Join our virtual Orientation on April 12, 2025 at 10:00 AM WAT.</p>
                </div>
            </div>
            <PaymentFooter />
        </div>
    );
};

export default PaymentSuccess;
