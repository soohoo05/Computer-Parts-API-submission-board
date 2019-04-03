import React from "react";
import Bounce from 'react-reveal/Bounce';

class StorageForm extends React.Component {
  state={
    Name:"",
    Form:"",
    Type:"",
    Color:"",
    Capacity:"",
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
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Name}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="Form">
              Form
            </label>
            <div className="col-md-4">
              <input
                id="Form"
                name="Form"
                type="text"
                placeholder="Form"
                className="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Form}
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
                onChange={(e)=>this.changeHandler(e)}
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
                onChange={(e)=>this.changeHandler(e)}
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
                onChange={(e)=>this.changeHandler(e)}
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
StorageForm.propTypes = {};
export default StorageForm;
