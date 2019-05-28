import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
            words: [ ],
            user: {
                email: "",
                password: ""
            }
        }
    }

    componentDidMount() {

        console.log("Component loaded");

        this.loadWords();
    }

    loadWords() {

        const wordsPromise = axios.get("/api/list");

        wordsPromise.then(response => {
            const words = response.data;
            //onsole.log(words);

            // You need to call setState to change state values
            this.setState( { words: words } );
        });
    }

    retrieveHelloMessage() {

        const helloPromise = axios.get("/api/hello");

        helloPromise.then(response => {
            const helloMessage = response.data;
            console.log(helloMessage);

            const update = {
                message: helloMessage
            };

            // You need to call setState to change state values
            this.setState(update);
        });
    }

    register() {

        const user = this.state.user;
        console.log("registering " + user.email + " with password " + user.password);

        const promise = axios.post("/api/login/register", user);
        promise.then(response => {
            const message = response.data;
            console.log("Message from registering: " + message);
        });
    }

    updateField(event, property) {

        console.log("input changed");

        const value = event.target.value;

        this.setState( (currentState) => {
            currentState.user[property] = value;
            return currentState;
        } );
    }

    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="column col-8">

                        <h1>Sample Heroku App</h1>

                        <div className="form">
                            <div>
                                Email: <input onChange={(event) => this.updateField(event, "email")} type="text"/>
                            </div>
                            <div>
                                Password: <input onChange={(event) => this.updateField(event, "password")} type="text"/>
                            </div>
                            <div>
                                <button onClick={(event) => this.register()}>Sign up</button>
                            </div>
                        </div>

                    </div>
                    <div className="column col-4">Right</div>
                </div>


                {/*
                    <div>
                        {this.state.words.map(word => (
                            <div className="word">
                                {word}
                            </div>
                        ))}
                    </div>
                */}
            </div>
        );
    }
}

export default LoginForm;
