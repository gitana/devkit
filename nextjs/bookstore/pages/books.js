import React from "react";
import Layout from '../components/Layout';
import BooksContainer from '../components/BooksContainer';
import { getCurrentBranch } from '../lib/cloudcms';

const BooksPage = ({ books }) => {
    return (
        <Layout title="All Books">
            <BooksContainer
                books={books}
                title="Books"
                subtitle="Choose from our fine selection of books" />
        </Layout>
    );
}

export async function getStaticProps(context)
{
    const branch = await getCurrentBranch(context);
    let books = (await branch.queryNodes({ _type: "store:book" }, { limit: -1 })).rows;

    return {
        props: {
            books,
        }
    }
}

export default BooksPage;
