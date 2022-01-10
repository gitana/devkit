<template>
     <div class="content">
        <div class="home page">

            <div class="slider">
                <div id="hero">
                    <div id="owl-main" class="owl-carousel1 owl-theme">
                        <HeroBook />
                    </div>

                </div>

            </div>

            <BookList title="New Books" description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua" />

            <!-- featured authors -->
            <div class="featured-item-block">
                <AuthorList />
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
    }
}
</script>
