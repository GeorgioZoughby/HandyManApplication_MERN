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
          <Route path="/services" element=
          {
            <>
              <AlertBanner />
              <Navbar />
              <AllServices />
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