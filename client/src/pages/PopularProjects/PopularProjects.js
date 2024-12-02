import React from "react";
import "./PopularProjects.css";
import mount_tv_image from "../../assets/mount_tv.webp";
import furniture_assembly_image from "../../assets/furniture_assembly.webp";
import hang_pictures_image from "../../assets/hang_pictures.webp";
import minor_plumbing_image from "../../assets/minor_plumbing.webp";


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
                        <img src={furniture_assembly_image} alt="Furniture Assembly" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Furniture Assembly</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={mount_tv_image} alt="Mount TV" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Mount a TV</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={hang_pictures_image} alt="Hang Pictures" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Mount Art or Shelves</h3>
                        <p>Projects starting at 24$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={minor_plumbing_image} alt="Minor Plumbing" />
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
                        <img src={furniture_assembly_image} alt="Furniture Assembly" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Furniture Assembly</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={mount_tv_image} alt="Mount TV" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Mount a TV</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={hang_pictures_image} alt="Hang Pictures" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Mount Art or Shelves</h3>
                        <p>Projects starting at 24$</p>
                    </div>
                </div>
                <div className="popular-card">
                    <div className="popular-card-image">
                        <img src={minor_plumbing_image} alt="Minor Plumbing" />
                    </div>
                    <div className="popular-card-info">
                        <h3>Minor Plumbing Repairs</h3>
                        <p>Projects starting at 49$</p>
                    </div>
                </div>
            </div>          
        </>
    )
};

export default PopularProjects;

