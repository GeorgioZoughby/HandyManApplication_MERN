import image from "../../assets/AllServicesHero.png";
import React, { useEffect, useState } from "react";
import "./AllServices.css";


const AllServicesHero = () => {
    return (
    <div className="hero-image">
        <img src={image} alt="all_services" />
        <h3>Your to-do list is on us.</h3>
    </div>
    );
}

export default AllServicesHero;