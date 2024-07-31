import { Link } from 'react-router-dom';
import Logo from '../assets/images/dark_logo.png';
import Profile from './Profile';

const Navbar = ({ user }) => {
  const buttonOptions = user
    ? { text: 'Logout', url: 'user/logout' }
    : { text: 'Log in / Sign up', url: 'user/signin' };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex align-middle justify-center gap-4">
          <Link className="nav-link" to="">
            <h6> Subscribe </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Contact </h6>
          </Link>
          <Profile classes="cursor-pointer" source={user?.source} />
          <button className="border border-[rgb(90,101,159)]">
            <span className="cursor-pointer px-4 text-[16px] text-[rgb(90,101,159)]">
              {buttonOptions.text}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
