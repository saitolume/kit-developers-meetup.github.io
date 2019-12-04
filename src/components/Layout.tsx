/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import Header from './Header'
import { SiteTitleQuery } from '../__generated__/graphql'
import './reset.css'

const SITE_TITLE_QUERY = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FC = ({ children }) => {
  const { site } = useStaticQuery<SiteTitleQuery>(SITE_TITLE_QUERY)

  return (
    <>
      <Normalize />
      <Header siteTitle={(site && site.siteMetadata && site.siteMetadata.title) || ''} />
      <Wrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

export default Layout
