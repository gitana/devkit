import React from "react";
import Link from "next/link";

const Tag = ({ tag }) => {
    const tagLink = `/tag/${tag.tag}`;
    
    return (
        <div className="item item-tag-block tag" style={{textAlign: "center"}} data-cms-id={tag._doc}>
            <div className="tag-details">
                <h3 className="tag-name">
                    <Link href={tagLink}>
                        {tag.title}
                    </Link>
                </h3>
            </div>

        </div>
    )
}

export default Tag;