import React from 'react'
import Blog from './blog'
import "../style/index.css"
import { Helmet } from "react-helmet"
import favIco from './favicon.png'

export default () => {
return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta
      name="description"
      content="WishGee helps you to fulfill your wish. 
  Our Ginee(product experts) and online geeks will search the best 
  product for your requirement and get the best customised deal for you. 
  Confused with which laptop to buy? Or which phone has the best camera? Or a washing machine your wife would love?
  Share your product requirement with your best budget and let our experts find it for you with the best deals. "
    />
    <meta property="og:title" content="Make a Wish with WishGee" />
    <meta property="og:description" content="Find the product of your dreams" />
    <meta
      property="og:image"
      content="https://wishgee.com/images/og-image.jpg"
    />
    <meta property="og:url" content="https://wishgee.com" />
    <meta
      name="keywords"
      content="Best deal,best product, cheapest price for product, product online, wish genie, cheapest price online, best product online, best deal online"
    />
    <meta name="author" content="WishGee" />

    <link rel="icon" type="image/png" href={favIco} />
    <link rel="apple-touch-icon" href={favIco} />
    <title>WishGee - What's your wish?</title>
    </Helmet>
    <Blog />
    </>
)
}