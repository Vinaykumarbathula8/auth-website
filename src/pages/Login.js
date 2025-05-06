import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Simulated login success
    login(); // This updates isAuthenticated in App.js
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-extras">
            <div className="remember-me">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="signup-prompt">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
