import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import AlertBanner from "./pages/AlertBanner/AlertBanner";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import AllServices from "./pages/AllServices/AllServices";
import AllServicesHero from "./pages/AllServices/AllServicesHero";
import AboutUsHero from "./pages/AboutUs/AboutUsHero";
import AboutUsContent from "./pages/AboutUs/AboutUs";
import MultiStepForm from "./pages/Booking/Booking";
import FaqPage from "./pages/FAQ/FAQ";
import FAQImage from "./pages/FAQ/FAQPhoto";
import PrivacyHero from "./pages/PrivacyPolicy/PrivacyPolicyHero";
import PrivacyContent from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={
            <>
              <AlertBanner />
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/booking/:id" element={<MultiStepForm />} />
          <Route path="/services" element=
          {
            <>
              <AlertBanner />
              <Navbar />
              <AllServicesHero />
              <AllServices />
              <Footer />
            </>
          }
          />
          <Route path="/faq" element=
            {
              <>
                <AlertBanner />
                <Navbar />
                <FAQImage />
                <FaqPage />
                <Footer />
              </>
            }
          />           
          <Route path="/aboutus" element=
            {
              <>
                <AlertBanner />
                <Navbar />
                <AboutUsHero />
                <AboutUsContent />
                <Footer />
              </>
            }
          />   
          <Route path="/termsconditions" element=
            {
              <>
                <AlertBanner />
                <Navbar />
                <PrivacyHero />
                <PrivacyContent />
                <Footer />
              </>
            }
          />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;