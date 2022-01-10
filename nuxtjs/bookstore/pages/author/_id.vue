<template>
    <div class="author-detail page" :data-cms-id="author._doc">
        <div class="container">
            <div class="primary-block clearfix">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="author-cover author detail-author-cover">
                            <img :src="author.defaultAttachmentUrl" class="img-responsive" :alt="author.title">
                            <div class="fade"></div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="author-detail-header">
                            <h2 class="author-title">{{author.title}}</h2>
                            <p class="author">By <span class="author-name">{{author.title}}</span></p>
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
                                <p>{{author.description}}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="tab-holder clearfix">
                    <div class="author-additional-details">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs author-detail-tab">
                            <li class="active" role="presentation"><a href="#more" data-toggle="tab">More About This Author</a></li>
                            <li role="presentation"><a href="#download" data-toggle="tab">Download</a></li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="more" role="tabpanel">
                                <p>{{author.summary}}</p>
                            </div>

                            <div class="tab-pane" id="download" role="tabpanel">
                                <h3>Download</h3>
                                <p>Download this author - <a :href="author.pdfURL" target="_blank">PDF</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            author: {},
            loaded: false
        }
    },

    async asyncData(context) {

        const authorSlug = context.params.id;
        const $branch = context.$branch;

        // find author instance
        let author = (await $branch.queryOne({ "_type": "store:author", "slug": authorSlug }, { limit: 1 }));

        return {
            author: author,
            loaded: true
        };
    }

}
</script>
