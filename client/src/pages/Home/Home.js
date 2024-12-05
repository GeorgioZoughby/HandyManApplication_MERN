import React from "react";
import "./Home.css";
import ServicesMenu from "../ServicesMenu/ServicesMenu"
import Search from "../Search/Search"
import ServiceCard from "../ServiceCard/ServiceCard";
import Achievements from "../Achievements/Achievements";
import PopularProjects from "../PopularProjects/PopularProjects";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import Steps from "../Steps/Steps";
import Guarentees from "../Guarentees/Guarentees";


const Home = () => {
    return (
        <>
            <div className="center-container">
                <div className="row">
                    <h1 className="title">Book trusted help for home tasks</h1>
                </div>
                <div className="row">
                    <Search />
                </div>
                <ServicesMenu />
                <ServiceCard />
                <Achievements />
            </div>
            <div className="white-container">
                <div className="row">
                    <PopularProjects />
                </div>
                <div className="row">
                    <Guarentees />
                </div>
                <div className="row" style={{ backgroundColor: "#fefce3"}}>
                    <Steps />
                </div>
                <div className="row">
                    <CustomersFeedback />
                </div>
            </div>
        </>
    );
}

export default Home;