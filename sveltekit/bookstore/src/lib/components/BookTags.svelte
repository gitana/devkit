<script>
    export let book;
</script>

<template>
    <h3>Tags</h3>
    <div>
        {#each book.tags as tag}
            <h4 key={tag}>
                <span class="label label-default">
                    <p>{tag}</p>
                </span>
            </h4>
        {/each}
    </div>
</template>

<style>
    h4 {
        display: inline-block;
    }

    p {
        color: white;
    }
</style>
