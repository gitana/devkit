import React from "react";

import { getCurrentBranch } from '../../lib/cloudcms';

import Layout from "../../components/Layout";
import BooksContainer from "../../components/BooksContainer";
import BookTags from "../../components/BookTags";

const BookPage = ({ book }) => {

    return (
        <Layout title={book.title}>
            <div className="book-detail page" data-cms-id={book._doc}>
                <div className="container">
                    <div className="primary-block clearfix">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="book-cover book detail-book-cover">
                                    <img src={book.defaultAttachmentUrl} className="img-responsive" alt={book.title} />

                                    <div className="fade"></div>
                                </div>
                            </div>

                            <div className="col-sm-8">
                                <div className="book-detail-header">
                                    <h2 className="book-title">{book.title}</h2>
                                    <p className="book-author">By <span className="book-author-name">{book.author.title}</span></p>
                                </div>

                                <div className="book-detail-body">

                                    <div className="detail-cart-button row clearfix">
                                        <div className="pull-left col-md-6 col-sm-5 col-xs-12">

                                        </div>

                                        <div className="pull-right col-md-6 col-sm-7 col-xs-12">
                                            <div className="row product-actions">

                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="product-description">
                                        <h3>Quick Overview</h3>
                                        <p>{book.description}</p>
                                        <BookTags book={book} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="tab-holder clearfix">
                            <div className="book-additional-details">
                                <ul className="nav nav-tabs book-detail-tab">
                                    <li className="active" role="presentation">
                                        <a href="#more" data-toggle="tab">More About This Book</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#download" data-toggle="tab">Download</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="more" role="tabpanel">
                                        <p>{book.summary}</p>
                                    </div>

                                    <div className="tab-pane" id="download" role="tabpanel">
                                        <h3>Download</h3>
                                        <p>Download this book - <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">PDF</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BooksContainer
                    books={book.recommendations}
                    title="Recommendations"
                    subtitle="If you enjoy this book, we also recommend..." />
            </div>
        </Layout>
    )
}

export async function getStaticPaths()
{
    const branch = await getCurrentBranch(null);
    const books = (await branch.queryNodes({ _type: "store:book" }, { limit: -1 })).rows;

    let paths = books.map(book => ({ params: { slug: book.slug }}));
    paths = paths.filter((path) => !!path.params.slug)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context)
{
    let nodeSlug = context.params.slug;

    const branch = await getCurrentBranch(context);
    let book = await branch.queryOneNode({"_type": "store:book", "slug": nodeSlug });
    book.recommendations = await Promise.all(book.recommendations.map(rec => branch.readNode(rec.id)));
    book.pdfUrl = await branch.createAttachmentLink(book._doc, "book_pdf");

    return {
        props: {
            book
        }
    }
}

export default BookPage
