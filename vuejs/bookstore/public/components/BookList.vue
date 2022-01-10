<template>
    <div class="container">
        <div class="wow fadeInUp">
            <div class="module block-new-books module-block">
                <div class="module-heading">
                    <h2 class="module-title">{{title}}</h2>
                    <p class="module-subtitle">{{description}}</p>
                </div>

                <div class="module-body">
                    <div class="books">
                        <div class="row">
                            <div class="col-md-3" v-for="book in booksList" :key="book._doc">
                                <Book v-bind:book="book" width="255" height="261" />
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
import Book from "./Book";

export default {
    components: {
        Book
    },

    props: {
        books: {
            type: Array,
            required: false
        },
        title: {
            type: String
        },
        description: {
            type: String
        }
    },

    data() {
        return {
            booksList: this.books
        }
    },

    created() {
        if (!this.booksList)
        {
            this.fetchBooks();
        }
    },

    methods: {
        fetchBooks() {
            return axios.get('/api/books')
                .then(response => {
                    this.booksList = Object.values(response.data);
                    this.booksList = this.booksList.slice(0, Math.min(4, this.booksList.length));
                });
        }
    }
};
</script>
