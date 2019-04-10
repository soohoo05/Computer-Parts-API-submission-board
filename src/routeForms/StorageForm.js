import React from "react";
import Bounce from "react-reveal/Bounce";
import { Submitter } from "../actions/Submitter";

class StorageForm extends React.Component {
  state = {
    Name: "",
    Form: "",
    Type: "",
    Color: "",
    Capacity: "",
    Price: "",
    Picture: "",
    errors:""
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
      Submitter("Storage", this.state);
      this.setState({
        Name: "",
        Form: "",
        Type: "",
        Color: "",
        Capacity: "",
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
            <legend align="center">Storage Form</legend>
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
                  <option value='1.8 inches'>1.8&quot;</option>
                  <option value='2.5 inches'>2.5&quot;</option>
                  <option value='3.5 inches'>3.5&quot;</option>
                  <option value="M.2-22110">M.2-22110</option>
                  <option value="M.2-2242">M.2-2242</option>
                  <option value="M.2-2260">M.2-2260</option>
                  <option value=">M.2-2280">M.2-2280</option>
                  <option value="mSATA">mSATA</option>
                  <option value="PCI-E">PCI-E</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Type">
                Type
              </label>
              <div className="col-md-4">
                <select
                  value={this.state.Type}
                  className="form-control input-md"
                  name="Type"
                  onChange={e => this.changeHandler(e)}
                >
                  <option value="---">---</option>
                  <option value="</option>">SSD</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="5200RPM">5200RPM</option>
                  <option value="5400RPM">5400RPM</option>
                  <option value="5700RPM">5700RPM</option>
                  <option value="5760RPM">5760RPM</option>
                  <option value="5900RPM">5900RPM</option>
                  <option value="7200RPM">7200RPM</option>
                  <option value="10000RPM">10000RPM</option>
                  <option value="10025RPM">10025RPM</option>
                  <option value="10500RPM">10500RPM</option>
                  <option value="10520RPM">10520RPM</option>
                  <option value="15000RPM">15000RPM</option>
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
              <label className="col-md-4 control-label" htmlFor="Capacity">
                Capacity
              </label>
              <div className="col-md-4">
                <input
                  id="Capacity"
                  name="Capacity"
                  type="text"
                  placeholder="Capacity"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Capacity}
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
StorageForm.propTypes = {};
export default StorageForm;
