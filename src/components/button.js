import React from 'react'
import styled from 'styled-components'

import {
    BUTTON,
    BUTTON_TEXT,
    BUTTON_HOVER,
    BUTTON_TEXT_HOVER,
} from '../utils/ui-colors'
import { scale } from '../utils/typography'

const baseTypographyScale = scale(-1.5 / 5)

const ButtonWrapper = styled.button`
    background: ${BUTTON};
    border: none;
    border-radius: 5px;
    font-size: ${baseTypographyScale.fontSize};
    line-height: ${baseTypographyScale.lineHeight};
    color: ${BUTTON_TEXT};
    cursor: pointer;
    text-align: left;

    &:hover {
        background: ${BUTTON_HOVER};
        color: ${BUTTON_TEXT_HOVER};
    }
`
const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>

export default Button
