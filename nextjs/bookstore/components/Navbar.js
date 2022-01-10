import React from "react";
import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-top-bar navbar-static-top">
        <div className="container">
            <ul className="navbar-nav nav">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/books">Books</Link>
                </li>
                <li>
                    <Link href="/authors">Authors</Link>
                </li>
                <li>
                    <Link href="/tags">Tags</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar
