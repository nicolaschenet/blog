import * as React from 'react'

import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm, scale } from '../utils/typography'

import resume from '../../content/resume/profile.json'

/** Component */
export default ({ data, location }) => {
    const {
        site: {
            siteMetadata: { title },
        },
        allFile: { edges: imageNodes },
    } = data
    console.log({ resume, imageNodes })

    const getCompanyLogo = React.useCallback(company => {
        const result = imageNodes.find(
            ({ node }) => node.name === company.toLowerCase()
        )
        if (!result) {
            return {}
        }
        return result.node.childImageSharp.fixed
    }, [])

    return (
        <Layout location={location} title={title}>
            <SEO title="CV" />
            <Wrapper>
                {resume.experience.map(
                    ({ start, role, company, description }) => {
                        const logoFixed = getCompanyLogo(company)
                        return (
                            <ExperienceItem key={`experience-${start}`}>
                                <Title>
                                    {logoFixed ? (
                                        <Image
                                            fixed={logoFixed}
                                            style={{
                                                marginRight: rhythm(1 / 2),
                                                width: 40,
                                                background: '#fff',
                                            }}
                                            imgStyle={{
                                                padding: '2px',
                                            }}
                                        />
                                    ) : null}
                                    <Position>
                                        <strong>{role}</strong> at {company}
                                    </Position>
                                </Title>
                                <Description>{description}</Description>
                            </ExperienceItem>
                        )
                    }
                )}
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 1;
    padding-bottom: 50px;

    &::before {
        content: '';
        position: absolute;
        top: ${rhythm(1.5)};
        left: calc(1px + 18px);
        height: calc(100% - 50px);
        border-left: solid #f0f0f0 2px;
    }
`

const Description = styled.div``
const Position = styled.div``

const descriptionScale = scale(-1 / 5)

const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 16px;
        height: 8px;
        width: 8px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1), 0 0 0 1px #eee;
    }

    & ${Position} {
        strong {
            font-weight: 600;
        }
    }
`

const ExperienceItem = styled.div`
    padding: ${rhythm(1.5)} 0;
    transition: transform 0.2s;
    transform-origin: left;

    &:hover {
        transform: scale(1.05) translateX(-1px);
    }
    &:first-child {
        padding-top: 0;
    }

    & ${Description} {
        color: #aaa;
        font-size: ${descriptionScale.fontSize};
        line-height: ${descriptionScale.lineHeight};
        margin-left: calc(40px + ${rhythm(1 / 2)});
    }
`

/** GraphQL */
export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allFile(
            filter: {
                extension: { regex: "/(jpeg|jpg|gif|png)/" }
                sourceInstanceName: { eq: "logos" }
            }
        ) {
            edges {
                node {
                    name
                    childImageSharp {
                        fixed(width: 40, height: 40) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`
