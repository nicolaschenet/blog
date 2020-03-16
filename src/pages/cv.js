import * as React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/** Component */
export default ({ data, location }) => {
    const {
        site: {
            siteMetadata: { title },
        },
    } = data
    return (
        <Layout location={location} title={title}>
            <SEO title="CV" />
            CV
        </Layout>
    )
}

/** GraphQL */
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
