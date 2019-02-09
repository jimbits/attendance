import React from 'react';
import TodaysDate from '/components/data/TodaysData';
import Button from 'ui/button/Button'
const Welcome = () => {
    return (  
     <header className="app-header">
    <h1>Attendance</h1>
    <TodaysDate />
    <div>
    <Button label="login"/>
    <Button label="signup"/>
    </div>
  </header> );
}
 
export default Welcome;