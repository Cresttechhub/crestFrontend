import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Enroll from "../src/pages/auth/enroll";
import Mentorship from "./pages/Mentorship/Mentorship";

import FAQs from "./pages/FAQs/FAQs";



// import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/enroll" element={<Enroll />} />

          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/faqs" element={<FAQs />} />


          <Route path="/mentorship" element={<Mentorship />} />


          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
