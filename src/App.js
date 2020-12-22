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
      </Router>
    </div>
  );
}

export default App;
