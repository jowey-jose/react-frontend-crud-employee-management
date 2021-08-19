import React, { Component } from 'react'

// Populate user data.
export default class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id
        }
    }
    render() {
        return (
            <div>
                <h2> View Empoloyee Page</h2>
            </div>
        )
    }
}
