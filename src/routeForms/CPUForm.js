import React from "react";
import Bounce from 'react-reveal/Bounce';
import {Submitter} from '../actions/Submitter';

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
        Submitter("CPU",this.state)
        this.setState({
          errors:"Submitted!"

        })
      }
  }
  render() {
    return (
      <form className="form-horizontal"onSubmit={(e)=>this.checkFields(e)}>
        <Bounce>
        <fieldset>
          <legend align="center">CPU Form</legend>
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
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Speed}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Cores">
              Cores
            </label>
            <div className="col-md-4">
              <input
                id="Cores"
                name="Cores"
                type="text"
                placeholder="Cores"
                className="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Cores}
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
CPUForm.propTypes = {};
export default CPUForm;
