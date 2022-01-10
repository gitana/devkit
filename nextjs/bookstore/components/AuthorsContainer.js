import React from 'react'
import Author from './Author'

class AuthorsContainer extends React.Component {

    render() {
        const firstFourAuthors = this.props.authors.slice(0, 4);

        return (
            <div className="featured-item-block">
                <div className="container">
                    <div className="wow fadeInUp">
                        <div className="module block-featured-author module-block">
                            <div className="module-heading">
                                <h2 className="module-title">{this.props.title}</h2>
                                <p className="module-subtitle">{this.props.subtitle}</p>
                            </div>
                            <div className="module-body" id="featured-author">
                                <div className="authors">
                                    <div className="row">
                                        {
                                            firstFourAuthors.map((author) => (
                                                <div className="col-md-3" key={author._doc}>
                                                    <Author author={author} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthorsContainer
