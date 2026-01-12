import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = ({ isOpen }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.trim() || !password.trim()) {
            alert("All fields are required!");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("ben10_users")) || [];
        const user = existingUsers.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Welcome back, ${user.name}!`);
            localStorage.setItem("isAuthenticated", "true");
            navigate("/");
        } else {
            alert("Invalid email or password! Please sign up first.");
        }
    };

    return (
        <div className={`auth-container ${isOpen ? "sidebar-open" : ""}`}>
            <div className="auth-box">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-btn">
                        Login
                    </button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
