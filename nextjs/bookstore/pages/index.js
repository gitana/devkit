import React from "react";
import { getCurrentBranch } from '../lib/cloudcms';

import Layout from '../components/Layout';
import Slider from '../components/Slider';
import BooksContainer from '../components/BooksContainer';
import AuthorsContainer from "../components/AuthorsContainer";

const HomePage = ({ books, authors }) => {
    return (
        <Layout title="Quick Start Books">
            <Slider book={books[0]} />
            <BooksContainer
                books={books}
                title="Featured Books"
                subtitle="Do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
            <AuthorsContainer title="Authors" authors={authors} />
        </Layout>
    );
}

export async function getStaticProps(context)
{
    const branch = await getCurrentBranch(context);
    let books = (await branch.queryNodes({ _type: "store:book" }, { limit: 4 })).rows;
    let authors = (await branch.queryNodes({ _type: "store:author" }, { limit: 4 })).rows;

    return {
        props: {
            books: books,
            authors: authors
        }
    }
}

export default HomePage;
