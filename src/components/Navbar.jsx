import { Link } from 'react-router-dom';
import Logo from '../assets/images/dark_logo.png';
import Profile from './Profile';

const Navbar = ({ user }) => {
  const buttonOptions = user
    ? { text: 'Logout', url: 'user/logout' }
    : { text: 'Log in / Sign up', url: '/login' };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex align-middle justify-center gap-4">
          <Link className="nav-link" to="/subscribe">
            <h6> Subscribe </h6>
          </Link>
          <Link className="nav-link" to="/contact">
            <h6> Contact </h6>
          </Link>
          <Profile classes="cursor-pointer" source={user?.source} />
          <Link to="login">
            <button className="border border-[#5A659F] px-4 py-2 text-[16px] text-[#5A659F]">
              {buttonOptions.text}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
