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
        const { node } = imageNodes.find(
            ({ node }) => node.name === company.toLowerCase()
        )
        return node.childImageSharp.fixed
    }, [])

    return (
        <Layout location={location} title={title}>
            <SEO title="CV" />
            <Wrapper>
                {resume.experience.map(
                    ({ start, role, company, description }) => (
                        <ExperienceItem key={`experience-${start}`}>
                            <Title>
                                <Image
                                    fixed={getCompanyLogo(company)}
                                    style={{
                                        marginRight: rhythm(1 / 2),
                                        minWidth: 40,
                                        // borderRadius: `40px`,
                                        background: '#fff',
                                        // border: 'solid 1px #dedede',
                                    }}
                                    imgStyle={{
                                        // borderRadius: `100%`,
                                        padding: '5px',
                                        // padding: '2px',
                                    }}
                                />
                                <Position>
                                    <strong>{role}</strong> at {company}
                                </Position>
                            </Title>
                            <Description>{description}</Description>
                        </ExperienceItem>
                    )
                )}
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    position: relative;
    flex: 1;

    &::before {
        content: '';
        position: absolute;
        top: ${rhythm(1.5)};
        left: calc(1px + 18px);
        height: 100%;
        border-left: solid #f0f0f0 2px;
    }
`

const Description = styled.div``
const Position = styled.div``

const descriptionScale = scale(-1 / 5)

const Title = styled.div`
    display: flex;
    align-items: center;

    & ${Position} {
        strong {
            font-weight: 600;
        }
    }
`

const ExperienceItem = styled.div`
    padding: ${rhythm(1.5)} 0;

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
