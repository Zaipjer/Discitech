import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../assets/images/favicon.ico';
import logo192 from '../assets/images/logo192.png';

const Seo = ({ description, keywords, title, image, url, author, lang }) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaAuthor = author || data.site.siteMetadata.author
                const metaUrl = url || data.site.siteMetadata.url
                const metaImage = image || data.site.siteMetadata.image
                const htmlLang = lang || data.site.siteMetadata.lang
                const metaKeywords = keywords || data.site.siteMetadata.keywords
                return (
                    <Helmet
                        htmlAttributes={{
                            lang: htmlLang
                        }}
                        title={metaTitle}
                        link={[
                            {
                                rel: `icon`,
                                href: favicon,
                            },
                            {
                                rel: `apple-touch-icon`,
                                href: logo192,
                            },

                        ]}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                name: `og:description`,
                                content: metaDescription,
                            },
                            {
                                name: `og:type`,
                                content: `website`,
                            },
                            {
                                name: `og:image`,
                                content: metaImage,
                            },
                            {
                                name: `og:url`,
                                content: metaUrl,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                content: metaAuthor,
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords,
                            } : []
                        )
                        }
                    />
                )
            }}
        />
    );
}

export default Seo;

const detailsQuery = graphql`
    query DefaultSEOQuery{
        site{
            siteMetadata{
                title
                description
                author
                image
                url
                keywords
                lang
            }
        }
    }
`