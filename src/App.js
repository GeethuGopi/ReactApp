import React from "react";
//import logo from './logo.svg';
//import Hello from './Components/Hello';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
      {/*<Hello city='Auckland' />*/}
      <Footer />
     
      <Switch>
        <Route  exact path="/">
        <h1>This is my home page</h1>
        </Route>
        <Route path="/about">
        <h1>This is my about page</h1>
        </Route>
        <Route path="/contact">
        <h1>This is my contact page</h1>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
