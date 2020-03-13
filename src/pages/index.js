import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Button from '../components/button'

const Greetings = styled.h1`
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: solid 1px #eee;
`

class IndexPage extends React.Component {
    render() {
        const { data } = this.props
        const { siteMetadata } = data.site
        const {
            title,
            social: { twitter },
        } = siteMetadata

        return (
            <Layout location={this.props.location} title={title}>
                <SEO
                    title="Home"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <Greetings>
                    Hey people{' '}
                    <span role="img" aria-label="wave emoji">
                        👋
                    </span>
                </Greetings>
                <p>
                    {' '}
                    My name is <strong>Nicolas Chenet</strong>, and I 'm working
                    as a <strong>Frontend Engineer</strong> at{' '}
                    <a
                        href="https://www.datadoghq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Datadog
                    </a>
                    .
                </p>
                <p>
                    I publish here some random tech thoughts, which could
                    eventually be considered as "articles".
                </p>
                <p>
                    In case you like what I write, you might want to{' '}
                    <a
                        href={`https://twitter.com/${twitter}`}
                        rel="noopener noreferrer"
                    >
                        follow me on Twitter
                    </a>
                    .
                </p>

                <Link to="/blog/">
                    <Button marginTop="100px">Go to Blog</Button>
                </Link>
            </Layout>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                social {
                    twitter
                }
            }
        }
    }
`
