import * as React from 'react'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import { NAVIGATION_TEXT, LINK, LINK_HOVER } from '../utils/ui-colors'
import { Link } from 'gatsby'

const baseTypographyRythm = rhythm(1)
const baseTypographyScale = scale(-1.5 / 5)

const NavigationWrapper = styled.div`
    display: flex;
    margin: ${baseTypographyRythm} 0;
    font-size: ${baseTypographyScale.fontSize};
    line-height: ${baseTypographyScale.lineHeight};
    color: ${NAVIGATION_TEXT};

    & a {
        margin-right: ${rhythm(4 / 5)};
        color: ${LINK};

        &:hover,
        &.active {
            color: ${LINK_HOVER};
            text-decoration: none;
        }
    }
`

const Navigation = () => (
    <NavigationWrapper>
        <Link to="/" activeClassName="active">
            Home
        </Link>
        <Link to="experience/" activeClassName="active">
            Experience
        </Link>
        <Link to="blog/" activeClassName="active">
            Blog
        </Link>
    </NavigationWrapper>
)

export default Navigation
