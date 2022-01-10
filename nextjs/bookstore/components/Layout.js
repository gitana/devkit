import React from "react";
import Head from 'next/head'
import Script from 'next/script';

import Header from './Header';


const Layout = ({title, children}) => (
  <div className="wrapper">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>

      <title>{title}</title>
      <link rel="stylesheet" href={"/css/bootstrap.min.css"}/>

      <link rel="stylesheet" href={"/css/main.css"} />
      <link rel="stylesheet" href={"/css/green.css"} />
      <link rel="stylesheet" href={"/css/bootstrap-select.min.css"} />
      <link rel="stylesheet" href={"/css/font-awesome.min.css"} />
      <link rel="stylesheet" href={"/css/owl.carousel.css"} />
      <link rel="stylesheet" href={"/css/owl.transitions.css"} />
      <link rel="stylesheet" href={"/css/animate.min.css"} />
      <link rel="stylesheet" href={"/css/jquery-ui.min.css"} />

      <link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500italic,500,700,700italic,900,900italic' type='text/css' />

      <link rel="stylesheet" href={"/css/elegant-fonts.css"} />

      <link rel="shortcut icon" href={"/images/favicon.ico"} />

      <link rel="stylesheet" href={"/css/custom.css"} />
    </Head>
    <Script type="text/javascript" src={"/js/jquery-1.12.0.min.js"} strategy="beforeInteractive"></Script>
    <Script type="text/javascript" src={"/js/bootstrap.min.js"}></Script>
    <Script src={"/js/bootstrap-hover-dropdown.min.js"}></Script>
    <Script src={"/js/echo.min.js"}></Script>
    <Script src={"/js/jquery.easing.min.js"}></Script>
    <Script src={"/js/wow.min.js"}></Script>
    <Script src={"/js/jquery-ui.min.js"}></Script>
    <Script src={"/js/scripts.js"}></Script>
    <Header /> 
    <div className="page-container" data-cms-pagetitle={title}>
      {children}
    </div>
  </div>
)

export default Layout
