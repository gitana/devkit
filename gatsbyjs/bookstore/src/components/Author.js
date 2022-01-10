import React from "react";
import { Link } from "gatsby";

const Author = ({ author }) => (
    <div className="item item-author-block author" style={{"textAlign": "center"}}>
        <Link to={`/author/${author._doc}`}>
            <div className="author-dp">
                <img src={author.imageUrl} alt={author.title} />
            </div>
        </Link>
        <div className="author-details">
            <h3 className="author-name">
                <Link to={`/`}>
                    {author.title}
                </Link>
            </h3>
            <Link to={`/`} className="btn btn-primary btn-view-books">
                View Books
            </Link>
        </div>
    </div>
)

export default Author