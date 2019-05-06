
class App extends React.Component {

    componentDidMount() {

        console.log("Component loaded");

        const helloPromise = axios.get("/api/hello");

        helloPromise.then(response => {
            const helloMessage = response.data;
            console.log(helloMessage);
        });

        console.log("API called");
    }

    render() {

        return (
            <div>
                <h1>Sample Heroku App</h1>
                <p>
                    This is a sample class
                </p>
            </div>
        );
    }
}
