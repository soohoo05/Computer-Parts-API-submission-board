import React, { Component } from "react";
import "./App.css";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./routeForms/Home";
import CaseForm from "./routeForms/CaseForm";
import CoolerForm from "./routeForms/CoolerForm";
import CPUForm from "./routeForms/CPUForm";
import MemoryForm from "./routeForms/MemoryForm";
import MotherboardForm from "./routeForms/MotherboardForm";
import PowerSupplyForm from "./routeForms/PowerSupplyForm";
import StorageForm from "./routeForms/StorageForm";
import VideoCardForm from "./routeForms/VideoCardForm";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";

class App extends Component {
  componentDidMount() {
    if (this.props.history.location.pathname === "/") {
      this.props.history.replace("/home");
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/form/cases" component={CaseForm} />
          <Route exact path="/form/coolers" component={CoolerForm} />
          <Route exact path="/form/cpus" component={CPUForm} />
          <Route exact path="/form/memory" component={MemoryForm} />
          <Route exact path="/form/motherboards" component={MotherboardForm} />
          <Route exact path="/form/powersupplies" component={PowerSupplyForm} />
          <Route exact path="/form/storages" component={StorageForm} />
          <Route exact path="/form/videocards" component={VideoCardForm} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
