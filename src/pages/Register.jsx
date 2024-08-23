import { Link, useNavigate } from 'react-router-dom';
import { PiArrowUpRightThin } from 'react-icons/pi';
import Logo from '../assets/images/dark_logo.png';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { authRequest } from '../helpers/authInstance';

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({ text: '', type: null });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data =>
    authRequest('/signup', { user: { ...data } }).then(res => {
      if (res.data) {
        setMessage({ text: res.message, type: null });
        navigate('/');
      } else {
        setMessage({ text: res.data, type: 'error' });
      }
      setTimeout(() => {
        setMessage({ text: '', type: null });
      }, 5000);
    });

  return (
    <div className="auth-container">
      <img className="logo" src={Logo} alt="" />
      <div className="auth">
        <h1>Sign up</h1>
        <p
          className={`${message.type ? 'text-[#F55A5A]' : 'text-[#30c060]'} mx-[30px]`}
        >
          {message.text}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            {...register('name', {
              required: 'Name is required',
            })}
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
          <p>{errors.name?.message}</p>

          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email format',
              },
              validate: fieldValue =>
                fieldValue !== 'admin@example.com' ||
                'Enter a different email address',
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
          <p>{errors.password?.message}</p>
          <Button
            className="button btn-primary p-2 mb-3"
            text=" Sign up"
            type="submit"
          />
          <span>
            Don't you have an account?{' '}
            <Link className="inline-flex" to="/login">
              Login
              <PiArrowUpRightThin
                className="arrow-icon ml-[4px] mt-[3px]"
                size="15"
              />
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
