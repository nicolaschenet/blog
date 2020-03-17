import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'
import Button from '../components/button'

import { rhythm } from '../utils/typography'

const Shortcuts = styled.div`
    margin-top: ${rhythm(2)};
`

const Shortcut = styled(Link)`
    display: block;
    margin-bottom: ${rhythm(1 / 2)};

    &:last-child {
        margin: 0;
    }
`

const IndexPage = ({ data, location }) => {
    const { siteMetadata } = data.site
    const {
        author,
        title,
        social: { twitter },
    } = siteMetadata

    return (
        <Layout location={location} title={title}>
            <SEO
                title="Home"
                keywords={[
                    'blog',
                    'gatsby',
                    'javascript',
                    'react',
                    'nicolas chenet',
                ]}
            />
            <h2>
                Hey people{' '}
                <span role="img" aria-label="wave emoji">
                    👋
                </span>
            </h2>
            <p>
                My name is <strong>{author}</strong>, and I 'm working as a{' '}
                <strong>Frontend Engineer</strong> at{' '}
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
                I publish here some random tech thoughts, which could eventually
                be considered as "articles".
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
            <Shortcuts>
                <h2>What now? </h2>
                <Shortcut to="/experience/">
                    <Button>See my experience</Button>
                </Shortcut>
                <Shortcut to="/blog/">
                    <Button>Read some interesting stuff in the blog</Button>
                </Shortcut>
            </Shortcuts>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                author
                title
                social {
                    twitter
                }
            }
        }
    }
`
