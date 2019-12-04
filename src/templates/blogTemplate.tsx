import React from 'react'
import { graphql } from 'gatsby'
import { PageQuery } from '../__generated__/graphql'
import './syntax-highlighting.css'

export default function Template({ data }: { data: PageQuery }) {
  const { markdownRemark } = data
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { frontmatter, html } = markdownRemark!
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {frontmatter && (
          <>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </>
        )}
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html || '' }} />
      </div>
    </div>
  )
}

export const PAGE_QUERY = graphql`
  query Page($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
