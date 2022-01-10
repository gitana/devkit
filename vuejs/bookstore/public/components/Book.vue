<template>
    <div class="book" style="text-align: center">
            <div v-if="sale" class="sale-ribbon"><div class="sale-ribbon-content">sale off</div></div>
        <div class="book-cover">
            <div class="book-inner">
                <a v-bind:href="bookLink">
                    <img v-bind:src="book.imageUrl" v-bind:alt="book.title" v-bind:width="width" v-bind:height="height">
                </a>
                <div class="fade"></div>
            </div>
        </div>
        <div class="book-details">
            <router-link tag="h3" class="book-title" v-bind:to="bookLink"><a>{{book.title}}</a></router-link>
            <p class="book-author">{{book.authorTitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        },
        width: {
            type: String,
        },
        height: {
            type: String,
        },
        sale: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            bookLink: "/book/" + this.book._doc
        };
    }
};
</script>
