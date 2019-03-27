import React from "react";

class Header extends React.Component {
  changeBlink = e => {
    if (e.target.className === "headerNoBlink") {
      e.target.className = "Blink";
    } else {
      e.target.className = "NoBlink";
    }
  };
  render() {
    return (
      <div className="header">
        <h1
          className="headerNoBlink"
          onClick={e => {
            this.changeBlink(e);
          }}
        >
          Computer Parts API submission board
        </h1>
      </div>
    );
  }
}

export default Header;
