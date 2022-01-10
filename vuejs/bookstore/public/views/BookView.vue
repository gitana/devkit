<template>
    <div class="book-detail page">
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="book-cover book detail-book-cover">
                            <img v-bind:src="book.imageUrl" class="img-responsive" v-bind:alt="book.title">
                            <div class="fade"></div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="book-detail-header">
                            <h2 class="book-title">{{book.title}}</h2>
                            <p class="book-author">By <span class="book-author-name">{{book.authorTitle}}</span></p>
                            <div class="star-rating">
                                <!-- <i class="fa fa-star {{#lte 1 book.rating}}color{{/lte}}"></i>
                                <i class="fa fa-star {{#lte 2 book.rating}}color{{/lte}}"></i>
                                <i class="fa fa-star {{#lte 3 book.rating}}color{{/lte}}"></i>
                                <i class="fa fa-star {{#lte 4 book.rating}}color{{/lte}}"></i>
                                <i class="fa fa-star {{#lte 5 book.rating}}color{{/lte}}"></i> -->
                            </div>
                        </div>

                        <div class="book-detail-body">

                            <div class="detail-cart-button row clearfix">
                                <div class="pull-right col-md-6 col-sm-7 col-xs-12">
                                    <div class="row product-actions">

                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="product-description">
                                <h3>Quick Overview</h3>
                                <p>{{book.description}}</p>


                                <template v-if="book.tags">
                                <h3>Tags</h3>
                                <!-- <p> -->
                                    <template v-for="tag in book.tags">
                                    <h4 style="display:inline-block" v-bind:key="tag">
                                        <span class="label label-default">
                                            <router-link tag="a" v-bind:to="'/search?tag=' + tag" style="color:white">{{tag}}</router-link>
                                        </span>
                                    </h4>
                                    </template>
                                <!-- </p> -->
                                </template>


                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-holder clearfix">
                    <div class="book-additional-details">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs book-detail-tab">
                            <li class="active" role="presentation"><a href="#more" data-toggle="tab">More About This Book</a></li>
                            <li role="presentation"><a href="#download" data-toggle="tab">Download</a></li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="more" role="tabpanel">
                                <p>{{book.summary}}</p>
                            </div>

                            <div class="tab-pane" id="download" role="tabpanel">
                                <h3>Download</h3>
                                <p>Download this book - <a v-bind:href="book.pdfUrl" target="_blank">PDF</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- recommendations -->
        <BookList v-if="loaded" title="Recommendations" description="If you enjoy this book, we also recommend..." v-bind:books="book.recommendations" />

    </div>
</template>

<script>
import axios from 'axios';
import BookList from "../components/BookList";

export default {
    components: {
        BookList
    },

    data() {
        return {
            book: {},
            loaded: false
        }
    },

    created() {
        this.fetchBook(this.$route.params.id);
    },

    methods: {
        fetchBook(bookId) {
            return axios.get('/api/books/' + bookId)
                .then(response => {
                    this.book = response.data;
                    this.loaded = true;
                });
        }
    }
}
</script>
