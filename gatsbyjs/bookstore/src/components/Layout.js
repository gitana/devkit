import React from "react";
import Helmet from 'react-helmet';

import Header from './Header';
import { withPrefix } from "gatsby";


const Layout = ({children}) => (
  <div className="wrapper">
    <Helmet>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>

      <title>Quick Start Books</title>

      <link rel="stylesheet" href={withPrefix("css/bootstrap.min.css")}/>

      <link rel="stylesheet" href={withPrefix("css/main.css")} />
      <link rel="stylesheet" href={withPrefix("css/green.css")} />
      <link rel="stylesheet" href={withPrefix("css/bootstrap-select.min.css")} />
      <link rel="stylesheet" href={withPrefix("css/font-awesome.min.css")} />
      <link rel="stylesheet" href={withPrefix("css/owl.carousel.css")} />
      <link rel="stylesheet" href={withPrefix("css/owl.transitions.css")} />
      <link rel="stylesheet" href={withPrefix("css/animate.min.css")} />
      <link rel="stylesheet" href={withPrefix("css/jquery-ui.min.css")} />

      <link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500italic,500,700,700italic,900,900italic' type='text/css' />

      <link rel="stylesheet" href={withPrefix("css/elegant-fonts.css")} />

      <link rel="shortcut icon" href={withPrefix("images/favicon.ico")} />

      <link rel="stylesheet" href={withPrefix("/css/custom.css")} />

      <script src={withPrefix("js/jquery-1.12.0.min.js")}></script>
      <script type="text/javascript" src={withPrefix("js/bootstrap.min.js")}></script>
      <script src={withPrefix("js/bootstrap-hover-dropdown.min.js")}></script>
      <script src={withPrefix("js/echo.min.js")}></script>
      <script src={withPrefix("js/jquery.easing.min.js")}></script>
      <script src={withPrefix("js/wow.min.js")}></script>
      <script src={withPrefix("js/jquery-ui.min.js")}></script>
      <script src={withPrefix("js/scripts.js")}></script>
    </Helmet>
    <Header />    
    {children}
  </div>
)

export default Layout
