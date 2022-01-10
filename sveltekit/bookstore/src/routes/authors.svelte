<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const res = await fetch('/api/authors?limit=-1', { method: 'POST', body: null}).then(res => res.json());

		return {
			props: {
				authors: res.authors
			}
		}
	};
</script>

<script>
    import AuthorsContainer from '$lib/components/AuthorsContainer.svelte';
	export let authors;

</script>

<svelte:head>
	<title>Authors</title>
</svelte:head>

<section>
    <AuthorsContainer
        authors={authors}
        title="Authors"
        subtitle="Our store features books by several reputable authors:" />
</section>>

<style>
</style>
