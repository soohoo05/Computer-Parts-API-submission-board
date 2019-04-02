import React from "react";
import Flip from "react-reveal/Flip";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="welcome">
          <Flip top cascade duration={2000}>
            Welcome to the Computer Parts API submission board
          </Flip>
        </h1>
        <br className="break" />
        <div>
          <Flip top cascade duration={2000}>
            This website is used to submit new computer parts to a database that
            can be accessed by the following API url
          </Flip>
        </div>
        <br className="break" />
        <div className="clickableLink">
          <Flip top cascade duration={2000}>
            INSERT LINK HERE
          </Flip>
        </div>
        <br className="break" />
        <div>
          <Flip top cascade duration={2000}>
            You can see the github repository that gives examples of how to
            access information from the API
          </Flip>
        </div>
        <br className="break" />
        <div
          className="clickableLink"
          onClick={() =>
            window.open("https://github.com/soohoo05/Computer-Parts-API")
          }
        >
          <Flip top cascade duration={2000}>
            https://github.com/soohoo05/Computer-Parts-API
          </Flip>
        </div>
        <br className="break" />
        <div>
          <Flip top cascade duration={2000}>
            You can navigate to the different computer part forms below or use
            the navigation bar above
          </Flip>
        </div>
      </div>
    );
  }
}

export default Home;
