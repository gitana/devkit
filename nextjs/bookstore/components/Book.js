import React from "react";
import Link from "next/link";
// import Image from 'next/image';


const Book = ({ book }) => (
    <div className="book" data-cms-id={book._doc}>
        <div className="book-cover">
            <div className="book-inner">
                <Link href={`/book/${book.slug}`}>
                    <img src={book.defaultAttachmentUrl} alt={book.title} width="255" height="261" />
                </Link>
                <div className="fade"></div>
            </div>
        </div>
        <div className="book-details">
            <h3 className="book-title">
                <Link href={`/book/${book.slug}`}>
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