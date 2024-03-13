import { Link } from 'react-router-dom';
import { PiArrowUpRightThin } from 'react-icons/pi';
import Logo from '../assets/images/white_logo.png';
import Button from '../components/Button';

const Login = () => (
  <div className="image">
    <div className="image-overlay" />
    <img className="logo" src={Logo} alt="" />
    <div className="auth-container">
      <div className="auth">
        <h1>Sign in</h1>
        <form>
          <input required type="text" placeholder="Username" name="username" />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button
            className="btn-primary p-2"
            text=" Sign in now"
            type="submit"
          />
          <p style={{ display: 'none' }}>This is an error!</p>
          <span>
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

export default Login;
