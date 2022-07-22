import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../Pages/Home";
import Footer from "../Footer";
import MobileData from "../../Pages/MobileData";
import MobileData2 from "../../Pages/MobileData2";
import Ipad from '../../Pages/Ipad'
import Glass from "../../Pages/Glass";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch> 
        <Route path="/iphone">
            <MobileData2 />
          </Route>
          <Route path="/glass">
            <Glass />
          </Route>
          <Route path="/ipad">
            <Ipad />
          </Route>
          <Route path="/mobiledata">
            <MobileData />
          </Route>      
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}


// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }