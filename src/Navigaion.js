import React from 'react';
import {Link, Route} from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage"
 

const Navigation = () => {
    return (
        <div>
        
        <nav>
            <Link to="/admin">admin panel</Link>
        </nav>
        <div>
        <Route path="/admin" component={AdminPage}/>
      </div>
        
        </div>
        
      )
}
 
export default Navigation;