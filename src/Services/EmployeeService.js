import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees";

class EmployeeService{

  getEmployees() { 
      return axios.get(EMPLOYEE_API_BASE_URL);
  }
  //sending employee torestAPI
createEmployee(employee){
   //store form data in db
  return axios.post(EMPLOYEE_API_BASE_URL, employee);
}
  getEmployeeById(employeeId) {


    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  } 
  
  //connecting the spring rest api with react by using axios http lib
  //we will need  to use this.state.id when calling this method in updateemployeecomponent function 
  updateEmployee(employee, employeeId){
    return axios.put(EMPLOYEE_API_BASE_URL+ '/' + employeeId, employee);
  }

deleteEmployee(employeeId) {
  return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}
  
}

    export default new EmployeeService()