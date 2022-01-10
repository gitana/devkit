<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const res = await fetch('/api/tags?limit=-1', { method: 'POST'}).then(res => res.json());
		return {
			props: {
				tags: res.tags
			}
		}
	};
</script>

<script>
    import TagsContainer from '$lib/components/TagsContainer.svelte';
	export let tags;

</script>

<svelte:head>
	<title>Tags</title>
</svelte:head>

<section>
    <TagsContainer
        tags={tags}
        title="Tags"
    />
</section>

<style>
</style>
