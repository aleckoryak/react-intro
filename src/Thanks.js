import React from "react";

class Thanks extends React.Component {
    render() {
        return (
            <div>Thank you! {this.props.firstName} {this.props.lastName}!

                do not forget to add import React from 'react'; to work with classes
            </div>
        );
    }
}

export default Thanks;