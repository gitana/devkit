import React from "react";
import { withPrefix, Link } from "gatsby";

const Navmain = () => (
    <div className="yamm navbar navbar-default navbar-default-book animate-dropdown" role="navigation">
        <div className="container">
            <div className="header-mast">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#KYbook-navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img className="logo" src={withPrefix("images/book-flat.png")} alt="logo" />
                        <span className="title">Quick Start Books</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Navmain