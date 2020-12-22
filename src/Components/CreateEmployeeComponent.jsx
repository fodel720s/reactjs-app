import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class CreateEmployeeComponent extends Component {

constructor(props) {
    super(props)
    this.state = {
        //step2
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: ''
    }
   
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
}


//step3 get the employee object by Id

          
componentDidMount() {

    if (this.state.id == -1) {

   return 
    }else  {

        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,
            lastName : employee.lastName,
        emailId: employee.emailId
         
    });
    });

}
}
   

//inside this save employee method we need todecide whether the form is for add employee or update employee  

saveEmployee = (e) => {
    e.preventDefault();
    let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    console.log('employee =>' + JSON.stringify(employee));
  

   //step5  if id== -1 we go for create employee method and we pass employee object it will send the employee data to the rest API and the api will use the saveEmployee method to save the data
   if(this.state.id == -1) {
    EmployeeService.createEmployee(employee).then(res => {

        this.props.history.push('/employees');
    });
    
       
   }else  {    //else if id not -1 it will call update employee method which will  call update employee REST API to passemployee object (updated employee infos and the id and the REST API Will update employee informations in the database)
    EmployeeService.updateEmployee(employee, this.state.id).then(res => {

        this.props.history.push('/employees');
    });
}
}
    

changeFirstNameHandler(event){
    this.setState({firstName: event.target.value}); 
}

changeLastnameHandler(event){
    this.setState({lastName: event.target.value}); 
}
changeEmailHandler(event){
    this.setState({emailId: event.target.value}); 
}

cancel(){
    this.props.history.push('/employees');
}
     



    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                        <form action="">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="first name" name="firstname" className="form-control" 
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="last name" name="lastname" className="form-control" 
                                    value={this.state.lastName} onChange={this.changeLastnameHandler}/>

                                </div>



                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input placeholder="Email Adress@" name="emailId" className="form-control" 
                                    value={this.state.emailId} onChange={this.changeEmailHandler}/>

                                </div>
                    <button className="btn btn-success" onClick={this.saveEmployee}> Save </button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel </button>
                    
                        </form>

                        </div>
                         </div>

                    </div>

               </div>

            </div>
        );
    }
}

export default CreateEmployeeComponent;