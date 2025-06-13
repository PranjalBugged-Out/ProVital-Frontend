import React from 'react';
import './SignupModal.scss';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-phone">Phone Number:</label>
            <input type="tel" id="signup-phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="signup-confirm-password">Confirm Password:</label>
            <input type="password" id="signup-confirm-password" name="confirmPassword" required />
          </div>
          <div className="form-group">
            <label>I am a:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="userType" value="doctor" required /> Doctor
              </label>
              <label>
                <input type="radio" name="userType" value="patient" required /> Patient
              </label>
            </div>
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <p>Already have an account? <span className="switch-link" onClick={onSwitchToLogin}>Login</span></p>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default SignupModal; 