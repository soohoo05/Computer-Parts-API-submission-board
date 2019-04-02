import React from "react";

class MotherboardForm extends React.Component {
  render() {
    return (
      <form class="form-horizontal">
        <fieldset>
          <legend align="center">Motherboard Form</legend>
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
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Socket">
              Socket
            </label>
            <div class="col-md-4">
              <input
                id="Socket"
                name="Socket"
                type="text"
                placeholder="Socket"
                class="form-control input-md"
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
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Slots">
              Slots
            </label>
            <div class="col-md-4">
              <input
                id="Slots"
                name="Slots"
                type="text"
                placeholder="Slots"
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="maxRam">
              Maximum Ram
            </label>
            <div class="col-md-4">
              <input
                id="maxRam"
                name="maxRam"
                type="text"
                placeholder="Maximum Ram"
                class="form-control input-md"
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
      </form>
    );
  }
}
MotherboardForm.propTypes = {};
export default MotherboardForm;
