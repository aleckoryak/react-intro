import logo from './logo.svg';
import './App.css';
import React from 'react';

const Hello = (props) => <div>Hi there! {props.word}!</div>;
const Greetings = ({firstName, lastName}) => <div>Hey you! {firstName} {lastName}!</div>;
class Thanks extends React.Component {
    render() {
        return (
            <div>Thank you! {this.props.firstName} {this.props.lastName}!

                do not forget to add import React from 'react'; to work with classes
            </div>
        );
    }
}
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <Hello word="React world"/>
                    <Greetings firstName="Alec" lastName="Ko"/>
                    <Thanks firstName="Alec" lastName="Ko"/>
                </p>
            </header>
        </div>
    );
}

export default App;
