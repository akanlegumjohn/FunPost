import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  DisplayPassword,
  passwordChecker,
  passwordStrengthChecker,
} from '../utils/verifyPassword';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordChecker(password) === false) {
      toast.error(
        'Password length must be between 7-15 characters and must contain at least one numeric digit and a  special character'
      );
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    }
  };
  return (
    <>
      <section className="form--heading">
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form--group">
            <input
              type="text"
              id="firstName"
              required
              name="firstName"
              value={firstName}
              placeholder="Enter first name"
              onChange={handleInput}
            />
          </div>
          <div className="form--group">
            <input
              type="text"
              id="lastName"
              required
              name="lastName"
              value={lastName}
              placeholder="Enter last name"
              onChange={handleInput}
            />
          </div>

          <div className="form--group">
            <input
              type="email"
              id="email"
              required
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleInput}
            />
          </div>
          <div className="form--group">
            <input
              type={showPassword ? 'password' : 'text'}
              id="password"
              required
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleInput}
            />
            <DisplayPassword
              setShowPassword={setShowPassword}
              showPassword={showPassword}
            />
            {password !== '' && <>{passwordStrengthChecker(password)}</>}
          </div>
          <div className="form--group">
            <input
              type={showPassword ? 'password' : 'text'}
              id="confirmPassword"
              required
              name="confirmPassword"
              value={confirmPassword}
              placeholder="confirm password"
              onChange={handleInput}
            />
            {password !== '' && (
              <>
                {password !== confirmPassword ? (
                  <span className="unstable-password">
                    Passwords do not match
                  </span>
                ) : (
                  <span className="stable-password">Passwords match</span>
                )}
              </>
            )}
          </div>
          <div className="form--group">
            {email && password && firstName && lastName && confirmPassword ? (
              <button className="btn active--btn" type="submit">
                Register
              </button>
            ) : (
              <button disabled className="btn inactive--btn">
                Register
              </button>
            )}
          </div>
        </form>
        <h3>Already have an account?</h3>
        <Link to="/login">
          <p>Log In</p>
        </Link>
      </section>
    </>
  );
};

export default Register;
