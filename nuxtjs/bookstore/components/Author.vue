<template>
    <div class="item item-author-block author" style="text-align: center" :data-cms-id="author._doc">
        <a :href="authorLink">
            <div class="author-dp">
                <img v-bind:src="author.defaultAttachmentUrl" v-bind:alt="author.title">
            </div>
        </a>
        <div class="author-details">
            <h3 class="author-name">
                <a :href="authorLink">{{author.title}}</a>
            </h3>
            <blockquote class="author-testimonial">{{author.testimonial}}</blockquote>
            <a :href="authorLink" class="btn btn-primary btn-view-books">View Author</a>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            authorLink: "/author/" + this.author.slug
        };
    }
}
</script>
