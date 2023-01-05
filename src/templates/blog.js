import React from "react"
import { graphql } from "gatsby"
import '../style/index.css';
import { Helmet } from "react-helmet"
import favIco from './favicon.png'
import Logo from '../../blog/assets/logo.png';
const facebook = 'https://s3.ap-northeast-2.amazonaws.com/wishgee.com/emailImages/facebook.png';
const instagram  = 'https://s3.ap-northeast-2.amazonaws.com/wishgee.com/emailImages/instagram.png';
const twitter = 'https://s3.ap-northeast-2.amazonaws.com/wishgee.com/emailImages/twitter.png';
const linkedin = 'https://s3.ap-northeast-2.amazonaws.com/wishgee.com/emailImages/linkedin.png';
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  if(!html){
    return '';
  }

  const redirectToCTA = () => {
    window.location.href = "https://wishgee.com/addWish"
  }
  // const newHtml = html.replace(/<img src="/g,'<img src="../')
  let newHtml = html.replace(/<a href=/g, '<a target="_blank" rel="noreferrer" href=')
  newHtml = `<p><img src="../${frontmatter.imageSource || 'https://wishgee.com/static/media/video-image.91c17d5f.webp'}" alt="photo" /></p>${newHtml}`
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <meta
      name="description"
      content={frontmatter.description}
    />
    <meta property="og:title" content={frontmatter.title} />
    <meta property="og:description" content={frontmatter.description} />
    <meta
      property="og:image"
      content={"https://blog.wishgee.com/"+frontmatter.imageSource}
    />
    <meta property="og:url" content={frontmatter.path} />
    <meta
      name="keywords"
      content={frontmatter.keywords}
    />
    <meta name="author" content="WishGee" />

    <link rel="icon" type="image/png" href={favIco} />
    <link rel="apple-touch-icon" href={favIco} />
    <title>WishGee - What's your wish?</title>
    </Helmet>
      <header className="header-container">
        <div className="logo-container">
          <a href="https://wishgee.com">
          <img src={Logo} alt="WishGee" />
          </a>
        </div>
        <div className="link-container">
          <a href="/">Blog Home</a>
        </div>
      </header>
      <section className="main-container">
        <div className="content">
        <div className="blog-post-container">
      <div className="blog-post">
      <p className="post-meta">
                  <h1
                    className="title-has-text-primary"
                  >
                    {frontmatter.title}
                  </h1>
                  <span className="subtitle is-size-5 is-block">
                    {frontmatter.date}
                  </span>
                </p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: newHtml }}
        />
        <div className="cta-section">
          <p>Looking for expert's recommendation?</p>
          <button className="cta-btn" onClick={redirectToCTA}>
            Make a Wish
          </button>
          <p>It's free.</p>
          <table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" valign="top">
            <tbody>
            <tr align="center" style={{'vertical-align':'top', 'display': 'inline-block', 'text-align': 'center'}} valign="top">
            <td className="footer-social" valign="top"><a href="https://www.facebook.com/wishgeenie" rel="noreferrer" target="_blank"><img alt="Facebook" height="32" src={facebook} className="footer-social-item" title="Facebook" width="32"/></a></td>
            <td className="footer-social" valign="top"><a href="https://www.instagram.com/wish_gee/" rel="noreferrer" target="_blank"><img alt="Facebook" height="32" src={instagram} className="footer-social-item" title="Facebook" width="32"/></a></td>
            <td className="footer-social" valign="top"><a href="https://www.linkedin.com/company/43270280/" rel="noreferrer" target="_blank"><img alt="Facebook" height="32" src={linkedin} className="footer-social-item" title="Facebook" width="32"/></a></td>
            <td className="footer-social" valign="top"><a href="https://twitter.com/wish_gee" rel="noreferrer" target="_blank"><img alt="Facebook" height="32" src={twitter} className="footer-social-item" title="Facebook" width="32"/></a></td>
            </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
        </div>
      </section>
      <footer className="footer-container">
        <p>© 2020 WishGee</p>
      </footer>
    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageSource
      }
    }
  }
`