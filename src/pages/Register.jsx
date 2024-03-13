import { Link } from 'react-router-dom';
import { PiArrowUpRightThin } from 'react-icons/pi';
import Logo from '../assets/images/white_logo.png';
import Button from '../components/Button';

const Register = () => (
  <div className="image">
    <div className="image-overlay" />
    <img className="logo" src={Logo} alt="" />
    <div className="auth-container">
      <div className="auth">
        <h1>Sign up</h1>
        <form>
          <input required type="text" placeholder="Username" />
          <input required type="text" placeholder="email" />
          <input required type="password" placeholder="Password" />
          <Button
            className="button btn-primary p-2"
            text=" Sign up"
            type="submit"
          />
          <p style={{ display: 'none' }}>This is an error!</p>
          <span>
            Don't you have an account?{' '}
            <Link className="inline-flex" to="/signin">
              Sign in{' '}
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

export default Register;
