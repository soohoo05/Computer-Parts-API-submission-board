import React from "react";
import Bounce from 'react-reveal/Bounce';

class CoolerForm extends React.Component {
  state={
    Name:"",
    RPM:"",
    Noise:"",
    Color:"",
    WaterCooled:"",
    Price:"",
    Picture:""
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
          if(copy[key] === "" && key !=="errors") {
             errors=true
             this.setState({
               errors:"Fields cannot be left blank"
             })
          }
      }
      if(!errors){
        console.log("no errors")
        this.setState({
          errors:""
        })
      }
  }
  render() {
    return (
      <form className="form-horizontal" onSubmit={(e)=>this.checkFields(e)}>
        <Bounce>
        <fieldset>
          <legend align="center">Case Form</legend>
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
              <input
                id="WaterCooled"
                name="WaterCooled"
                type="text"
                placeholder="Water Cooled"
                className="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.WaterCooled}
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
