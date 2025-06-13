import React from 'react';
import './LoginModal.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login with Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="password" required />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <p>Don't have an account? <span className="switch-link" onClick={onSwitchToSignup}>Sign Up</span></p>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default LoginModal; 