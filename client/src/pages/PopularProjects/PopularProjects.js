import React from "react";
import "./PopularProjects.css";
import img from "../../assets/mount_tv.webp";

const PopularProjects = () => {
    return (
        <>
            <div className="popular-projects-container">
                <div className="title">
                    Popular Projects
                </div>
            </div>
            <div className="popular-projects-container">
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>                                              
            </div>
            <div className="popular-projects-container">
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={img} alt="Popular Project" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Project Title</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
            </div>            
        </>
    )
};

export default PopularProjects;

