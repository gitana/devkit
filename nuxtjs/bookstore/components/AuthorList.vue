<template>
    <div class="container">
        <div class="wow fadeInUp">
            <div class="module block-featured-author module-block">
                <div class="module-heading">
                    <h2 class="module-title">Featured Authors</h2>
                </div>
                <div class="module-body" id="featured-author">
                    <div class="row">
                        <div class="authors">
                            <div class="col-md-3" v-for="author in authors" v-bind:key="author.slug">
                                <Author v-bind:author="author" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Author from "./Author";

export default {
    components: {
        Author
    },

    props: {
        authors: {
            type: Array
        }
    }
}
</script>

