import image from "../../assets/who-we-are.jpg";
import React, { useEffect, useState } from "react";
import "./AboutUs.css";


const AboutUsHero = () => {
    return (
        <div className="hero-image">
            <img src={image} alt="about_us" />
        </div>
    );
}

export default AboutUsHero;