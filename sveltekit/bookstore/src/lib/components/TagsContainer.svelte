<script>
    import Tag from './Tag.svelte';
    export let tags;
</script>

<div class="container">
    <div class="wow fadeInUp">
        <div class="module block-featured-tag module-block">
            <div class="module-heading">
                <h2 class="module-title">Tags</h2>
            </div>
            <div class="module-body" id="featured-tag">
                <div class="row">
                    <div class="tags">
                        {#each tags as tag}
                            <div class="col-md-3" key={tag.tag}>
                                <Tag tag={tag} />
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
