import React from "react";
import Link from "next/link";

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
                    <Link href="/">
                        <a className="navbar-brand">
                            <img className="logo" src={"/images/book-flat.png"} alt="logo" />
                            <span className="title">Quick Start Books</span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Navmain