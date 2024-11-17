import React from "react";
import "./Home.css";
import ServicesMenu from "../ServicesMenu/ServicesMenu"

const Home = () => {
    return (
        <div className="center">
            <div className="row">
                <h1 className="title">Book trusted help for home tasks</h1>
            </div>
            <div className="row">
                <div className="search">
                    <input className="search-input" type="text" placeholder="What's on your To-Do list?" />
                    <button className="search-button" type="text"><i className="bi bi-search"></i></button>
                </div>
            </div>
            <ServicesMenu />
        </div>
    );
}

export default Home;