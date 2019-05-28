import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App'
import Hello from './Hello'

class Main extends React.Component {

    render() {

        return (
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/hello" exact component={Hello} />
                <Route path="/login" exact component={App} />
            </Router>
        );
    }
}

const Index = (props) => (
  <div>Home page</div>
);

export default Main;