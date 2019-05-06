
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
            words: [ ]
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
            console.log(words);

            // You need to call setState to change state values
            this.setState( { words: words } );
        });
    }

    retrieveHelloMessage() {

        const helloPromise = axios.get("/api/hello");

        helloPromise.then(response => {
            const helloMessage = response.data;
            console.log(helloMessage);

            // You need to call setState to change state values
            this.setState( { message: helloMessage } );
        });
    }

    render() {

        return (
            <div>
                <h1>Sample Heroku App</h1>
                <div>
                    {this.state.words.map(word => (
                        <div className="word">
                            {word}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
