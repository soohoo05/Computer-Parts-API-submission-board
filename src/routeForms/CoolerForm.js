import React from "react";

class CoolerForm extends React.Component {
  render() {
    return (
      <form class="form-horizontal">
        <fieldset>
          <legend align="center">Case Form</legend>
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
            <label class="col-md-4 control-label" for="RPM">
              RPM
            </label>
            <div class="col-md-4">
              <input
                id="RPM"
                name="RPM"
                type="text"
                placeholder="RPM"
                class="form-control input-md"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="Noise">
              Noise
            </label>
            <div class="col-md-4">
              <input
                id="Noise"
                name="Noise"
                type="text"
                placeholder="Noise"
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
            <label class="col-md-4 control-label" for="WaterCooled">
              Water Cooled
            </label>
            <div class="col-md-4">
              <input
                id="WaterCooled"
                name="WaterCooled"
                type="text"
                placeholder="Water Cooled"
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
CoolerForm.propTypes = {};
export default CoolerForm;
