import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './LoginForm'
import Hello from './Hello'
import Menu from './Menu'
import HelloFromApi from './HelloFromApi'
import HelloName from './HelloName'

class App extends React.Component {

    render() {

        return (
            <Router>
                <h1>Sample app</h1>

                <Menu/>

                <Route path="/" exact component={Index} />
                <Route path="/hello" exact component={Hello} />
                <Route path="/hello-from-api" exact component={HelloFromApi} />
                <Route path="/hello/:name" component={HelloName} />
                <Route path="/login" exact component={LoginForm} />
            </Router>
        );
    }
}

const Index = (props) => (
  <div>Home page</div>
);

export default App;