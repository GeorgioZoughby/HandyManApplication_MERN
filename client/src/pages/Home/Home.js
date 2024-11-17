import React from "react";
import "./Home.css";
import ServicesMenu from "../ServicesMenu/ServicesMenu"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"

const Home = () => {
    return (
        <div className="center">
            <div className="row">
                <h1 className="title">Book trusted help for home tasks</h1>
            </div>
            <div className="row">
                <Search />
            </div>
            <ServicesMenu />
            <Categories />
        </div>
    );
}

export default Home;