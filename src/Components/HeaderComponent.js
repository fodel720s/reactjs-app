import React, { Component } from 'react';

class HeaderComponent extends Component {
  
    constructor (props) {

        super(props)
        this.state = {

        }
    }
  
  
  
  
  
    render() {
        return (
            <div>
                <header> 
                    <nav className = "navbar navbar-expand-md varbar-dark bg-dark">
                        <div align="center"><a href= "http://localhost:3000" className="navbar-brand">🏠Home</a> </div> 
                        <div align="center"><a href= "http://localhost:3000/add-employee/-1" className="navbar-brand">  🧑 Add Employee</a> </div>
                       
                    </nav> 
                </header>
            </div>
        );
    }
}
export default HeaderComponent;