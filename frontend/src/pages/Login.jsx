import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { DisplayPassword } from '../utils/verifyPassword';
import { reset, login } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, message, isSuccess, navigate, dispatch]);

  const handleInput = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="form--heading">
        <h1>Login</h1>
        <p>Please enter email and password to continue</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
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
              style={{
                color: 'black',
                postition: 'absolute',
                right: '230px',
                top: '265px',
              }}
            />
          </div>
          <div className="form--group">
            {email && password ? (
              <button className="btn active--btn" type="submit">
                Log In
              </button>
            ) : (
              <button disabled className="btn inactive--btn">
                Log In
              </button>
            )}
          </div>
        </form>
        <h3>Don't have an account?</h3>
        <Link to="/register">
          <p>Sign Up</p>
        </Link>
      </section>
    </>
  );
};

export default Login;
