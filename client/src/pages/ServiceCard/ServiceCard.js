import React from "react";
import "./ServiceCard.css";
import image from "../../assets/login.jpg";


const ServiceCard = () => {
    return (
        <div className="service-card">
            <div className="image-container">
                <img src={image} alt="Service" />
            </div>
            <div className="service-card-content">
                <h3 className="service-card-title">Assembly</h3>
                <div className="service-card-description"><i class="bi bi-check"></i><p>We can assemble your furniture for you.</p>
                </div>
                <div className="service-card-description"><i class="bi bi-check"></i><p>We can assemble your furniture for you.</p>
                </div>
                <div className="service-card-description"><i class="bi bi-check"></i><p>We can assemble your furniture for you.</p>
                </div>                                
            </div>
        </div>
    );
}


export default ServiceCard;