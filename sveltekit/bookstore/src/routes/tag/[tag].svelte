<script context="module">

	export const load = async ({ params, fetch }) => {
        const tagStr = params.tag;
        const tagQuery = JSON.stringify({ 'tag': tagStr });
        const res = await fetch(`/api/tags?limit=1`, { method: 'POST', body: tagQuery, headers: { 'content-type': 'application/json' } })
                            .then(r => r.json());

		const tag = res.tags[0];
        const booksQuery = JSON.stringify({ 'tags': tagStr });
        const results = (await fetch(`/api/books?limit=-1`, { method: 'POST',  body: booksQuery, headers: { 'content-type': 'application/json' } })
                                    .then(r => r.json())).books

		return {
			props: {
				tag,
                results
			}
		}
	};
</script>

<script>
    import BooksContainer from '$lib/components/BooksContainer.svelte';
	export let tag;
    export let results;
</script>

<svelte:head>
	<title>{tag.title}}</title>
</svelte:head>

<section>
    <div class="tag-detail page" data-cms-id={tag._doc}>
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="tag-detail-header">
                            <h2 class="tag-title">{tag.title}</h2>
                        </div>
                    </div>

                    <div class="col-sm-8">

                    <BooksContainer title="Tagged Results" description="The following books and authors have this tag" books={results} />

                    </div>
                </div>

            </div>
        </div>

    </div>
</section>>

<style>
</style>
