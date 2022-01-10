<template>
     <div class="content">
        <div class="books page">

          <BookList title="Books" description="Choose from our fine selection of books" :books="books" />

        </div>
    </div>
</template>

<script>
import BookList from "../components/BookList";

export default {
    components: {
        BookList
    },

    async asyncData({ $branch }) {

        let books = (await $branch.query({ _type: "store:book" }, { limit: 1000 })).rows;

        return {
            books: books
        };
    }
}
</script>
