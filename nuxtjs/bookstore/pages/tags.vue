<template>
     <div class="content">
        <div class="tags page">

          <TagList title="Tags" :tags="tags" />

        </div>
    </div>
</template>

<script>
import TagList from "../components/TagList";

export default {
    components: {
        TagList
    },

    async asyncData({ $branch }) {

        let tags = (await $branch.query({ _type: "n:tag" }, { limit: 1000 })).rows;

        return {
            tags: tags
        };
    }
}
</script>
