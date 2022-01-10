<template>
    <div class="category page">
            <div class="container">
                <div class="page-header category-page-header">
                    <h2 class="page-title">Search</h2>
                    <p class="page-subtitle">Find the books you're looking for</p>
                </div>

                <div class="page-body">
                    <div class="row">
                        <!-- ========================================= CONTENT ========================================= -->
                        <div class="col-sm-8 col-sm-push-4">
                            <div class="category-toolbar">
                                <div class="row">
                                    <div class="col-md-3 col-sm-4">
                                        <ul id="myTab" class="nav nav-tabs grid-list-view-buttons" role="tablist">
                                            <li role="presentation" class="active"><a href="#grid" class="btn navbar-btn" role="tab" data-toggle="tab"><span class="glyphicon glyphicon-th active"></span></a></li>
                                            <li role="presentation"><a href="#list" class="btn navbar-btn" role="tab" data-toggle="tab"><span class="glyphicon glyphicon-th-list"></span></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div class="tab-content">
                                <div class="tab-pane active wow fadeInUp" id="grid" role="tabpanel">
                                    <div class="category-books books grid-view">
                                        <div class="row">
                                            
                                            <template v-for="book in books">
                                            <div v-bind:key="book._doc" class="col-md-4 col-sm-6">
                                                <Book v-bind:book="book" height="261" width="193" v-bind:sale="true" />
                                            </div>
                                            </template>

                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane wow fadeInUp featured-book-holder" id="list" role="tabpanel">

                                    <div class="featured-book" v-for="book in books" v-bind:key="book._doc">
                                        <div class="books clearfix">
                                            <div class="row">
                                                <div class="col-md-4 col-sm-5">
                                                    <div class="book">
                                                        <div class="hot-ribbon"><div class="hot-ribbon-content">hot</div></div>
                                                        <div class="book-cover">
                                                            <img class="img-responsive" alt="" width="193" height="261" v-bind:src="book.imageUrl">
                                                            <div class="fade"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-8 col-sm-7">
                                                    <div class="book-details book-details-list-view">
                                                        <router-link tag="h3" class="book-title" v-bind:to="'/book/' + book._doc"><a>{{book.title}}</a></router-link>
                                                        <p class="book-author">{{book.authorTitle}}</p>
                                                    </div>

                                                    <div class="featured-book-content">
                                                        <p class="hidden-sm hidden-md">{{book.description}}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <ul class="pagination book-pagination">
                                <li class="active"><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>5</a></li>
                            </ul>
                        </div>

                        <!-- ========================================= CONTENT :END ========================================= -->


                        <!-- sidebar -->
                        <div class="col-sm-4 col-sm-pull-8">
                            <aside class="sidebar">
                                <section class="module">
                                    <header class="module-header">
                                        <h4 class="module-book-category-title">Book Category</h4>
                                    </header>

                                    <div class="module-body category-module-body">
                                        <ul class="list-unstyled category-list">
                                            
                                            <li v-for="tag in tags" v-bind:key="tag._doc">
                                                <router-link tag="a" v-bind:to="'/search?tag=' + tag.tag">{{tag.title}}</router-link>
                                            </li>

                                        </ul>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";
import Book from "../components/Book";

export default {
    components: {
        Book,
    },

    data() {
        return {
            tags: [],
            books: []
        };
    },

    created() {
        this.fetchTags();
        this.search(this.$route.query.tag, this.$route.query.text);
    },

    methods: {
        search(tag, text) {
            if (tag)
            {
                axios.get("/api/books", {
                    params: {
                        tag: tag
                    }
                }).then(response => {
                    this.books = Object.values(response.data);
                });
            }
            else if (text)
            {
                axios.get("/api/search", {
                    params: {
                        text: text
                    }
                }).then(response => {
                    this.books = Object.values(response.data);
                });
            }
        },

        fetchTags() {
            axios.get("/api/tags")
                .then(response => {
                    this.tags = Object.values(response.data);
                });
        }
    }
}
</script>
