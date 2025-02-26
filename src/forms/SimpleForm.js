import React from "react";
import Greetings from "../Greetings";

class SimpleForm extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    }
    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }
    render() {
        return (
            <div>
                <input type="text" name="firstName" onChange={this.onFirstNameChange} />
                <input type="text" name="lastName" onChange={this.onLastNameChange} />
                <Greetings firstName={this.state.firstName} lastName={this.state.lastName} />
            </div>
        );
    }
}

export default SimpleForm;