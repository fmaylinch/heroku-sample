
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        }
    }

    componentDidMount() {

        console.log("Component loaded");

        const helloPromise = axios.get("/api/hello");

        helloPromise.then(response => {
            const helloMessage = response.data;
            console.log(helloMessage);

            // You need to call setState to change state values
            this.setState( { message: helloMessage } );
        });

        console.log("API called");
    }

    render() {

        return (
            <div>
                <h1>Sample Heroku App</h1>
                <p>
                    {this.state.message}
                </p>
            </div>
        );
    }
}
