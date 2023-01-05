import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts)
  return (
    <>
      {posts &&
        posts.map(({ node: post }) => (
          <div className="blog-content-container is-parent column is-6" key={post.id}>
            <div className="blog-content-img-container">
              <img src={post.frontmatter?.imageSource || 'https://wishgee.com/static/media/video-image.91c17d5f.webp'} alt="product" />
            </div>
            <article
              className={`blog-list-item ${post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
            >
              <header>
                <p className="post-meta">
                  <a
                    className="title-has-text-primary"
                    href={post.frontmatter.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {post.frontmatter.title}
                  </a>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
                <p>
                  {post.excerpt.substring(0,120)}...
                </p>
              </header>
              <Link className="keep-reading-link" to={post.frontmatter.path}>
                Keep Reading →
              </Link>
            </article>
          </div>
        ))}
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                imageSource
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)