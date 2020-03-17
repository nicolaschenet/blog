module.exports = {
    siteMetadata: {
        title: `Nicolas Chenet | Frontend Engineer`,
        author: `Nicolas Chenet`,
        description: `Personal website`,
        siteUrl: `https://nicolaschenet.dev`,
        social: {
            twitter: `nicolaschenet`,
        },
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-feed-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/resume`,
                name: `resume`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                    },
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                    },
                    {
                        resolve: `gatsby-remark-smartypants`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-160631327-1`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nicolas Chenet | Frontend Engineer`,
                short_name: `Nicolas Chenet | Frontend Engineer`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // edit below
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}
