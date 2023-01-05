import React from 'react'

import BlogRoll from '../../components/BlogRoll'
import Logo from '../../../blog/assets/logo.png'

export default () => {
  return (
    <>
      <header className="header-container">
        <div className="logo-container">
          <a href="https://www.wishgee.com"><img src={Logo} alt="WishGee" /></a>
        </div>
      </header>
      <section className="main-container">
        <div className="content">
        <h1>Latest Posts</h1>
        <h3>Read about our research here.</h3>
          <BlogRoll />
        </div>
      </section>
      <footer className="footer-container">
        <p>© 2020 WishGee</p>
      </footer>
    </>
  )
}