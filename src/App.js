import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
    <Router> 
      <div className="container">
        <HeaderComponent />
             <div className="container"> 
             <Switch> 
               <Route path= "/" exact component={ListEmployeeComponent}></Route>
               <Route path= "/employees" component={ListEmployeeComponent}></Route>
               //step1
               <Route path= "/add-employee/:id" component={CreateEmployeeComponent}></Route>
                
            <ListEmployeeComponent/>
             </Switch>
                     
            </div>
            <FooterComponent />
            </div>
          </Router>
 </div>


    


    
  );
}

export default App;
