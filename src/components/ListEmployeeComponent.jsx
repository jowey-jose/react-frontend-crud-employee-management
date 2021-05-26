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

    }

    // Called immediately a component is mounted. Used to make rest/ajax API methods
    componentDidMount(){
        // getEmployees returns a promise, with a 'then' method that has a response.
        EmployeeService.getEmployees().then((res) => {
            // Store the response data into the employees array.
            this.setState({employees: res.data});
        });
    }

    render() {
        // Write Jsx Code inside the Return method.
        return (
            <div>
                {/* In react we use 'className' to point to css/bootsrap classes unlike html where we use the 'class' variable. */}
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    {/* Bootsrap table */}
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