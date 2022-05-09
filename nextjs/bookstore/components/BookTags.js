import React, { Fragment } from "react";
import Link from "next/link";


const styleH4 = {
    display: "inline-block"
}

const styleA = {
    color: "white"
}

const BookTags = ({ book }) => (
    <Fragment>
        <h3>Tags</h3>
        <div>
            {
                book.tags.map((tag) => (
                    <h4 style={styleH4} key={tag}>
                        <span className="label label-default">
                            <Link href={`/tag/${tag}`} style={styleA}>
                                <a style={styleA}>{tag}</a>
                            </Link>
                            {/* <a style={styleA}>{tag}</a> */}
                        </span>
                    </h4>
                ))
            }
        </div>
    </Fragment>
)

export default BookTags