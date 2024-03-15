import { Link } from 'react-router-dom';
import Logo from '../assets/images/dark_logo.png';
import Profile from './Profile';

const Navbar = ({ user }) => {
  const buttonOptions = user
    ? { text: 'Logout', url: 'user/logout' }
    : { text: 'Sign in', url: 'user/signin' };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex align-middle justify-center gap-4">
          <Link className="nav-link" to="">
            <h6> Art </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Science </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Techology </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Cinema </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Design </h6>
          </Link>
          <Link className="nav-link" to="">
            <h6> Food </h6>
          </Link>
          <Link className="nav-link" to="write">
            Write
          </Link>
          <Profile classes="cursor-pointer" source={user?.source} />
          <span className="cursor-pointer m-auto btn-secondary p-1 text-[12px] font-semibold">
            {buttonOptions.text}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
