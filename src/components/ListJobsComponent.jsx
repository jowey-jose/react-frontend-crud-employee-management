// Two types of components stateful and stateless.

// Type rcc - from react snippets it will create a skeleton for a react class component.

import React, { Component } from 'react';
import JobService from './Services/JobService';

// This Component Lists Saved Jobs from a DB in a Browser.
//ListJobsComponent Extends Component from the  React Library.
class ListJobsComponent extends Component {
    constructor(props){
        // We pass props to the super class which is React Component extended.
        super(props)

        // This is a state that belongs to the ListJobsComponent
        this.state = {
            // Initializing an array for Jobs inside a state.
            jobs: []
        }
    }

    // Method called imediately component is mounted. Best API Calls.
    componentDidMount(){
        // This returns a promise so we use 'then'. 'Then', has a Response, set the response to the Job Array.
        JobService.getJobs().then((res) => {
            // Successfully Saved the response to the Job Array.
            this.setState({jobs: res.data});
        });
    }

    // The Render Method.
    render() {
        // Inside the Return, we will write our Jsx Code.
        return (
            <div>
                {/* In React we use Lowercase, CamelCase(className) to point to CSS Classes, unlike normal html we use (class=) */}
                <h2 className = "text-center">Jobs List</h2>

                {/* Creating a Html table with bootstrap classes */}
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Job Category </th>
                                <th> Job Picture </th>
                                <th> Job Name </th>
                                <th> Job Cost </th>
                                <th> Job Duration </th>
                                <th> Buffer Duration </th>
                                <th> Staff Assigned </th>
                                <th> Private Job </th>
                                <th> Video Meeting </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Add a Javascript code to dynamically display table rows. */}
                            {
                                // map is an es6 feature we are going to leverage. 
                                this.state.jobs.map(
                                    // Then we are going to iterate over jobs array.
                                    job => 

                                    // Each Row should have a unique key
                                    <tr key = {job.jobId} >
                                            {/* Populate the following data in the Td Element */}
                                            <td> {job.job_category} </td>
                                            <td> {job.job_profile_picture} </td>
                                            <td> {job.job_name} </td>
                                            <td> {job.job_cost} </td>
                                            <td> {job.job_duration} </td>
                                            <td> {job.buffer_duration} </td>
                                            <td> {job.job_staff} </td>
                                            <td> {job.private_job} </td>
                                            <td> {job.video_meeting} </td>  
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

export default ListJobsComponent;