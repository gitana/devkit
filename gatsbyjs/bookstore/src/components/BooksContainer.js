import React from 'react'
import Book from './Book'

class BooksContainer extends React.Component {

    render() {
        const firstFourBooks = this.props.books.slice(0, 4);

        return (
            <div className="container">
                <div className="wow fadeInUp">
                    <div className="module block-new-books module-block">
                        <div className="module-heading">
                            <h2 className="module-title">{this.props.title}</h2>
                            <p className="module-subtitle">{this.props.subtitle}</p>
                        </div>
                        <div className="module-body">
                            <div className="books">
                                <div className="row">
                                    {
                                        firstFourBooks.map((book) => (
                                            <div className="col-md-3" key={book._doc}>
                                                <Book book={book} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BooksContainer
