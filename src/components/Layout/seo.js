import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import faviconApple from "../../images/apple-touch-icon.png"
import faviconsmall from "../../images/favicon-16x16.png"
import faviconAndriod from "../../images/android-chrome-192x192.png"
import faviconmedium from "../../images/favicon-32x32.png"

export default function SEO({ description, title, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            social {
              twitter
              linkedin
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:description`,
          content: `ayobami agunroye twitter handle`,
        },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="192x192" href={faviconAndriod} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconmedium} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconsmall} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
