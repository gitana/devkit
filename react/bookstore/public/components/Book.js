import React from "react";
import { Link } from "react-router-dom";

class SaleRibbon extends React.Component {
    render () {
        if (window.location.href.indexOf("search") < 0) {
            return null;
        }

        return (
            <div className="sale-ribbon"><div className="sale-ribbon-content">sale off</div></div>
        )
    }
}

const Book = ({ book }) => (
    <div className="book">
        <SaleRibbon />
        <div className="book-cover">
            <div className="book-inner">
                <Link to={`/book/${book._doc}`}>
                    <img src={book.imageUrl} alt={book.title} />
                </Link>
                <div className="fade"></div>
            </div>
        </div>
        <div className="book-details">
            <h3 className="book-title">
                <Link to={`/book/${book._doc}`}>
                    {book.title}
                </Link>
            </h3>
            <p className="book-author">{book.authorTitle}</p>
        </div>
    </div>
)

export default Book