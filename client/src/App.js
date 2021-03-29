import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Patients from "./components/Patients/Patients";
import Patient from "./components/Patients/Patient";
import Header from "./components/Header/Header";

import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={() => <Patients />} />
            <Route exact path="/paciente/:id" component={Patient} />
            <Route exact path="/alta-paciente" component={() => <Patient />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
