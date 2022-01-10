<template>
    <div class="item">
        <div class="container">
            <div class="content caption">
                <div class="row">
                    <div class="col-sm-5 col-sm-push-7">
                        <div class="book-in-shelf">
                            <div class="book-shelf">
                                <div class="book-cover slider-book-cover">
                                    <img class="img-responsive" alt="" v-bind:src="book.imageUrl" width="258" height="351">
                                    <div class="fade"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-7 col-sm-pull-5">
                        <div class="clearfix slider-caption">
                            <div class="slider-caption-heading">
                                <h1 class="slider-caption-title fadeInDown-1">{{book.title}}</h1>
                                <p class="slider-caption-subtitle fadeInDown-2 hidden-xs">{{book.description}}</p>
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

export default {
    data() {
        return {
            book: {}
        };
    },

    created() {
        this.fetchBook();
    },

    methods: {
        fetchBook() {
            return axios.get('/api/books')
                .then(response => {
                    this.book = Object.values(response.data)[0];
                });
        }
    }
}
</script>
