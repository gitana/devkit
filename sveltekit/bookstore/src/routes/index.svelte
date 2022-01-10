<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		
		const books = (await fetch('/api/books?limit=4', { method: 'POST' }).then(res => res.json())).books;
		const authors = (await fetch('/api/authors?limit=4', { method: 'POST'}).then(res => res.json())).authors;

		return {
			props: {
				books,
				authors
			}
		}
	};
</script>

<script>
	import Slider from '$lib/components/Slider.svelte';
	import BooksContainer from '$lib/components/BooksContainer.svelte';
	import AuthorsContainer from '$lib/components/AuthorsContainer.svelte';

	export let books;
	export let authors;
</script>

<svelte:head>
	<title>Quick Start Books</title>
</svelte:head>

<section>
	<Slider book={books[0]} />
	<BooksContainer
		books={books}
		title="Featured Books"
		subtitle="Do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
	<AuthorsContainer title="Authors" authors={authors} />
</section>

<style>
</style>
