<template>
    <div class="item item-author-block author" style="text-align: center">
        <router-link to="/search">
            <div class="author-dp">
                <img v-bind:src="author.imageUrl"  v-bind:alt="author.title">
            </div>
        </router-link>        
        <div class="author-details">
            <h3 class="author-name">
                <router-link tag="a" to="/search">{{author.title}}</router-link>
            </h3>
            <blockquote class="author-testimonial">{{author.testimonial}}</blockquote>
            <router-link tag="a" to="/search" class="btn btn-primary btn-view-books">View books</router-link>
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
    }
}
</script>
