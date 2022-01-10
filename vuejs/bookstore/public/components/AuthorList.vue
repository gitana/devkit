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
                            <div class="col-md-3" v-for="author in authors" v-bind:key="author._doc">
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
import axios from 'axios';
import Author from "./Author";

export default {
    components: {
        Author
    },

    data() {
        return {
            authors: []
        };
    },

    created() {
        this.fetchAuthors();
    },

    methods: {
        fetchAuthors() {
            return axios.get('/api/authors')
                .then(response => {
                    this.authors = Object.values(response.data);
                    this.authors = this.authors.slice(0, Math.min(4, this.authors.length));
                });
        }
    }
}
</script>

