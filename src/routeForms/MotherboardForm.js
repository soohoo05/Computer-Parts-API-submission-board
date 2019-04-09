import React from "react";
import Bounce from "react-reveal/Bounce";
import { Submitter } from "../actions/Submitter";

class MotherboardForm extends React.Component {
  state = {
    Name: "",
    Socket: "",
    Form: "",
    Color: "",
    Slots: "",
    maxRam: "",
    Price: "",
    Picture: ""
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
      if ((copy[key] === "" || copy[key] === "---") && key !== "errors") {
        errors = true;
        this.setState({
          errors: "Fields cannot be left blank"
        });
      }
    }
    if (!errors) {
      Submitter("Motherboard", this.state);
      this.setState({
        errors: "Submitted!"
      });
    }
  };
  render() {
    return (
      <form className="form-horizontal" onSubmit={e => this.checkFields(e)}>
        <Bounce>
          <fieldset>
            <legend align="center">Motherboard Form</legend>
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
              <label className="col-md-4 control-label" htmlFor="Socket">
                Socket
              </label>
              <div className="col-md-4">
                <input
                  id="Socket"
                  name="Socket"
                  type="text"
                  placeholder="Socket"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Socket}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Form">
                Form
              </label>
              <div className="col-md-4">
                <select
                  value={this.state.Form}
                  className="form-control input-md"
                  name="Form"
                  onChange={e => this.changeHandler(e)}
                >
                  <option value="---">---</option>
                  <option value="ATX">ATX</option>
                  <option value="EATX">EATX</option>
                  <option value="Flex ATX">Flex ATX</option>
                  <option value="HPTX">HPTX</option>
                  <option value="Micro ATX">Micro ATX</option>
                  <option value="Mini DTX">Mini DTX</option>
                  <option value="Mini DTX">Mini DTX</option>
                  <option value="Mini ITX">Mini ITX</option>
                  <option value="SSI CEB">SSI CEB</option>
                  <option value="Thin Mini ITX">Thin Mini ITX</option>
                  <option value="XL ATX">XL ATX</option>
                </select>
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
              <label className="col-md-4 control-label" htmlFor="Slots">
                Slots
              </label>
              <div className="col-md-4">
                <input
                  id="Slots"
                  name="Slots"
                  type="text"
                  placeholder="Slots"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Slots}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="maxRam">
                Maximum Ram
              </label>
              <div className="col-md-4">
                <input
                  id="maxRam"
                  name="maxRam"
                  type="text"
                  placeholder="Maximum Ram"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.maxRam}
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
MotherboardForm.propTypes = {};
export default MotherboardForm;
