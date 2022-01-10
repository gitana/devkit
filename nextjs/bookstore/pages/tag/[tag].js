import React from "react";
import Layout from '../../components/Layout';
import BooksContainer from '../../components/BooksContainer';
import { getCurrentBranch } from '../../lib/cloudcms';

const TagsPage = ({tag, results}) => {

    return (
        <Layout title={tag.title}>
            <div className="tag-detail page" data-cms-id={tag._doc}>
                <div className="container">
                    <div className="primary-block clearfix">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="tag-detail-header">
                                    <h2 className="tag-title">{tag.title}</h2>
                                </div>
                            </div>

                            <div className="col-sm-8">

                            <BooksContainer title="Tagged Results" description="The following books and authors have this tag" books={results} />

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    );
}

export async function getStaticProps(context)
{
    let tagSlug = context.params.tag;
    const branch = await getCurrentBranch(context);
    let tag = await branch.queryOneNode({ _type: "n:tag", tag: tagSlug });

    let results = (await branch.queryNodes({ "_type": { "$in": ["store:book"] }, "tags": tagSlug })).rows;

    return {
        props: {
            tag,
            results
        }
    }
}

export async function getStaticPaths()
{
    const branch = await getCurrentBranch(null);
    const tags = (await branch.queryNodes({ _type: "n:tag" }, { limit: 1000 })).rows;

    let paths = tags.map(tag => ({ params: { tag: tag.tag }}));
    return {
        paths,
        fallback: false
    }
}

export default TagsPage;
