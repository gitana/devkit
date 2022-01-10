<template>
    <div class="book" style="text-align: center" :data-cms-id="book._doc">
        <div v-if="sale" class="sale-ribbon"><div class="sale-ribbon-content">sale off</div></div>
        <div class="book-cover">
            <div class="book-inner">
                <a v-bind:href="bookLink">
                    <img v-bind:src="book.defaultAttachmentUrl" v-bind:alt="book.title" v-bind:width="width" v-bind:height="height">
                </a>
                <div class="fade"></div>
            </div>
        </div>
        <div class="book-details">
            <h3 class="book-title"><a :href="bookLink">{{book.title}}</a></h3>
            <p v-if="book.author" class="book-author">{{book.author.title}}</p>
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
            bookLink: "/book/" + this.book.slug
        };
    }
};
</script>
