import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav.js"
import About from "./components/About.js"
import Experience from "./components/Experience.js";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact.js";
import Admin from "./components/Admin/Admin.js";

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav/>
        <Switch>
          <Route path="/" exact>
              <Redirect to="/about"/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/experience">
              <Experience/>
          </Route>
          <Route path="/mywork">
              <MyWork/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/admin">
              <Admin/>
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
