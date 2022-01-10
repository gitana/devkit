<template>
     <div class="content">
        <div class="home page">
            <div class="slider">
                <div id="hero">
                    <div id="owl-main" class="owl-carousel1 owl-theme">
                        <HeroBook :book="heroBook" />
                    </div>
                </div>

            </div>

            <BookList title="New Books" description="Check out our new arrivals!" :books="books" />

            <!-- featured authors -->
            <div class="featured-item-block">
                <AuthorList :authors="authors" />
            </div>
        </div>
    </div>
</template>

<script>
import HeroBook from "../components/HeroBook";
import BookList from "../components/BookList";
import AuthorList from "../components/AuthorList";

export default {
    components: {
        HeroBook,
        BookList,
        AuthorList
    },

    async asyncData({ $branch }) {

        let books = (await $branch.query({ _type: "store:book" }, { limit: 4 })).rows;
        let authors = (await $branch.query({ _type: "store:author" }, { limit: 4 })).rows;

        let link = books[0].defaultAttachmentUrl;

        return {
            heroBook: books[0],
            books: books,
            authors: authors,
            link: link
        };
    }
}
</script>
