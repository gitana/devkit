import React from "react";
import Layout from '../components/Layout';
import AuthorsContainer from '../components/AuthorsContainer';
import { getCurrentBranch } from '../lib/cloudcms';

const AuthorsPage = ({ authors }) => {
    return (
        <Layout title="All Books">
            <AuthorsContainer
                authors={authors}
                title="Authors"
                subtitle="Our store features books by several reputable authors:" />
        </Layout>
    );
}

export async function getStaticProps(context)
{
    const branch = await getCurrentBranch(context);
    let authors = (await branch.queryNodes({ _type: "store:author" }, { limit: -1 })).rows;

    return {
        props: {
            authors,
        }
    }
}

export default AuthorsPage;
