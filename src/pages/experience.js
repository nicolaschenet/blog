import * as React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import resume from '../../content/resume/profile.json'

/** Component */
export default ({ data, location }) => {
    const {
        site: {
            siteMetadata: { title },
        },
    } = data
    console.log({ resume })
    return (
        <Layout location={location} title={title}>
            <SEO title="CV" />
            Here comes the CV...
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
