import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <div className="center">
                <div className="my-card">
                    <div className="card-header">
                        <h1>QuickFix</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="email_input" class="form-label">Email address or Phone Number</label>
                                <input type="email" class="form-control" id="email_input" aria-describedby="email" required />
                                <div id="email" class="form-text">We'll never share your data with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" aria-describedby="forgotPassword" required />
                                <div id="forgotPassword" class="form-text"><Link to="/forgot_password">Forgot Password?</Link></div>
                            </div>
                            <button type="submit" class="btn btn-primary" id="submit">Log in</button>
                            <div class="mb-3 mt-6">
                                <p style={{color : "black"}}>Don't have an account? <Link to="/signup"><span className="sign-up-message">Sign up</span></Link></p>
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;