<script>
    import Book from './Book.svelte';

    export let books;
    export let title;
    export let subtitle;

    const firstFourBooks = books.slice(0, 4);
</script>

<div class="container">
    <div class="wow fadeInUp">
        <div class="module block-new-books module-block">
            <div class="module-heading">
                <h2 class="module-title">{title}</h2>
                <p class="module-subtitle">{subtitle}</p>
            </div>
            <div class="module-body">
                <div class="books">
                    <div class="row">
                        {#each firstFourBooks as book}
                            <div class="col-md-3" key={book._doc}>
                                <Book book={book} />
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<style>
</style>
