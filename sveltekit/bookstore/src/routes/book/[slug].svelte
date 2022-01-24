<script context="module">
	export const load = async ({ params, fetch }) => {
        const slug = params.slug;
		const book = await fetch(`/api/book/${slug}`).then(res => res.json());

		return {
			props: {
				book
			}
		}
	};
</script>

<script>
    import BooksContainer from '$lib/components/BooksContainer.svelte';
    import BookTags from '$lib/components/BookTags.svelte';
	export let book;

</script>

<svelte:head>
	<title>{book.title}}</title>
</svelte:head>

<section>
    <div class="book-detail page" data-cms-id={book._doc}>
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="book-cover book detail-book-cover">
                            <img src={book.defaultAttachmentUrl} class="img-responsive" alt={book.title} />

                            <div class="fade"></div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="book-detail-header">
                            <h2 class="book-title">{book.title}</h2>
                            <p class="book-author">By <span class="book-author-name">{book.author.title}</span></p>
                        </div>

                        <div class="book-detail-body">

                            <div class="detail-cart-button row clearfix">
                                <div class="pull-left col-md-6 col-sm-5 col-xs-12">

                                </div>

                                <div class="pull-right col-md-6 col-sm-7 col-xs-12">
                                    <div class="row product-actions">

                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>

                            <div class="product-description">
                                <h3>Quick Overview</h3>
                                <p>{book.description}</p>
                                <BookTags book={book} />
                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-holder clearfix">
                    <div class="book-additional-details">
                        <ul class="nav nav-tabs book-detail-tab">
                            <li class="active" role="presentation">
                                <a href="#more" data-toggle="tab">More About This Book</a>
                            </li>
                            <li role="presentation">
                                <a href="#download" data-toggle="tab">Download</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active" id="more" role="tabpanel">
                                <p>{book.summary}</p>
                            </div>

                            <div class="tab-pane" id="download" role="tabpanel">
                                <h3>Download</h3>
                                <p>Download this book - <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">PDF</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BooksContainer
            books={book.recommendations}
            title="Recommendations"
            subtitle="If you enjoy this book, we also recommend..." />
    </div>
</section>>

<style>
</style>
