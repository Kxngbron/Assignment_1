/* Header.js, Bron Banks, 301391190, September 27, 2024 */

import { Outlet, NavLink, Link } from "react-router-dom";
import image_logo from "../../assets/ghost1.png"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark navbar_colour">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={image_logo} alt="logo" style={{ width: 70 }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  <i className="fa-solid fa-rocket"></i> Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  <i className="fas fa-project-diagram"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-solid fa-address-book"></i> About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <i className="fa-solid fa-comments"></i> Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;