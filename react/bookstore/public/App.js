import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import SearchPage from "./pages/SearchPage";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={ <HomePage /> } />
                        <Route exact path='/book/:id' element={<BookPage /> } />
                        <Route path='/search' element={ <SearchPage /> } />
                    </Routes>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
