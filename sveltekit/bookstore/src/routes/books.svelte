<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const res = await fetch('/api/books?limit=-1', { method: 'POST'}).then(res => res.json());

		return {
			props: {
				books: res.books
			}
		}
	};
</script>

<script>
    import BooksContainer from '$lib/components/BooksContainer.svelte';
	export let books;

</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

<section>
    <BooksContainer
        books={books}
        title="Books"
        subtitle="Choose from our fine selection of books" />
</section>>

<style>
</style>
