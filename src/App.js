import React from "react";
//import logo from './logo.svg';
//import Hello from './Components/Hello';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";

function App() {
  return (
    <div>
      <Router>
      <Header />
      {/*<Hello city='Auckland' />*/}
      <Footer />
     
      <Switch>
        <Route  exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
