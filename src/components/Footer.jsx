import Logo from '../assets/images/dark_logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="logo">
      <img src={Logo} alt="" />
    </div>
    <span>
      Made with ❤️ and <b>React.js</b>.
    </span>
  </footer>
);

export default Footer;
