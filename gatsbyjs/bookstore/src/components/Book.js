import React from "react";
import { Link } from "gatsby";

const Book = ({ book }) => (
    <div className="book">
        <div className="book-cover">
            <div className="book-inner">
                <Link to={`/book/${book._doc}`}>
                    <img src={book.imageUrl} alt={book.title} width="255" height="261" />
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
            { book.author &&
                <p className="book-author">{book.author.title}</p>
            }
        </div>
    </div>
)

export default Book