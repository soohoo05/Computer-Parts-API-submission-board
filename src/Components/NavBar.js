import React from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
class NavBar extends React.Component {
  render() {
    return (
      <Fade top>
        <div className="navBar">
          <div className="navLinkdiv">
            <NavLink
              to="/home"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Home
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/cases"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Case Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/coolers"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Cooler Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/cpus"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              CPU Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/memory"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Memory Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/motherboards"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Motherboard Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/powersupplies"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Power Supply Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/storages"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Storage Form
            </NavLink>
          </div>
          <div className="navLinkdiv">
            <NavLink
              to="/form/videocards"
              activeClassName="Blink"
              activeStyle={{ color: "#FFD700" }}
              className="navLink"
            >
              Video Card Form
            </NavLink>
          </div>
        </div>
      </Fade>
    );
  }
}

export default NavBar;
