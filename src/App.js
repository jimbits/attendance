import React, { Component } from 'react';
import { TodaysDate } from './components/date/Date.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Button from "./ui/button/Button"
import AdminPage from "./pages/AdminPage"
// import Firebase from './firebase/Firebase';



class App extends Component {
  render() {
    return (
       <p>

<Router>
        <div className="app">
          <header className="app-header">
            <h1>Attendance</h1>
            <TodaysDate />



          </header>
        </div>
        
          <Route exact path="/" component={AdminPage} />
        </Router>
     
    );
  }
}

export default App;
