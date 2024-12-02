import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import AlertBanner from "./pages/AlertBanner/AlertBanner";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ServiceCard from "./pages/ServiceCard/ServiceCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <AlertBanner />
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/test" element={<ServiceCard />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/services" element=
          {
            <>
              <AlertBanner />
              <Navbar />
              <Home />
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