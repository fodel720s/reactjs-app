import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployeeComponent extends Component {

constructor(props) {
    super(props)
    this.state= {  employees : []

    }
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
}


deleteEmployee(id) {    
    //restAPI 
  EmployeeService.deleteEmployee(id).then(res => {

    this.setState({employees: this.state.employees.filter(employee => employee.id !== id)}); 

  });
}

// all the event handlers  - add employee edit and delete, needs to be binded 
editEmployee(id) {

    this.props.history.push(`/add-employee/${id}`);  
}

componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
        console.log(res.data)
this.setState({employees: res.data});

    }); 
}

addEmployee(){

    this.props.history.push('/add-employee/-1');
}
    render() {
        return (
             
            <div align="center">
               
              <h1 className="fill-window" className="text-center">Bienvenu sur Application de gestion des ressources humaines</h1>
                <div className="row"> 

                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> 
           </div>


<div> <br/></div>


 <div className="col-md-6 col-md-offset-3" className = "row" >
<table className = "table table-hover table-dark">

            <thead className="thead-light"> 
             <tr>
            <th>Employee First Name</th>
                 <th>Employee Last Name</th>
                 <th>Employee Email adress</th>
             <th>Action</th>

             </tr>
            </thead> 

         <tbody>
        {
            this.state.employees.map(employee => <tr key={employee.id}>
            <td>{employee.firstName} </td> 
           <td>{employee.lastName} </td>
                <td>{employee.emailId} </td> 
                <td>
              <button onClick= { () => this.editEmployee(employee.id)} className=" btn btn-info">Update </button>  
              <button style={{ marginLeft : "10px"}} onClick= { () => this.deleteEmployee(employee.id)} className=" btn btn-danger">Delete </button>
              </td>
            </tr>)
        }
       </tbody>
</table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;


