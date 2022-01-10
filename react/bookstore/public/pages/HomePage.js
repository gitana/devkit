import React, { Fragment } from "react";
import axios from "axios";
import Slider from '../components/Slider';
import BooksContainer from '../components/BooksContainer';
import AuthorsContainer from '../components/AuthorsContainer';

class HomePage extends React.Component {

    constuctor() {
        this.state = {
            books: null,
            authors: null,
            error: null
        };
    }

    fetchBooks() {
        return axios.get("/api/books");
    }

    fetchAuthors() {
        return axios.get("/api/authors");
    }

    componentDidMount() {
        axios.all([this.fetchBooks(), this.fetchAuthors()])
            .then(axios.spread((bs, as) => {
                this.setState({
                    authors: as.data,
                    books: bs.data
                });
            }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const books = this.state && this.state.books;
        if (!books) {
            return "Error: No book data found"
        }
        const bookList = Object.values(books);

        const authors = this.state && this.state.authors;
        if (!authors) {
            return "Error: No author data found"
        }
        const authorList = Object.values(authors);
        
        return (
            <Fragment>
                <Slider book={bookList[0]} />
                <BooksContainer
                    books={bookList}
                    title="New Books"
                    subtitle="Do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <AuthorsContainer authors={authorList} />
            </Fragment>
        )
    }
}

export default HomePage
