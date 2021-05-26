import axios from  'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8090/api/v1/employees";

class EmployeeService {
    getEmployees() {
        // Returning a Response of get method.
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

// Exporting this object of the Employee Service Class,and use it in a component.
export default new EmployeeService()