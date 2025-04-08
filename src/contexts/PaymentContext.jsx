import React, { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

export const usePayment = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isMonthly, setIsMonthly] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <PaymentContext.Provider
      value={{
        selectedProgram,
        setSelectedProgram,
        isMonthly,
        setIsMonthly,
        step,
        setStep,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
