import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        // Pass props to the super class.
        super(props)

        this.state = {
            // Define properties to state, to store inputs from data, will enable to get form data that will be available in submission
            firstName: '',
            lastName: '',
            emailId: ''
        }

        // Bind Handler to component.
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);

        // Bind Handler to component.
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        // Bind Handler to component.
        this.saveEmployee = this.saveEmployee.bind(this);

    }
    
    // Creating the First Name Handler method to be called.
    changeFirstNameHandler=(event) => {
        // Capturing the Event.
        // setState is used to add value to the firstName, and the value can now be seen in input text field.
        this.setState({firstName: event.target.value});
    }

    // Creating the Last Name Handler method to be called.
    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }

    // Creating the Last Name Handler method to be called.
    changeEmailHandler=(event) => {
        this.setState({emailId: event.target.value});
    }

    // Save Employee Method
    saveEmployee = (e) => {
        e.preventDefault();

        // Retrieve data from state defined fields.
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};

        // Adding Console Log to see the form data in the console
        console.log('employee => ' + JSON.stringify(employee));


        // Call create Service method and pass employee object.
        // Axios returns a promise. We call the then method.
        EmployeeService.createEmployees(employee).then(res => {
            // Navigate to the Employee List, once Saved.
            this.props.history.push('/employees');
            alert("Employee Created Successfully");
        });
    }

    // Cancel Method. Navigates Back to the Employee List Component.
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                         <label>First Name: </label>
                                         <input placeholder="First Name" name="firstName" className="form-control"
                                         //  First name Empty at start, then value will be extracted from the text field.
                                         value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>

                                    <div className = "form-group">
                                         <label>Last Name: </label>
                                         <input placeholder="Last Name" name="lastName" className="form-control"
                                         //  First name Empty at start, then value will be extracted from the text field.
                                         value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>

                                    <div className = "form-group">
                                         <label>Email Id: </label>
                                         <input placeholder="Email Address" name="emailId" className="form-control"
                                         //  First name Empty at start, then value will be extracted from the text field.
                                         value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>

                                    {/* saveEmployee event Handler will be bind in the constructor */}
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>

                                    {/* Cancel Method Bind Directly */}
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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