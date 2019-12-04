/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { SeoQuery } from '../__generated__/graphql'

type Meta = JSX.IntrinsicElements['meta']

type Props = {
  description?: string
  lang?: string
  meta?: Meta[]
  title: string
}

const SEO_QUERY = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO: React.FC<Props> = ({ description = '', lang = 'ja', meta = [], title }) => {
  const { site } = useStaticQuery<SeoQuery>(SEO_QUERY)

  const metaDescription =
    description || (site && site.siteMetadata && site.siteMetadata.description) || ''

  const contentMeta: Meta[] = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: (site && site.siteMetadata && site.siteMetadata.author) || ''
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${(site && site.siteMetadata && site.siteMetadata.title) || ''}`}
      meta={contentMeta.concat(meta)}
    />
  )
}

export default SEO
