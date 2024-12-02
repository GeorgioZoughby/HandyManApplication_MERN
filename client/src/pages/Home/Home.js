import React from "react";
import "./Home.css";
import ServicesMenu from "../ServicesMenu/ServicesMenu"
import Search from "../Search/Search"
import ServiceCard from "../ServiceCard/ServiceCard";
import Achievements from "../Achievements/Achievements";

const Home = () => {
    return (
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
    );
}

export default Home;