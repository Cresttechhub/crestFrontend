import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
};

export default MainLayout;
