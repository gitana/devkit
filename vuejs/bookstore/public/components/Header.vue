<template>
    <header class="header">
        <!-- top navbar -->
        <nav class="navbar navbar-top-bar navbar-static-top">
            <div class="container">
                <ul class="navbar-nav nav">
                    <router-link tag="li" to="/"><a>Home</a></router-link>
                    <li class="disabled"><a href="index.html">About Us</a></li>
                </ul>
                <ul class="navbar-nav nav navbar-right">
                    <li class="disabled"><a href="#">Login</a></li>
                    <li>
                        <div class="navbar-form">
                            <div class="form-group">
                                <input v-model="searchQuery" v-on:keyup.enter="search" type="text" class="form-control" placeholder="Search">
                            </div>
                            <a class="btn btn-default btn-search" v-on:click.stop="search">Search</a>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>

        <!-- main navigation -->
        <div class="yamm navbar navbar-default navbar-default-book animate-dropdown" role="navigation">
            <div class="container">
                <div class="header-mast">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#KYbook-navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <router-link tag="a" class="navbar-brand" to="/">
                            <img class="logo" src="../images/book-flat.png">
                            <span class="title">Quick Start Books</span>
                        </router-link>
                    </div>
                    <!--
                    <div class="collapse navbar-collapse" id="KYbook-navbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li class="active"><a href="index.html">Books</a></li>
                            <li class="disabled"><a href="index.html">Audiobooks</a></li>
                            <li class="disabled"><a href="index.html">Magazines</a></li>
                        </ul>
                    </div>
                    -->
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: ""
        }
    },

    methods: {
        search() {
            this.$router.push({
                path: "/search",
                query   : {
                    text: this.searchQuery
                }
            });
        }
    }
}
</script>
