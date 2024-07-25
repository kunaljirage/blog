import { Link, useNavigate } from 'react-router-dom';
import { PiArrowUpRightThin } from 'react-icons/pi';
import Logo from '../assets/images/white_logo.png';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { authRequest } from '../helpers/authInstance';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    authRequest('/signin', { user: { ...data } }).then(res => {
      if (res.data) {
        navigate('/');
      } else {
        setErrorMessage(res.message);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    });
  };
  return (
    <div className="image">
      <div className="image-overlay" />
      <img className="logo" src={Logo} alt="" />
      <div className="auth-container">
        <div className="auth">
          <h1>Sign in</h1>
          <p>{errorMessage}</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Invalid email format',
                },
              })}
              type="text"
              placeholder="Email"
              autoComplete="off"
            />
            <p>{errors.email?.message}</p>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Password"
            />
            <p>
              {errors.password?.message} {errorMessage && errorMessage}
            </p>
            <Button
              className="btn-primary p-2"
              text=" Sign in now"
              type="submit"
            />
            <p style={{ display: 'none' }}>This is an error!</p>
            <span className="mt-3">
              Already have an account?{' '}
              <Link to="/signup" className="inline-flex justify-center">
                Sign up{' '}
                <PiArrowUpRightThin
                  className="arrow-icon ml-[4px] mt-[3px]"
                  size="15"
                />
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
