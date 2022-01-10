import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import BooksContainer from '../components/BooksContainer';
import AuthorsContainer from "../components/AuthorsContainer";

const HomePage = ({ data }) => {
    const books = data.allStoreBook.nodes.map(book => {
        book.imageUrl = book._system.attachments.default.path.publicURL;
        return book;
    });

    const authors = data.allStoreAuthor.nodes.map(author => {
        author.imageUrl = author._system.attachments.default.path.publicURL;
        return author;
    });

    return (
        <Layout>
            <Slider book={books[0]} />
            <BooksContainer
                books={books}
                title="New Books"
                subtitle="Do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
            <AuthorsContainer authors={authors} />
        </Layout>
    );
}

export const query = graphql`
    query {
        allStoreBook {
            nodes {
                _doc
                title
                description
                author {
                    title
                }
                _system {
                    attachments {
                        default {
                            path {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
        allStoreAuthor {
            nodes {
                _doc
                title
                _system {
                    attachments {
                        default {
                            path {
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default HomePage;
