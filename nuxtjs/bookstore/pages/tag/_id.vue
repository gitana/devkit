<template>
    <div class="tag-detail page" :data-cms-id="tag._doc">
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="tag-detail-header">
                            <h2 class="tag-title">{{tag.title}}</h2>
                        </div>
                    </div>

                    <div class="col-sm-8">

                      <BookList title="Tagged Results" description="The following books and authors have this tag" :books="results" />

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import BookList from "../../components/BookList";

export default {
    components: {
        BookList
    },

    data() {
        return {
            tag: {},
            results: [],
            tagLink: "#",
            loaded: false
        }
    },

    async asyncData(context) {

        const tagSlug = context.params.id;
        const $branch = context.$branch;

        // find tag instance
        let tag = (await $branch.queryOne({ "_type": "n:tag", "tag": tagSlug }, { limit: 1 }));

        // find tagged documents
        let results = (await $branch.query({ "_type": { "$in": ["store:book", "store:author"] }, "tags": tagSlug }, { limit: 100 })).rows;

        return {
            tag: tag,
            results: results,
            tagLink: "/tag/" + tag.tag,
            loaded: true
        };
    }

}
</script>
