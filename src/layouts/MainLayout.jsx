import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import PaymentHeader from "../components/PaymentHeader/PaymentHeader";
import PaymentFooter from "../components/PaymentFooter/PaymentFooter";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const paymentPaths = ["/path", "/payment", "/confirmation"];
  const isPartialLayout = paymentPaths.includes(pathname);

  return (
    <>
      {isPartialLayout ? (
        <>
          <PaymentHeader />
          {children}
          <PaymentFooter />
        </>
      ) : (
        <>
          <Header />
          {children}
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
