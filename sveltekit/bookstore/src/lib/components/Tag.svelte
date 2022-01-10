<script>
    export let tag;
    const tagLink = `/tag/${tag.tag}`;
</script>

<div class="item item-tag-block tag" style={{textAlign: "center"}} data-cms-id={tag._doc}>
    <div class="tag-details">
        <h3 class="tag-name">
            <a href={tagLink}>
                {tag.title}
            </a>
        </h3>
    </div>
</div>

<style>

</style>
