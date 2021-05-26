import axios from 'axios';

// REST Endpoint 
const JOB_API_BASE_URL = "https://sunapp-spring.herokuapp.com/api/v1/jobs";

// Js Class
class JobService {

    // Method to return response of get method.
    getJobs(){
        return axios.get(JOB_API_BASE_URL);
    }

}

// Export Class Object. Note: Not Exporting Class but exporting object of a class. So we can use object of a class in a component.
export default new JobService()

