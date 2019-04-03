import React from "react";
import Flip from "react-reveal/Flip";

class Home extends React.Component {
  render() {
    return (
      <Flip top cascade duration={2000}>
      <div className="home">
        <h1 className="welcome">
            Welcome to the Computer Parts API submission board
        </h1>
        <br className="break" />
        <div>
            This website is used to submit new computer parts to a database that
            can be accessed by the following API url
        </div>
        <br className="break" />
        <div className="clickableLink">
            INSERT LINK HERE
        </div>
        <br className="break" />
        <div>
            You can see the github repository that gives examples of how to
            access information from the API
        </div>
        <br className="break" />
        <div
          className="clickableLink"
          onClick={() =>
            window.open("https://github.com/soohoo05/Computer-Parts-API")
          }
        >
            https://github.com/soohoo05/Computer-Parts-API
        </div>
        <br className="break" />
        <div>
            You can navigate to the different computer part forms below or use
            the navigation bar above
        </div>
      </div>
    </Flip>
    );
  }
}

export default Home;
