<template>
    <div class="container">
        <div class="wow fadeInUp">
            <div class="module block-featured-tag module-block">
                <div class="module-heading">
                    <h2 class="module-title">Tags</h2>
                </div>
                <div class="module-body" id="featured-tag">
                    <div class="row">
                        <div class="tags">
                            <div class="col-md-3" v-for="tag in tags" v-bind:key="tag.tag">
                                <Tag v-bind:tag="tag" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from "./Tag";

export default {
    components: {
        Tag
    },

    props: {
        tags: {
            type: Array
        }
    }
}
</script>

