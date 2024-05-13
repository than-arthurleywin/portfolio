import "./navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <a href="http://">arthurL</a>
        </div>
        <div className="menu">
          <p>
            <a href="./hero.jsx">Home</a>
          </p>
          <p>
            <a href="./about.jsx">About</a>
          </p>
          <p>
            <a href="./service.jsx">Service</a>
          </p>
          <p>
            <a href="./portfolio.jsx">Portfolio</a>
          </p>
          <p>
            <a href="./contact.jsx">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
