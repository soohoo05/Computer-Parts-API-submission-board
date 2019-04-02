import React from "react";
import Bounce from 'react-reveal/Bounce';

class CPUForm extends React.Component {
  state={
    Name:"",
    Speed:"",
    Cores:"",
    Price:"",
    Picture:""
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <form class="form-horizontal">
        <Bounce>
        <fieldset>
          <legend align="center">CPU Form</legend>
          <div className="error" />
          <div class="form-group top">
            <label class="col-md-4 control-label" for="Name">
              Name
            </label>
            <div class="col-md-4">
              <input
                id="Name"
                name="Name"
                type="text"
                placeholder="Name"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Name}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Speed">
              Speed
            </label>
            <div class="col-md-4">
              <input
                id="Speed"
                name="Speed"
                type="text"
                placeholder="Speed"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Speed}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Cores">
              Cores
            </label>
            <div class="col-md-4">
              <input
                id="Cores"
                name="Cores"
                type="text"
                placeholder="Cores"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Cores}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Price">
              Price
            </label>
            <div class="col-md-4">
              <input
                id="Price"
                name="Price"
                type="text"
                placeholder="Price"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Price}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Picture">
              Picture
            </label>
            <div class="col-md-4">
              <input
                id="Picture"
                name="Picture"
                type="text"
                placeholder="Picture"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Picture}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Submit" />
            <div class="col-md-4">
              <button id="Submit" name="Submit" class="btn btn-primary">
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
CPUForm.propTypes = {};
export default CPUForm;
