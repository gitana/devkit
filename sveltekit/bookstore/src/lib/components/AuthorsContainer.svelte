<script>
    import Author from './Author.svelte';
    export let authors;
    export let title;
    export let subtitle;

    const firstFourAuthors = authors.slice(0, 4);
</script>

<div class="featured-item-block">
    <div class="container">
        <div class="wow fadeInUp">
            <div class="module block-featured-author module-block">
                <div class="module-heading">
                    <h2 class="module-title">{title}</h2>
                    <p class="module-subtitle">{subtitle}</p>
                </div>
                <div class="module-body" id="featured-author">
                    <div class="authors">
                        <div class="row">
                            {#each firstFourAuthors as author}
                                <div class="col-md-3" key={author._doc}>
                                    <Author author={author} />
                                </div>
                            {/each}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
