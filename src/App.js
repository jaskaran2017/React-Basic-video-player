import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import CourseStructure from "./Components/CourseStructure";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:coursename" component={CourseStructure} />
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
