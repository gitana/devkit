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
                            <div class="col-md-3" v-for="book in books" :key="book.slug">
                                <Book v-bind:book="book" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Book from "./Book";

export default {
    components: {
        Book
    },

    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        books: {
            type: Array
        }
    }
};
</script>
