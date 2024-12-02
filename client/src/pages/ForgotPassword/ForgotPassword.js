import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="password-container">
            <div className="center">
                <div className="password-card">
                    <div className="card-header">
                        <h1>QuickFix</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="mt-4">
                                <label for="email_input" class="form-label">Enter your email address*</label>
                                <input type="email" class="form-control" id="email_input" required />
                            </div>
                            <div class="flex gap-2 mt-10">
                            <Link to="/login" class="btn" id="go_back">Back</Link>
                            <button type="submit" class="btn" id="submit">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;