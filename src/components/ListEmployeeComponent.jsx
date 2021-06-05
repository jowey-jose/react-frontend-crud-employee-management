import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

// There are 2 types of components in React: Stateful and Stateless. 
// This Learning Series will be using React Classes.
class ListEmployeeComponent extends Component {
    constructor(props) {
        // Pass props to the super class.
        super(props)

        this.state = {
            // Initialize an employee array inside a state.
            employees: []
        }

        // Event Handler Binded in Constructor when button is pressed.
        this.addEmployee = this.addEmployee.bind(this);

    }

    // Called immediately a component is mounted. Used to make rest/ajax API methods
    componentDidMount(){
        // getEmployees returns a promise, with a 'then' method that has a response.
        EmployeeService.getEmployees().then((res) => {
            // Store the response data into the employees array.
            this.setState({employees: res.data});
        });
    }

    // Add Employee Method
    addEmployee(){
        // When Employee Button is clicked, this route gets called. The path leads to createEmployee Component.
        // React Router configured in App.js stores history objects.
        // And history has all the mappings of the routings.
        // React router passes history objects to each router as props.
        // React router basically provides history objects, for each route to props.
        // We get the history objects from props. 
        // The history object enables us to manually controll the history of the browser.
        this.props.history.push('/add-employee');
    }

    render() {
        // Write Jsx Code inside the Return method.
        return (
            <div>
                {/* In react we use 'className' to point to css/bootsrap classes unlike html where we use the 'class' variable. */}
                <h2 className="text-center">Employee List</h2>

                <div className="row">
                    {/* Employee Button */}
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                </div>

                <div className="row">
                    {/* Bootstrap table */}
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {/* Inside Table Body, We have a javasript code to dynamically display table rows */}
                        <tbody>
                            {
                                // Map is an es6 feature we are going to leverage.
                                this.state.employees.map(
                                    // Here we Iterate over the Employees.
                                    employee => 
                                    // Each Row Will have a Unique Id.
                                    <tr key={employee.id}>
                                        {/* Populate the Row with Data from the Database. */}
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;