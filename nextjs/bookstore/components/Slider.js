import React from "react";
import Link from "next/link";

const style = {
    height: 600,
    backgroundColor: "#629c49"
}

const Slider = ({ book }) => (
    <div className="slider" style={style}>
        <div id="hero">
            <div id="owl-main" className="owl-carousel1 owl-theme">
                <div className="item">
                    <div className="container">
                        <div className="content caption">
                            <div className="row">
                                <div className="col-sm-5 col-sm-push-7">
                                    <div className="book-in-shelf">
                                        <div className="book-shelf">
                                            <div className="book-cover slider-book-cover">
                                                <img className="img-responsive" alt="" src={book.defaultAttachmentUrl} width="258" height="351" />
                                                <div className="fade"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-7 col-sm-pull-5">
                                    <div className="clearfix slider-caption">
                                        <div className="slider-caption-heading">
                                            <h1 className="slider-caption-title fadeInDown-1">{book.title}</h1>
                                            <p className="slider-caption-subtitle fadeInDown-2 hidden-xs">{book.description}</p>
                                        </div>
                                        <div className="clearfix slider-price fadeInDown-3 hidden-xs">
                                            <Link href={`/book/${book.slug}`}>
                                                <a className="btn btn-secondary btn-price">View Book</a>
                                            </Link>
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
)

export default Slider