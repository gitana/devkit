<template>
    <div class="item item-tag-block tag" style="text-align: center" :data-cms-id="tag._doc">
        <div class="tag-details">
            <h3 class="tag-name">
                <a :href="tagLink">{{tag.title}}</a>
            </h3>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        tag: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            tagLink: "/tag/" + this.tag.tag
        };
    }
}
</script>
