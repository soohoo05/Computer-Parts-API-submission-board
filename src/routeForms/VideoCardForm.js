import React from "react";
import Bounce from 'react-reveal/Bounce';

class VideoCardForm extends React.Component {
  state={
    Name:"",
    chipSet:"",
    Type:"",
    Color:"",
    Memory:"",
    coreClock:"",
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
          <legend align="center">Video Card Form</legend>
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
            <label class="col-md-4 control-label" for="chipSet">
              Chip Set
            </label>
            <div class="col-md-4">
              <input
                id="chipSet"
                name="chipSet"
                type="text"
                placeholder="Chip Set"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.chipSet}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Type">
              Type
            </label>
            <div class="col-md-4">
              <input
                id="Type"
                name="Type"
                type="text"
                placeholder="Type"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Type}
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
            <label class="col-md-4 control-label" for="Memory">
              Memory
            </label>
            <div class="col-md-4">
              <input
                id="Memory"
                name="Memory"
                type="text"
                placeholder="Memory"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.Memory}
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="coreClock">
              Core Clock
            </label>
            <div class="col-md-4">
              <input
                id="coreClock"
                name="coreClock"
                type="text"
                placeholder="Core Clock"
                class="form-control input-md"
                onChange={(e)=>this.changeHandler(e)}
                value={this.state.coreClock}
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
VideoCardForm.propTypes = {};
export default VideoCardForm;
