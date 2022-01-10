<script>
    export let book;

</script>

<div class="book" data-cms-id={book._doc}>
    <div class="book-cover">
        <div class="book-inner">
            <a href={`/book/${book.slug}`}>
                <img src={book.defaultAttachmentUrl} alt={book.title} width="255" height="261" />
            </a>
            <div class="fade"></div>
        </div>
    </div>
    <div class="book-details">
        <h3 class="book-title">
            <a href={`/book/${book.slug}`}>
                {book.title}
            </a>
        </h3>
        {#if book.author}
            <p class="book-author">{book.author.title}</p>
        {/if}
    </div>
</div>

<style>
</style>
