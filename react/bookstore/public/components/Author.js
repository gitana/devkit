import React from "react";
import { Link } from "react-router-dom";

const Author = ({ author }) => (
    <div className="item item-author-block author">
        <Link to={`/author/${author._doc}`} key={author._doc}>
            <div className="author-dp">
                <img src={author.imageUrl} alt={author.title} />
            </div>
        </Link>
        <div className="author-details">
            <h3 className="author-name">
                <Link to={`author/${author._doc}`} key={author._doc}>
                    {author.title}
                </Link>
            </h3>
            <Link to={`/search`} className="btn btn-primary btn-view-books">
                View Books
            </Link>
        </div>
    </div>
)

export default Author