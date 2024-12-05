import React, { useState, useEffect } from "react";
import "./Booking.css";
import logo from "../../assets/dark_logo.png";
import { Link, useParams } from "react-router-dom";

const steps = [
    { label: 'Describe your task', step: 1 },
    { label: 'Browse Taskers & Prices', step: 2 },
    { label: 'Confirm Payment', step: 3 },
];

const MultiStepForm = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [subservices, setSubservices] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchSubservices = async () => {
            try {
                const response = await fetch(`/api/subservices/${id}`);
                const data = await response.json();
                setSubservices(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching subservices:", error);
            }
        };

        if (id) {
            fetchSubservices();
        }
    }, [id]);

    const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, steps.length));
    const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 1));

    const totalSteps = steps.length;
    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

    return (
        <>
            <div className="navbar-progress">
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="Logo" />
                    </Link>
                </div>             
                <div className="main-container">
                    <div className="step-container" style={{ '--progress-width': width }}>
                        {steps.map(({ step, label }) => (
                            <div className="step-wrapper" key={step}>
                                <div
                                    className="step-style"
                                    style={{
                                        '--border-color': activeStep >= step ? '#207663' : '#F3E7F3',
                                    }}
                                >
                                    {activeStep > step ? (
                                        <div className="check-mark">L</div>
                                    ) : (
                                        <span className="step-count">{step}</span>
                                    )}
                                </div>
                                <div className="steps-label-container">
                                    <span className="step-label">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>                
            </div>
            <div className="form-detail-title">
                <i className="bi bi-pencil-square"></i><h3>Tell us about your task. We use these details to show Taskers in your area who fit your needs.</h3>
            </div>
            <div className="middle flex items-center justify-center mt-5">
                <div className="card-form-info">
                    <h1 className="mt-4 text-black font-semibold text-2xl text-center">{subservices.subservice_name}</h1>
                </div>
            </div>            
            <div className="buttons-container">
                <button
                    className="button-style"
                    onClick={prevStep}
                    disabled={activeStep === 1}
                >
                    Previous
                </button>
                <button
                    className="button-style"
                    onClick={nextStep}
                    disabled={activeStep === totalSteps}
                >
                    Next
                </button>
            </div>             
        </>
    );
};

export default MultiStepForm;
