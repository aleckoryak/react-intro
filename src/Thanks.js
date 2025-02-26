import React from "react";

class Thanks extends React.Component {
    render() {
        return (
            <div>Thank you! {this.props.firstName} {this.props.lastName}</div>
        );
    }
}

export default Thanks;