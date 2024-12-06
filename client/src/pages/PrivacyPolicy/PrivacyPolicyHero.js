import image from "../../assets/privacy_policy.jpg";
import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";


const PrivacyHero = () => {
    return (
        <div className="hero-image">
            <img src={image} alt="about_us" />
        </div>
    );
}

export default PrivacyHero;