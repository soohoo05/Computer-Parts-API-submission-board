import React from "react";
import Bounce from 'react-reveal/Bounce';

class PowerSupplyForm extends React.Component {
  state={
    Name:"",
    Form:"",
    Efficiency:"",
    Color:"",
    Watts:"",
    Modular:"",
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
          <legend align="center">Power Supply Form</legend>
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
            <label class="col-md-4 control-label" for="Form">
              Form
            </label>
            <div class="col-md-4">
              <input
                id="Form"
                name="Form"
                type="text"
                placeholder="Form"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Form}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" for="Efficiency">
              Efficiency
            </label>
            <div class="col-md-4">
              <input
                id="Efficiency"
                name="Efficiency"
                type="text"
                placeholder="Efficiency"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Efficiency}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Color">
              Color
            </label>
            <div class="col-md-4">
              <input
                id="Color"
                name="Color"
                type="text"
                placeholder="Color"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Color}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Watts">
              Watts
            </label>
            <div class="col-md-4">
              <input
                id="Watts"
                name="Watts"
                type="text"
                placeholder="Watts"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Watts}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" for="Modular">
              Modular
            </label>
            <div class="col-md-4">
              <input
                id="Modular"
                name="Modular"
                type="text"
                placeholder="Modular"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Modular}
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
PowerSupplyForm.propTypes = {};
export default PowerSupplyForm;
