import React from "react";

import { getCurrentBranch } from '../../lib/cloudcms';

import Layout from "../../components/Layout";

const AuthorPage = ({ author }) => {

    return (
        
        <Layout title={author.title}>
            <div className="author-detail page" data-cms-id={author._doc}>
            <div className="container">
                <div className="primary-block clearfix">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="author-cover author detail-author-cover">
                                <img src={author.defaultAttachmentUrl} className="img-responsive" alt={author.title} />
                                <div className="fade"></div>
                            </div>
                        </div>

                        <div className="col-sm-8">
                            <div className="author-detail-header">
                                <h2 className="author-title">{author.title}</h2>
                                <p className="author">By <span className="author-name">{author.title}</span></p>
                                <div className="star-rating">
                                </div>
                            </div>

                            <div className="author-detail-body">

                                <div className="detail-cart-button row clearfix">
                                    <div className="pull-right col-md-6 col-sm-7 col-xs-12">
                                        <div className="row product-actions">

                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>

                                <div className="product-description">
                                    <h3>Quick Overview</h3>
                                    <p>{author.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </Layout>
    )
}

export async function getStaticPaths()
{
    const branch = await getCurrentBranch(null);
    const authors = (await branch.queryNodes({ _type: "store:author" }, { limit: -1 })).rows;

    let paths = authors.map(author => ({ params: { slug: author.slug }}));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context)
{
    let nodeSlug = context.params.slug;

    const branch = await getCurrentBranch(context);
    let author = await branch.queryOneNode({"_type": "store:author", "slug": nodeSlug });

    return {
        props: {
            author
        }
    }
}

export default AuthorPage
