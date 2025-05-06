import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup({ login }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleOtpSend = () => {
    if (!name || !email) {
      setError("Please fill in both name and email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    // Simulating OTP send
    setOtpSent(true);
    alert("OTP sent to your email!");
  };

  const handleSubmitOtp = () => {
    // In a real scenario, here we should verify OTP with backend
    if (otp === "123456") {
      alert("OTP Verified! Proceed to set password.");
      navigate("/password-setup");
    } else {
      setError("Invalid OTP.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">{otpSent ? "OTP Verification" : "Create Account"}</h2>

        {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}

        {!otpSent ? (
          <form className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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

            <button
              type="button"
              onClick={handleOtpSend}
              className="signup-button"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <div className="otp-container">
            <label htmlFor="otp">Enter OTP</label>
            <input
              id="otp"
              type="text"
              placeholder="Enter OTP sent to your email"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value)
                setError('')
              }}
              required
            />
            <button
              type="button"
              onClick={handleSubmitOtp}
              className="signup-button"
            >
              Verify OTP
            </button>
          </div>
        )}

        {!otpSent && (
          <div className="login-prompt">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
