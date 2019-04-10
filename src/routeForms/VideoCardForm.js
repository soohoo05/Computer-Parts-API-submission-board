import React from "react";
import Bounce from "react-reveal/Bounce";
import { Submitter } from "../actions/Submitter";

class VideoCardForm extends React.Component {
  state = {
    Name: "",
    chipSet: "",
    Color: "",
    Memory: "",
    coreClock: "",
    Price: "",
    Picture: "",
    errors: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  checkFields = e => {
    e.preventDefault();
    let copy = this.state;
    let errors = false;
    for (var key in copy) {
      if (copy[key] === "" && key !== "errors") {
        errors = true;
        this.setState({
          errors: "Fields cannot be left blank"
        });
      }
    }
    if (!errors) {
      Submitter("VideoCard", this.state);
      this.setState({
        Name: "",
        chipSet: "",
        Color: "",
        Memory: "",
        coreClock: "",
        Price: "",
        Picture: "",
        errors: "Submitted!"
      });
    }
  };

  render() {
    return (
      <form className="form-horizontal" onSubmit={e => this.checkFields(e)}>
        <Bounce>
          <fieldset>
            <legend align="center">Video Card Form</legend>
            <div className="error">{this.state.errors}</div>
            <div className="form-group top">
              <label className="col-md-4 control-label" htmlFor="Name">
                Name
              </label>
              <div className="col-md-4">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  placeholder="Name"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Name}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="chipSet">
                Chip Set
              </label>
              <div className="col-md-4">
                <input
                  id="chipSet"
                  name="chipSet"
                  type="text"
                  placeholder="Chip Set"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.chipSet}
                />
              </div>
            </div>



            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Color">
                Color
              </label>
              <div className="col-md-4">
                <input
                  id="Color"
                  name="Color"
                  type="text"
                  placeholder="Color"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Color}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Memory">
                Memory
              </label>
              <div className="col-md-4">
                <input
                  id="Memory"
                  name="Memory"
                  type="text"
                  placeholder="Memory"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Memory}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="coreClock">
                Core Clock
              </label>
              <div className="col-md-4">
                <input
                  id="coreClock"
                  name="coreClock"
                  type="text"
                  placeholder="Core Clock"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.coreClock}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Price">
                Price
              </label>
              <div className="col-md-4">
                <input
                  id="Price"
                  name="Price"
                  type="text"
                  placeholder="Price"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Price}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Picture">
                Picture
              </label>
              <div className="col-md-4">
                <input
                  id="Picture"
                  name="Picture"
                  type="text"
                  placeholder="Picture"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Picture}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Submit" />
              <div className="col-md-4">
                <button id="Submit" name="Submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </Bounce>
      </form>
    );
  }
}
VideoCardForm.propTypes = {};
export default VideoCardForm;
