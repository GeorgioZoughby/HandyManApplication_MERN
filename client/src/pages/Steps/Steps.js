import React from "react";
import "./Steps.css";
import image from "../../assets/how_it_works.webp";


const Steps = () => {
    return (
        <div className="steps-card">
            <div className="image-container">
                <img src={image} alt="Service" />
            </div>
            <div className="steps-card-content">
                <h3 className="steps-card-title">How it works</h3>
                <div className="steps-card-description"><i class="bi bi-1-circle-fill"></i><p>Choose a Tasker by price, skills, and reviews.</p>
                </div>
                <div className="steps-card-description"><i class="bi bi-2-circle-fill"></i><p>Schedule a Tasker as early as today.</p>
                </div>
                <div className="steps-card-description"><i class="bi bi-3-circle-fill"></i><p>Chat, pay, tip, and review all in one place.</p>
                </div>
            </div>
        </div>
    );
}


export default Steps;