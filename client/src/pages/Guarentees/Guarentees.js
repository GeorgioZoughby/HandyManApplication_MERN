import React from "react";
import "./Guarentees.css";

const Guarentees = () => {
    return (
        <>
            <div className="guarentees-pledge-title">
                <h1 className="guarentees-pledge">Your Satisfaction, <span className="green-text">guaranteed</span></h1>
            </div>
            <div className="guarentees-container">

                <div className="guarentees-details">
                    <h1 className="guarentees-title">Happiness Pledge<i class="bi bi-patch-check-fill"></i></h1>
                    <p className="guarentees-text">If you’re not satisfied, we’ll work to make it right.</p>
                </div>
                <div className="guarentees-details">
                    <h1 className="guarentees-title">Vetted Taskers<i class="bi bi-file-lock-fill"></i></h1>
                    <p className="guarentees-text">Taskers are always background checked before joining the platform.</p>
                </div>
                <div className="guarentees-details">
                    <h1 className="guarentees-title">Dedicated Support<i class="bi bi-headset"></i></h1>
                    <p className="guarentees-text">Friendly service when you need us – every day of the week.</p>
                </div>
            </div>
        </>
    );
};

export default Guarentees;