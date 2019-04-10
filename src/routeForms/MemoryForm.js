import React from "react";
import Bounce from "react-reveal/Bounce";
import { Submitter } from "../actions/Submitter";

class MemoryForm extends React.Component {
  state = {
    Name: "",
    Speed: "",
    Type: "",
    Color: "",
    Modules: "",
    Size: "",
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
        if((copy[key] === "" || copy[key] ==="---") && key !=="errors"  ) {
        errors = true;
        this.setState({
          errors: "Fields cannot be left blank"
        });
      }
    }
    if (!errors) {
      Submitter("Memory", this.state);
      this.setState({
        Name: "",
        Speed: "",
        Type: "",
        Color: "",
        Modules: "",
        Size: "",
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
            <legend align="center">Memory Form</legend>
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
              <label className="col-md-4 control-label" htmlFor="Speed">
                Speed
              </label>
              <div className="col-md-4">
                <input
                  id="Speed"
                  name="Speed"
                  type="text"
                  placeholder="Speed"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Speed}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Type">
                Type
              </label>
              <div className="col-md-4">
                <input
                  id="Type"
                  name="Type"
                  type="text"
                  placeholder="Type"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Type}
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
              <label className="col-md-4 control-label" htmlFor="Modules">
                Modules
              </label>
              <div className="col-md-4">
                <select
                  value={this.state.Modules}
                  className="form-control input-md"
                  name="Modules"
                  onChange={e => this.changeHandler(e)}
                >
                  <option value="---">---</option>
                  <option value="">512MB (1x512MB)</option>
                  <option value="1GB (1x1GB)">1GB (1x1GB)</option>
                  <option value="1GB (2x512MB)">1GB (2x512MB)</option>
                  <option value="2GB (1x2GB)">2GB (1x2GB)</option>
                  <option value="2GB (2x1GB)">2GB (2x1GB)</option>
                  <option value="3GB (3x1GB)">3GB (3x1GB)</option>
                  <option value="4GB (1x4GB)">4GB (1x4GB)</option>
                  <option value="4GB (2x2GB)">4GB (2x2GB)</option>
                  <option value="6GB (3x2GB)">6GB (3x2GB)</option>
                  <option value="8GB (1x8GB)">8GB (1x8GB)</option>
                  <option value="8GB (2x4GB)">8GB (2x4GB)</option>
                  <option value="8GB (4x2GB)">8GB (4x2GB)</option>
                  <option value="12GB (3x4GB)">12GB (3x4GB)</option>
                  <option value="12GB (6x2GB)">12GB (6x2GB)</option>
                  <option value="16GB (1x16GB)">16GB (1x16GB)</option>
                  <option value="16GB (2x8GB)">16GB (2x8GB)</option>
                  <option value="16GB (4x4GB)">16GB (4x4GB)</option>
                  <option value="24GB (3x8GB)">24GB (3x8GB)</option>
                  <option value="24GB (6x4GB)">24GB (6x4GB)</option>
                  <option value="32GB (1x32GB)">32GB (1x32GB)</option>
                  <option value="32GB (2x16GB)">32GB (2x16GB)</option>
                  <option value="32GB (4x8GB)">32GB (4x8GB)</option>
                  <option value="32GB (8x4GB)">32GB (8x4GB)</option>
                  <option value="48GB (3x16GB)">48GB (3x16GB)</option>
                  <option value="64GB (1x64GB)">64GB (1x64GB)</option>
                  <option value="64GB (2x32GB)">64GB (2x32GB)</option>
                  <option value="64GB (4x16GB)">64GB (4x16GB)</option>
                  <option value="64GB (8x8GB)">64GB (8x8GB)</option>
                  <option value="96GB (3x32GB)">96GB (3x32GB)</option>
                  <option value="128GB (1x128GB)">128GB (1x128GB)</option>
                  <option value="128GB (4x32GB)">128GB (4x32GB)</option>
                  <option value="128GB (8x16GB)">128GB (8x16GB)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label" htmlFor="Size">
                Size
              </label>
              <div className="col-md-4">
                <input
                  id="Size"
                  name="Size"
                  type="text"
                  placeholder="Size"
                  className="form-control input-md"
                  onChange={e => this.changeHandler(e)}
                  value={this.state.Size}
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
MemoryForm.propTypes = {};
export default MemoryForm;
