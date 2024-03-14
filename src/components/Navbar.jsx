import { Link } from 'react-router-dom';
import Logo from '../assets/images/dark_logo.png';
import Profile from './Profile';

const Navbar = () => (
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
        <Profile classes="cursor-pointer" />
        <span className="cursor-pointer m-auto btn-secondary p-1 text-[12px] font-semibold">
          Logout
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
