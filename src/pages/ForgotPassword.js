import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate sending a password reset link
    setMessage('A password reset link has been sent to your email.');
    setEmail('');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtext">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="forgot-button">
            Send Reset Link
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}

        <div className="back-to-login">
          <Link to="/login" className="back-link">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
