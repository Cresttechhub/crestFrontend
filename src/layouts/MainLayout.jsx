import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import PaymentFooter from "../components/PaymentFooter/PaymentFooter";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const partialPaths = ["/path", "/payment", "/confirmation"];
  const isPartialLayout = partialPaths.includes(pathname);

  return (
    <>
      <Header />
      {children}
      {isPartialLayout ? (
        <PaymentFooter />
      ) : (
        <>
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
