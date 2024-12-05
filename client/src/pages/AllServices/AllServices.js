import React from "react";
import "./AllServices.css";
import { Link } from "react-router-dom";
import image from "../../assets/AllServicesHero.png"



const AllServices = () => {
    return (
        <>
        <div className="hero-image">
            <img src={image} alt="all_services" />
            <h3>Your to-do list is on us.</h3>
        </div>
        <div className="center-container">
            <h1 className="container-title">Hire a trusted tasker immediately</h1>
        </div>
        </>
    );
};




export default AllServices;