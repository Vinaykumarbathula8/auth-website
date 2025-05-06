import React, { useState } from "react";
import "./PasswordSetup.css";

function PasswordSetup({login}){
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    // Check for at least one letter, one number, and one special character
    const hasLetter = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&#]/.test(password);
  
    // If the password has all three, it's strong, otherwise weak
    if (hasLetter && hasNumber && hasSpecialChar && password.length >= 6) {
      setPasswordStrength("strong");
    } else {
      setPasswordStrength("weak");
    }
  };  

  // Handle password change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword !== password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && passwordStrength === "strong") {
      // Simulate navigation to dashboard after password setup
      alert("Password setup successful!");
      login();
    } else {
      alert("Passwords do not match or password is not strong enough.");
    }
  };

  return (
    <div className="password-setup-container">
      <div className="password-setup-card">
        <h2 className="password-setup-title">Set Up Your Password</h2>
        <form className="password-setup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter a strong password"
                required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? "Hide" : "Show"}
              </span>
            </div>

            {/* Password strength indicator */}
            {password && (
              <div className={`password-strength-bar ${passwordStrength}`}>
                <span className={`password-strength-${passwordStrength}`} />
              </div>
            )}

            {password && passwordStrength && (
              <div className="password-strength">
                {passwordStrength === "weak" && "Weak Password"}
                {passwordStrength === "medium" && "Medium Strength Password"}
                {passwordStrength === "strong" && "Strong Password"}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-container">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Re-enter your password"
                required
              />
            </div>

            {!passwordsMatch && confirmPassword && (
              <div className="password-match-error">Passwords do not match</div>
            )}
          </div>

          <button type="submit" className="password-setup-button">
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordSetup;
