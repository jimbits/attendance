import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
 import LandingPage from "./pages/landing/LandingPage"
// import Firebase from './firebase/Firebase';
import Navigation from "./Navigaion";



class App extends Component {
  render() {
    return (
    

 <Router>

        <div className="app">
   
        <LandingPage/>
        </div>
 </Router>

        
     
        
     
    );
  }
}

export default App
