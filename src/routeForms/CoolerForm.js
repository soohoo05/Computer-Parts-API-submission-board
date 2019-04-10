import React from "react";
import Bounce from 'react-reveal/Bounce';
import {Submitter} from '../actions/Submitter';

class CoolerForm extends React.Component {
  state={
    Name:"",
    RPM:"",
    Noise:"",
    Color:"",
    WaterCooled:"",
    Price:"",
    Picture:"",
    errors:""
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  checkFields = (e) => {
    e.preventDefault()
    let copy=this.state
    let errors=false
    for(var key in copy) {
          if((copy[key] === "" || copy[key] ==="---") && key !=="errors"  ) {
             errors=true
             this.setState({
               errors:"Fields cannot be left blank"
             })
          }
      }
      if(!errors){
        Submitter("Cooler",this.state)
        this.setState({
          Name:"",
          RPM:"",
          Noise:"",
          Color:"",
          WaterCooled:"",
          Price:"",
          Picture:"",
          errors:"Submitted!"

        })
      }
  }
  render() {
    return (
      <form className="form-horizontal" onSubmit={(e)=>this.checkFields(e)}>
        <Bounce>
        <fieldset>
          <legend align="center">Cooler Form</legend>
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
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Name}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="RPM">
              RPM
            </label>
            <div className="col-md-4">
              <input
                id="RPM"
                name="RPM"
                type="text"
                placeholder="RPM"
                className="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.RPM}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Noise">
              Noise
            </label>
            <div className="col-md-4">
              <input
                id="Noise"
                name="Noise"
                type="text"
                placeholder="Noise"
                className="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Noise}
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
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Color}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="WaterCooled">
              Water Cooled
            </label>
            <div className="col-md-4">

            <select value={this.state.WaterCooled} className="form-control input-md" name="WaterCooled"   onChange={(e)=>this.changeHandler(e)}>
              <option value="---">---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

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
                onChange={(e)=>this.changeHandler(e)}
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
                onChange={(e)=>this.changeHandler(e)}
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
CoolerForm.propTypes = {};
export default CoolerForm;
