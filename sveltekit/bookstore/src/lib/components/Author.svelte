<script>
    export let author;

    let authorLink = `author/${author.slug}`;
</script>

<div class="item item-author-block author" style={{"textAlign": "center"}} data-cms-id={author._doc}>
    <a href={authorLink}>
        <div class="author-dp">
            <img src={author.defaultAttachmentUrl} alt={author.title} />
        </div>
    </a>
    <div class="author-details">
        <h3 class="author-name">
            <a href={authorLink}>
                {author.title}
            </a>
        </h3>
    </div>
</div>

<style>
</style>
