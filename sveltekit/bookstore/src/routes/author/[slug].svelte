<script context="module">

	export const load = async ({ page, fetch }) => {
        const slug = page.params.slug;
        const query = JSON.stringify({ 'slug': slug });
        const res = await fetch(`/api/authors?limit=1`, { method: 'POST', body: query, headers: { 'content-type': 'application/json' } })
                            .then(res => res.json());

		const author = res.authors[0];

		return {
			props: {
				author
			}
		}
	};
</script>

<script>
	export let author;
</script>

<svelte:head>
	<title>{author.title}}</title>
</svelte:head>

<section>
    <div class="author-detail page" data-cms-id={author._doc}>
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="author-cover author detail-author-cover">
                            <img src={author.defaultAttachmentUrl} class="img-responsive" alt={author.title} />
                            <div class="fade"></div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="author-detail-header">
                            <h2 class="author-title">{author.title}</h2>
                            <p class="author">By <span class="author-name">{author.title}</span></p>
                            <div class="star-rating">
                            </div>
                        </div>

                        <div class="author-detail-body">

                            <div class="detail-cart-button row clearfix">
                                <div class="pull-right col-md-6 col-sm-7 col-xs-12">
                                    <div class="row product-actions">

                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="product-description">
                                <h3>Quick Overview</h3>
                                <p>{author.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>>

<style>
</style>
