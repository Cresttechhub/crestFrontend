import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Enroll from "./pages/Enroll/Enroll";
import Blogs from "./pages/Blogs/Blogs";
import Mentorship from "./pages/Mentorship/Mentorship";
import FAQs from "./pages/FAQs/FAQs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ForgetPassword from "./pages/auth/forget-password";
import ResetPassword from "./pages/auth/set-password";
import VerifyCode from "./pages/auth/verify-code";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import Path from "./pages/Path/Path";
import Payment from "./pages/Payment/Payment";
import Confirmation from "./pages/Confirmation/Confirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/programs"
          element={
            <MainLayout>
              <Programs />
            </MainLayout>
          }
        />
        <Route
          path="/mentorship"
          element={
            <MainLayout>
              <Mentorship />
            </MainLayout>
          }
        />
        <Route
          path="/faqs"
          element={
            <MainLayout>
              <FAQs />
            </MainLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/enroll"
          element={
            <MainLayout>
              <Enroll />
            </MainLayout>
          }
        />
        <Route
          path="/path"
          element={
            <MainLayout>
              <Path />
            </MainLayout>
          }
        />
        <Route
          path="/payment"
          element={
            <MainLayout>
              <Payment />
            </MainLayout>
          }
        />
        <Route
          path="/confirmation"
          element={
            <MainLayout>
              <Confirmation />
            </MainLayout>
          }
        />

        {/* Auth Routes */}
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/forgetPassword"
          element={
            <AuthLayout>
              <ForgetPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/resetpassword"
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/verifycode"
          element={
            <AuthLayout>
              <VerifyCode />
            </AuthLayout>
          }
        />

        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
