import React from "react";
import "./Achievements.css";

const Achievements = () => {
    return (
        <div className="achievements-container">
            <div className="achievement-details">
                <h1 className="achievement-title">Furniture Assemblies:</h1>
                <p className="achievement-numbers">5,000+</p>
            </div>
            <div className="achievement-details">
                <h1 className="achievement-title">Home Repairs:</h1>
                <p className="achievement-numbers">10,000+</p>
            </div>
            <div className="achievement-details">
                <h1 className="achievement-title">Items mounted:</h1>
                <p className="achievement-numbers">20,000+</p>
            </div>
            <div className="achievement-details">
                <h1 className="achievement-title">Home Painted:</h1>
                <p className="achievement-numbers">1,000+</p>
            </div>            
        </div>
    );
};

export default Achievements;