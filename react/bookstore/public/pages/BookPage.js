import React from "react";
import axios from "axios";
import BooksContainer from "../components/BooksContainer";
import BookTags from "../components/BookTags";

class BookPage extends React.Component {

    constuctor() {
        this.state = {
            book: null
        };
    }

    fetchAndUpdateBook() {
        const bookId = this.props.match.params.id;

        axios.get(`/api/books/${bookId}`)
            .then((res) => {
                this.setState({
                    book: res.data
                });
            });
    }

    componentDidMount() {
        this.fetchAndUpdateBook();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchAndUpdateBook();
        }
    }

    render() {
        const book = this.state && this.state.book;
        if (!book) {
            return "Error: No book data found"
        }

        return (
            <div className="book-detail page">
                <div className="container">
                    <div className="primary-block clearfix">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="book-cover book detail-book-cover">
                                    <img src={book.imageUrl} className="img-responsive" alt={book.title} />

                                    <div className="fade"></div>
                                </div>
                            </div>

                            <div className="col-sm-8">
                                <div className="book-detail-header">
                                    <h2 className="book-title">{book.title}</h2>
                                    <p className="book-author">By <span className="book-author-name">{book.author.title}</span></p>
                                </div>

                                <div className="book-detail-body">

                                    <div className="detail-cart-button row clearfix">
                                        <div className="pull-left col-md-6 col-sm-5 col-xs-12">

                                        </div>

                                        <div className="pull-right col-md-6 col-sm-7 col-xs-12">
                                            <div className="row product-actions">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="product-description">
                                        <h3>Quick Overview</h3>
                                        <p>{book.description}</p>
                                        <BookTags book={book} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="tab-holder clearfix">
                            <div className="book-additional-details">
                                <ul className="nav nav-tabs book-detail-tab">
                                    <li className="active" role="presentation">
                                        <a href="#more" data-toggle="tab">More About This Book</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#download" data-toggle="tab">Download</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="more" role="tabpanel">
                                        <p>{book.summary}</p>
                                    </div>

                                    <div className="tab-pane" id="download" role="tabpanel">
                                        <h3>Download</h3>
                                        <p>Download this book - <a href={book.pdfUrl} target="_blank">PDF</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BooksContainer
                    books={book.recommendations}
                    title="Recommendations"
                    subtitle="If you enjoy this book, we also recommend..." />
            </div>
        )
    }
}

export default BookPage
