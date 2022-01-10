import React from "react";
import Link from "next/link";
// import Image from 'next/image'

const Author = ({ author }) => {
    const authorLink = `/author/${author.slug}`;

    return (
        <div className="item item-author-block author" style={{"textAlign": "center"}} data-cms-id={author._doc}>
            <Link href={authorLink}>
                <div className="author-dp">
                    <img src={author.defaultAttachmentUrl} alt={author.title} />
                </div>
            </Link>
            <div className="author-details">
                <h3 className="author-name">
                    <Link href={authorLink}>
                        {author.title}
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default Author