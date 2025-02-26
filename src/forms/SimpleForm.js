import React from "react";
import Greetings from "../Greetings";
import style from "./style";

class SimpleForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        errorMessage: ''
    }

    validateName = name => {
        const regex = /[A-Za-z]{3,}/;
        return !regex.test(name)
            ? 'Name must be at least 3 characters long'
            : '';
    }
    onFirstNameChange = event =>
        this.setState({
            firstName: event.target.value
        });

    onBlurFirstName = (event) => {
        const errorMessage = this.validateName(this.state.firstName);
        return this.state.errorMessage = errorMessage;
    }
    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    render() {
        /*
                const { errorMessage} = this.state;  {errorMessage}
                equals to this.state.errorMessage
                */
        const {errorMessage, firstName} = this.state;
        return (
            <div style={style.form}>
                <div style={style.inputGroup}>
                    <label>First Name:
                        <input
                            style={style.input}
                            type="text" name="firstName"
                            onChange={this.onFirstNameChange}
                            onBlur={this.onBlurFirstName}/>

                        {this.state.errorMessage && <div style={style.error}>{errorMessage}</div>}
                    </label>
                    <label>Last Name:
                        <input
                            style={style.input}
                            type="text" name="lastName"
                            onChange={this.onLastNameChange}/>
                    </label>
                </div>
                <Greetings firstName={this.state.firstName} lastName={this.state.lastName}/>
            </div>
        );
    }
}

export default SimpleForm;