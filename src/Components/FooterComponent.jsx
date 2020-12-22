import React, { Component } from 'react';
import ListEmployeeComponent from './ListEmployeeComponent';

class FooterComponent extends Component {
    
    constructor(props) {

        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
          
            <div>
  
                <footer className="text-muted">All rights reserved Mohamed Fadhel Ben Hamida - Achref Karoui - Amen Gabsi - Ryhem Louati - Fayrouz Ltaief</footer>
            </div>


          
        );
    }
}

export default FooterComponent;