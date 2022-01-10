import React from "react";
import Layout from '../components/Layout';
import TagsContainer from '../components/TagsContainer';
import { getCurrentBranch } from '../lib/cloudcms';

const TagsPage = (props) => {
    const title = props.title || "Tags";
    return (
        <Layout title={title}>
            <TagsContainer title={title} tags={props.tags} />
        </Layout>
    );
}

export async function getStaticProps(context)
{
    const branch = await getCurrentBranch(context);
    let tags = (await branch.queryNodes({ _type: "n:tag" }, { limit: 1000 })).rows;

    return {
        props: {
            tags,
        }
    }
}

export default TagsPage;
