import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import SearchPage from "./pages/SearchPage";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path={`/`} component={HomePage} />
            <Route exact path={`/book/:id`} component={BookPage} />
            <Route path={`/search`} component={SearchPage} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));