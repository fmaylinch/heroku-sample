import React from "react";
import axios from "axios";

class HelloFromName extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "initial message"
        }
    }

    componentDidMount() {

        this.retrieveHelloMessage();
    }

    retrieveHelloMessage() {

        const helloPromise = axios.get("/api/hello/" + this.props.name);

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

    render() {

        return (
            <div>
                The message is: {this.state.message}
            </div>
        );
    }
}

export default HelloFromName;