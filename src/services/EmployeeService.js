import axios from  'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/employees";

class EmployeeService {
    getEmployees() {
        // Returning a Response of get method.
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    // Axios Rest Client to submit Form Data to Database and Pass Employee Object as method Argument.
    createEmployees(employee) {
        // Returning a Response of post method.
        // And Pass the Employee object .
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    // Method to get employee by id.
    // Pass employeeId
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

// Exporting this object of the Employee Service Class,and use it in a component.
export default new EmployeeService()