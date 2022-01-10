<script>
    export let book;
</script>

<div class="slider">
    <div id="hero">
        <div id="owl-main" class="owl-carousel1 owl-theme">
            <div class="item">
                <div class="container">
                    <div class="content caption">
                        <div class="row">
                            <div class="col-sm-5 col-sm-push-7">
                                <div class="book-in-shelf">
                                    <div class="book-shelf">
                                        <div class="book-cover slider-book-cover">
                                            <img class="img-responsive" alt="" src={book.defaultAttachmentUrl} width="258" height="351" />
                                            <div class="fade"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-7 col-sm-pull-5">
                                <div class="clearfix slider-caption">
                                    <div class="slider-caption-heading">
                                        <h1 class="slider-caption-title fadeInDown-1">{book.title}</h1>
                                        <p class="slider-caption-subtitle fadeInDown-2 hidden-xs">{book.description}</p>
                                    </div>
                                    <div class="clearfix slider-price fadeInDown-3 hidden-xs">
                                        <a href={`/book/${book.slug}`}>
                                            <span class="btn btn-secondary btn-price">View Book</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .slider {
        height: 600;
        background-color: "#629c49";
    }
</style>
