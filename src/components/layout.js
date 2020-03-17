import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

import Navigation from './Navigation'

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        return (
            <Wrapper>
                <div
                    style={{
                        marginLeft: `auto`,
                        marginRight: `auto`,
                        width: rhythm(24),
                        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                    }}
                >
                    <header>
                        <h1
                            style={{
                                ...scale(1),
                                marginBottom: rhythm(1),
                                marginTop: 0,
                            }}
                        >
                            <Link
                                style={{
                                    boxShadow: `none`,
                                    textDecoration: `none`,
                                    color: `inherit`,
                                }}
                                to="/"
                            >
                                {title}
                            </Link>
                        </h1>
                    </header>
                    <Navigation />
                    <main>{children}</main>
                </div>
                <Footer>
                    ©{new Date().getFullYear()}, Built with
                    <a href="https://www.gatsbyjs.org"> Gatsby </a>
                </Footer>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const footerTypographyScale = scale(-1 / 5)
const Footer = styled.footer`
    text-align: center;
    font-size: ${footerTypographyScale.fontSize};
    line-height: ${footerTypographyScale.lineHeight};
    margin: ${rhythm(1 / 2)};
`

export default Layout
