import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!formData.emailOrPhone.trim()) {
            newErrors.emailOrPhone = "Email address or Phone number is required.";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await fetch('api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        emailOrPhone: formData.emailOrPhone,
                        password: formData.password,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', result.token);
                    console.log("Login successful:", result);

                    navigate("/home");  
                } else {
                    console.error('Error:', result.message);
                    setErrors({ general: result.message });
                }
            } catch (error) {
                console.error('Error:', error);
                setErrors({ general: "An error occurred, please try again." });
            }
        }
    };

    return (
        <div className="login-container">
            <div className="center">
                <div className="my-card">
                    <div className="card-header">
                        <h1>QuickFix</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {errors.general && <div className="alert alert-danger">{errors.general}</div>}

                            <div className="mb-3">
                                <label htmlFor="emailOrPhone" className="form-label">Email address or Phone Number</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.emailOrPhone ? "is-invalid" : ""}`}
                                    id="emailOrPhone"
                                    value={formData.emailOrPhone}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.emailOrPhone && <div className="invalid-feedback">{errors.emailOrPhone}</div>}
                                <div id="email" className="form-text">We'll never share your data with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    id="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                <div id="forgotPassword" className="form-text"><Link to="/forgot_password">Forgot Password?</Link></div>
                            </div>

                            <button type="submit" className="btn btn-primary" id="submit">Log in</button>

                            <div className="mb-3 mt-6">
                                <p style={{ color: "black" }}>
                                    Don't have an account? <Link to="/signup"><span className="sign-up-message">Sign up</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
