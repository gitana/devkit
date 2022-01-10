import React from 'react'
import Tag from './Tag'

const TagsContainer = (props) => (
    <div className="container">
        <div className="wow fadeInUp">
            <div className="module block-featured-tag module-block">
                <div className="module-heading">
                    <h2 className="module-title">Tags</h2>
                </div>
                <div className="module-body" id="featured-tag">
                    <div className="row">
                        <div className="tags">
                            { props.tags.map(tag => 
                                <div className="col-md-3" key={tag.tag}>
                                    <Tag tag={tag} />
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TagsContainer
