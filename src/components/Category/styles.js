import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 1px solid #darkgoldenrod;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: 100px;
    overflow: hidden;
    object-fit: cover;
    ${props => props.loading  && css`
        f
        background:red;
    `}

`