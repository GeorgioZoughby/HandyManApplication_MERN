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
                                <label for="exampleInputEmail1" class="form-label">Email address or Phone Number</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" required />
                                <div id="passwordHelp" class="form-text"><Link to="/forgot_password">Forgot Password?</Link></div>
                            </div>
                            <button type="submit" class="btn btn-primary" id="submit">Log in</button>
                            <div class="mb-3 mt-10">
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