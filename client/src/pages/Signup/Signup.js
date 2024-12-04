import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required.";
        }

        const phoneRegex = /^{[0-9]{8,15}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Enter a valid phone number (8-15 digits).";
        }

        if (formData.email_address && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_address)) {
            newErrors.email_address = "Enter a valid email address.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log("Form submitted successfully:", formData);
        }
    };

    return (
        <div className="signup-container">
            <div className="center">
                <div className="signup-card">
                    <div className="card-header">
                        <h1>QuickFix</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name*</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number*</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                                    id="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                                {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email_address" className="form-label">Email Address</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.email_address ? "is-invalid" : ""}`}
                                    id="email_address"
                                    value={formData.email_address}
                                    onChange={handleInputChange}
                                />
                                {errors.email_address && <div className="invalid-feedback">{errors.email_address}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    id="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary" id="submit">Sign Up</button>
                            <div className="mb-3 mt-6">
                                <p style={{ color: "black" }}>Already have an account? <Link to="/login"><span className="sign-up-message">Login</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
